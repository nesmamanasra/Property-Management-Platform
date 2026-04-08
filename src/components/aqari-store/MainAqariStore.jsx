import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  SlidersHorizontal,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

const filters = [
  { label: "الكل", value: "الكل" },
  { label: "للبيع", value: "للبيع" },
  { label: "للإيجار", value: "للإيجار" },
];

const cities = [
  "الكل",
  "نابلس",
  "رام الله",
  "الخليل",
  "بيت لحم",
  "جنين",
  "طولكرم",
  "قلقيلية",
  "سلفيت",
  "أريحا",
];

function formatPrice(price, badge) {
  if (badge === "للإيجار") return `${Number(price || 0).toLocaleString()} $ / شهر`;
  return `${Number(price || 0).toLocaleString()} $`;
}

function FilterButton({ label, active = false, icon = null, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function PropertyCard({ property }) {
  const navigate = useNavigate();
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-44 overflow-hidden">
        <img
          src={property.image || "/placeholder-property.jpg"}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-slate-700 backdrop-blur-md transition hover:bg-white">
            <ArrowUpLeft size={16} />
          </button>

          <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {property.badge}
          </span>
        </div>
      </div>

      <div className="p-4 text-right">
        <h3 className="line-clamp-1 text-[17px] font-semibold text-slate-900">
          {property.title}
        </h3>

        <div className="mt-1 flex items-center justify-end gap-1 text-sm text-slate-500">
          <span className="line-clamp-1">{property.location}</span>
          <MapPin size={14} className="shrink-0" />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {property.type}
          </span>

          <div className="text-right">
            <p className="text-[13px] text-slate-400">السعر</p>
            <p className="text-2xl font-bold tracking-tight text-slate-900">
              {formatPrice(property.price, property.badge)}
            </p>
          </div>
        </div>

        <button onClick={() => navigate("/showproperty")}
        className="mt-4 w-full rounded-xl bg-gradient-to-b from-[#1F3C88] to-[#18346F] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
}

function PageButton({ label, icon, active = false, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex h-10 min-w-10 items-center justify-center rounded-xl border text-sm font-semibold transition ${
        active
          ? "border-emerald-600 bg-emerald-600 px-3 text-white"
          : "border-slate-200 bg-white px-3 text-slate-600 hover:bg-slate-50"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {icon || label}
    </button>
  );
}

export default function MainAqariStore({ searchQuery = "" }) {
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeFilter, setActiveFilter] = useState("الكل");
  const [selectedCity, setSelectedCity] = useState("الكل");
  const [sortBy, setSortBy] = useState("الأحدث");

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("properties")
        .select(`
          id,
          title,
          image,
          property_type,
          operation_type,
          city,
          price
        `)
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
        return;
      }

      const formatted = (data || []).map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        location: item.city,
        city: item.city,
        type: item.property_type,
        badge:
          item.operation_type === "إيجار" || item.operation_type === "للإيجار"
            ? "للإيجار"
            : "للبيع",
        price: Number(item.price || 0),
      }));

      setAllProperties(formatted);
      setLoading(false);
    };

    fetchProperties();
  }, []);

  const filteredProperties = useMemo(() => {
    let data = [...allProperties];

    if (activeFilter !== "الكل") {
      data = data.filter((item) => item.badge === activeFilter);
    }

    if (selectedCity !== "الكل") {
      data = data.filter((item) => item.city === selectedCity);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      data = data.filter((item) =>
        [
          item.title,
          item.location,
          item.city,
          item.type,
          item.badge,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    if (sortBy === "الأعلى سعرًا") {
      data.sort((a, b) => b.price - a.price);
    } else if (sortBy === "الأقل سعرًا") {
      data.sort((a, b) => a.price - b.price);
    } else {
      data.sort((a, b) => b.id - a.id);
    }

    return data;
  }, [allProperties, activeFilter, selectedCity, sortBy, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, selectedCity, sortBy, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProperties.length / perPage));
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <section dir="rtl" className="w-full rounded-[28px] p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
          <FilterButton
            label="مزيد من الفلاتر"
            icon={<SlidersHorizontal size={15} />}
          />

          {filters.map((item) => (
            <FilterButton
              key={item.value}
              label={item.label}
              active={activeFilter === item.value}
              onClick={() => setActiveFilter(item.value)}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 outline-none"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city === "الكل" ? "كل المدن" : city}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 outline-none"
          >
            <option>الأحدث</option>
            <option>الأعلى سعرًا</option>
            <option>الأقل سعرًا</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="py-10 text-center text-slate-500">جاري تحميل العقارات...</div>
      ) : paginatedProperties.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          لا توجد نتائج مطابقة للفلاتر الحالية
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {paginatedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <PageButton
            icon={<ChevronRight size={16} />}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          />

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <PageButton
                key={page}
                label={String(page)}
                active={currentPage === page}
                onClick={() => setCurrentPage(page)}
              />
            );
          })}

          <PageButton
            icon={<ChevronLeft size={16} />}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          />
        </div>

        <p className="text-sm text-slate-500 text-right">
          عرض{" "}
          <span className="font-semibold text-slate-800">
            {filteredProperties.length === 0 ? 0 : (currentPage - 1) * perPage + 1}
          </span>{" "}
          -{" "}
          <span className="font-semibold text-slate-800">
            {Math.min(currentPage * perPage, filteredProperties.length)}
          </span>{" "}
          من{" "}
          <span className="font-semibold text-slate-800">
            {filteredProperties.length}
          </span>{" "}
          عقار
        </p>
      </div>
    </section>
  );
}