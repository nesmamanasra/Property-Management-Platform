import React, { useMemo, useRef, useState } from "react";
import {
  Download,
  Search,
  Printer,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useDashboardData } from "../../context/DashboardDataContext";

function StatusBadge({ status }) {
  const styles = {
    "متاح": "bg-[#EAFBF0] text-[#22C55E]",
    "قيد الانتظار": "bg-[#FFF7E8] text-[#F59E0B]",
    "تم البيع": "bg-[#EEF2FF] text-[#4F46E5]",
    "تم التأجير": "bg-[#F3E8FF] text-[#9333EA]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status || "—"}
    </span>
  );
}

export default function TableData({ onEdit, renderAddButton }) {
  const { properties, setProperties } = useDashboardData(); // 🔥 مهم

  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);

  const menuRef = useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredData = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();

    if (!value) return properties;

    return properties.filter((item) => {
      return (
        String(item.id || "").toLowerCase().includes(value) ||
        String(item.owners?.full_name || "").toLowerCase().includes(value) ||
        String(item.title || "").toLowerCase().includes(value) ||
        String(item.property_type || "").toLowerCase().includes(value) ||
        String(item.operation_type || "").toLowerCase().includes(value) ||
        String(item.city || "").toLowerCase().includes(value) ||
        String(item.price || "").toLowerCase().includes(value) ||
        String(item.status || "").toLowerCase().includes(value) ||
        String(item.description || "").toLowerCase().includes(value)
      );
    });
  }, [properties, searchTerm]);

  // 🔥 حذف سريع بدون refresh
  const handleDelete = async (id) => {
    const confirmed = window.confirm("هل أنت متأكد من حذف هذا العقار؟");
    if (!confirmed) return;

    setDeleteLoadingId(id);

    // حذف فوري من الواجهة
    setProperties((prev) => prev.filter((item) => item.id !== id));

    const { error } = await supabase.from("properties").delete().eq("id", id);

    if (error) {
      console.error("Error deleting property:", error);

      // rollback إذا فشل
      // (اختياري ترجع البيانات من جديد)
    }

    setMenuOpenId(null);
    setDeleteLoadingId(null);
  };

  return (
    <section className="bg-[#F7F8FA] p-6" dir="rtl">
      <div className="mx-auto max-w-[1400px]">
        <div className="rounded-2xl border border-[#ECEEF2] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)]">

          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-[#EEF1F5] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-right text-lg font-semibold text-[#1F2937]">
              العقارات
            </h3>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2.5 text-sm text-[#9CA3AF]">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="بحث..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-right outline-none placeholder:text-[#9CA3AF]"
                />
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] transition hover:bg-[#f9fafb]">
                <Download size={16} />
                تصدير
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] transition hover:bg-[#f9fafb]">
                <Printer size={16} />
                طباعة
              </button>

              {renderAddButton}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-[1900px] w-full">
              <thead>
                <tr className="border-b border-[#EEF1F5] bg-[#FCFCFD] text-right">
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">#</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">المالك</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">الصورة</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">العقار</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">النوع</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">العملية</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">المدينة</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">الوصف</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">السعر</th>
                  <th className="px-5 py-4 text-xs text-[#9CA3AF]">الحالة</th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="group border-b border-[#F3F4F6] text-sm hover:bg-[#18346F]"
                  >
                    <td className="px-5 py-4 group-hover:text-white">{index + 1}</td>

                    <td className="px-5 py-4 group-hover:text-white">
                      {item.owners?.full_name || "—"}
                    </td>

                    <td className="px-5 py-4">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title || "property"}
                          loading="lazy" // 🔥 مهم
                          className="h-14 w-20 rounded-lg object-cover"
                        />
                      ) : (
                        "—"
                      )}
                    </td>

                    <td className="px-5 py-4 group-hover:text-white">{item.title}</td>
                    <td className="px-5 py-4 group-hover:text-white">{item.property_type}</td>
                    <td className="px-5 py-4 group-hover:text-white">{item.operation_type}</td>
                    <td className="px-5 py-4 group-hover:text-white">{item.city}</td>
                    <td className="px-5 py-4 group-hover:text-white">{item.description}</td>
                    <td className="px-5 py-4 group-hover:text-white">{item.price}</td>

                    <td className="px-5 py-4">
                      <StatusBadge status={item.status} />
                    </td>

                    <td className="relative px-5 py-4">
                      <button
                        onClick={() =>
                          setMenuOpenId(menuOpenId === item.id ? null : item.id)
                        }
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {menuOpenId === item.id && (
                        <div
                          ref={menuRef}
                          className="absolute left-5 top-12 z-20 rounded-xl bg-white shadow"
                        >
                          <button
                            onClick={() => {
                              onEdit(item);
                              setMenuOpenId(null);
                            }}
                            className="flex gap-2 px-4 py-2"
                          >
                            تعديل <Pencil size={14} />
                          </button>

                          <button
                            onClick={() => handleDelete(item.id)}
                            disabled={deleteLoadingId === item.id}
                            className="flex gap-2 px-4 py-2 text-red-600 disabled:opacity-50"
                          >
                            {deleteLoadingId === item.id
                              ? "جاري الحذف..."
                              : "حذف"}
                            <Trash2 size={14} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={11} className="py-6 text-center text-gray-400">
                      لا توجد بيانات
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}