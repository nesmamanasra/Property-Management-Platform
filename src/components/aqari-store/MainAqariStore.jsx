import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  SlidersHorizontal,
  Search,
  Building2,
  MapPinned,
  BadgeDollarSign,
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
  if (badge === "للإيجار") {
    return `${Number(price || 0).toLocaleString()} $ / شهر`;
  }
  return `${Number(price || 0).toLocaleString()} $`;
}

function FilterButton({ label, active = false, icon = null, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
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

function HeroSection({ onSearch, propertiesCount }) {
  const [query, setQuery] = useState("");

  const stats = [
    {
      icon: <Building2 size={18} />,
      value: `+${propertiesCount || 0}`,
      label: "عقار متاح",
    },
    {
      icon: <MapPinned size={18} />,
      value: "+10",
      label: "مدن رئيسية",
    },
    {
      icon: <BadgeDollarSign size={18} />,
      value: "24/7",
      label: "تحديث مستمر",
    },
  ];

  const quickSearches = ["للبيع", "للإيجار", "شقة", "بيت", "أرض", "فيلا"];

  return (
    <section dir="rtl" className="relative mb-8 overflow-hidden rounded-[32px]">
      <div className="relative min-h-[520px] w-full">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          src="/hero-property.jpg"
          alt="Aqari Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-[#0f172ae6] via-[#18346fcc] to-[#1F3C88d9]" />

        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

  <motion.div
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="absolute top-0 left-0 right-0 z-20"
>
  <div className="mx-auto flex max-w-[1400px] justify-start px-6 py-6 md:px-10 lg:px-14">
    
    <div className="relative flex flex-col items-start">
      
      {/* Glow خلف اللوجو */}
      <div className="absolute right-0 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl"></div>

      {/* Logo */}
      <motion.img
        src="/aqari_top_white.png"
        alt="Aqari"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 h-30 w- object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:h-24 md:w-24 lg:h-28 lg:w-28"
      />

    </div>
  </div>
</motion.div>

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1400px] flex-col justify-center px-6 py-10 pt-28 md:px-10 lg:px-14">
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <div className="flex flex-col text-right">
                <span className="text-xl font-bold text-white/70">
                  منصتك الذكية لاكتشاف أفضل العقارات
                </span>
              </div>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
              اعثر على العقار المناسب
              <span className="mt-2 block text-emerald-300">
                للبيع أو للإيجار بسهولة وأناقة
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base lg:text-lg">
              استعرض أحدث العقارات في مختلف المدن، وقارن بين الخيارات بسهولة،
              وابحث بطريقة سريعة داخل منصة عقارية حديثة بتجربة استخدام احترافية.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 w-full max-w-4xl rounded-[28px] border border-white/15 bg-white/90 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto]">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <Search size={18} className="text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ابحث عن مدينة، نوع عقار، أو اسم العقار..."
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                onClick={() => onSearch(query)}
                className="rounded-2xl bg-gradient-to-b from-[#1F3C88] to-[#18346F] px-6 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                ابدأ البحث الآن
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-end gap-2">
              {quickSearches.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setQuery(item);
                    onSearch(item);
                  }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-md"
              >
                <div className="mb-2 flex justify-end text-emerald-300">{item.icon}</div>
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-sm text-white/75">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.image || "/placeholder-property.jpg"}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-slate-700 backdrop-blur-md transition hover:bg-white">
            <ArrowUpLeft size={16} />
          </button>

          <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white shadow">
            {property.badge}
          </span>
        </div>
      </div>

      <div className="p-5 text-right">
        <h3 className="line-clamp-1 text-[18px] font-bold text-slate-900">
          {property.title}
        </h3>

        <div className="mt-2 flex items-center justify-end gap-1 text-sm text-slate-500">
          <span className="line-clamp-1">{property.location}</span>
          <MapPin size={14} className="shrink-0" />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {property.type}
          </span>

          <div className="text-right">
            <p className="text-[12px] text-slate-400">السعر</p>
            <p className="text-[24px] font-extrabold tracking-tight text-slate-900">
              {formatPrice(property.price, property.badge)}
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate(`/property/${property.id}`)}
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#1F3C88] to-[#18346F] py-2 text-white hover:opacity-90 transition"
        >
          عرض التفاصيل
        </button>
      </div>
    </motion.div>
  );
}

export default function MainAqariStore() {
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
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
        [item.title, item.location, item.city, item.type, item.badge]
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
    <section dir="rtl" className="w-full rounded-[28px] bg-[#F5F7FA] p-4 sm:p-5 lg:p-6">
      <HeroSection
        onSearch={setSearchQuery}
        propertiesCount={allProperties.length}
      />

      <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
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
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 outline-none transition focus:border-[#1F3C88]"
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
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 outline-none transition focus:border-[#1F3C88]"
            >
              <option>الأحدث</option>
              <option>الأعلى سعرًا</option>
              <option>الأقل سعرًا</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="py-12 text-center text-slate-500">جاري تحميل العقارات...</div>
      ) : paginatedProperties.length === 0 ? (
        <div className="py-12 text-center text-slate-500">
          لا توجد نتائج مطابقة للفلاتر الحالية
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
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

        <p className="text-right text-sm text-slate-500">
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