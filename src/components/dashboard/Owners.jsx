import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Download,
  Search,
  Printer,
  MoreHorizontal,
  Plus,
  X,
  Pencil,
  Trash2,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function Owners() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const menuRef = useRef(null);

  const [formData, setFormData] = useState({
    full_name: "",
    national_id: "",
    phone: "",
  });

  useEffect(() => {
    getOwners();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getOwners = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("owners")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching owners:", error);
      setTransactions([]);
    } else {
      setTransactions(data || []);
    }

    setLoading(false);
  };

  const filteredTransactions = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();

    if (!value) return transactions;

    return transactions.filter((item) => {
      return (
        String(item.id ?? "").toLowerCase().includes(value) ||
        String(item.full_name ?? "").toLowerCase().includes(value) ||
        String(item.national_id ?? "").toLowerCase().includes(value) ||
        String(item.phone ?? "").toLowerCase().includes(value) ||
        String(item.created_at ?? "").toLowerCase().includes(value)
      );
    });
  }, [transactions, searchTerm]);

  const resetForm = () => {
    setFormData({
      full_name: "",
      national_id: "",
      phone: "",
    });
    setEditingItem(null);
  };

  const closeModal = () => {
    setShowAddModal(false);
    resetForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOwner = async () => {
    if (
      !formData.full_name.trim() ||
      !formData.national_id.trim() ||
      !formData.phone.trim()
    ) {
      alert("يرجى تعبئة جميع الحقول المطلوبة");
      return;
    }

    setLoading(true);

    if (editingItem) {
      const { error } = await supabase
        .from("owners")
        .update({
          full_name: formData.full_name.trim(),
          national_id: formData.national_id.trim(),
          phone: formData.phone.trim(),
        })
        .eq("id", editingItem.id);

      if (error) {
        console.error("Error updating owner:", error);
        alert("حدث خطأ أثناء تعديل المالك");
        setLoading(false);
        return;
      }
    } else {
      const { error } = await supabase.from("owners").insert([
        {
          full_name: formData.full_name.trim(),
          national_id: formData.national_id.trim(),
          phone: formData.phone.trim(),
        },
      ]);

      if (error) {
        console.error("Error adding owner:", error);
        alert("حدث خطأ أثناء إضافة المالك");
        setLoading(false);
        return;
      }
    }

    await getOwners();
    closeModal();
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("هل أنت متأكد من حذف هذا المالك؟");
    if (!confirmed) return;

    setLoading(true);

    const { error } = await supabase.from("owners").delete().eq("id", id);

    if (error) {
      console.error("Error deleting owner:", error);
      alert("حدث خطأ أثناء حذف المالك");
      setLoading(false);
      return;
    }

    await getOwners();
    setMenuOpenId(null);
    setLoading(false);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      full_name: item.full_name || "",
      national_id: item.national_id || "",
      phone: item.phone || "",
    });
    setShowAddModal(true);
    setMenuOpenId(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";

    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;

    return date.toLocaleDateString("en-CA");
  };

  return (
    <section className="bg-[#F7F8FA] p-6" dir="rtl">
      <div className="mx-auto max-w-[1400px]">
        <div className="rounded-2xl border border-[#ECEEF2] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
          <div className="flex flex-col gap-4 border-b border-[#EEF1F5] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-right text-lg font-semibold text-[#1F2937]">
              جدول المالكين
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

              <button
                onClick={() => {
                  resetForm();
                  setShowAddModal(true);
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#18346F] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1F3C88]"
              >
                <Plus size={16} />
                إضافة مالك
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full">
              <thead>
                <tr className="border-b border-[#EEF1F5] bg-[#FCFCFD] text-right">
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الرقم
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    ID
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الاسم الكامل
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    رقم الهوية
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    رقم الهاتف
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    تاريخ الإضافة
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الإجراءات
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-5 py-8 text-center text-sm text-[#6B7280]"
                    >
                      جاري تحميل البيانات...
                    </td>
                  </tr>
                ) : filteredTransactions.length > 0 ? (
                  filteredTransactions.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-b border-[#F3F4F6] text-right transition hover:bg-[#FAFBFC]"
                    >
                      <td className="px-5 py-4 text-sm text-[#374151]">
                        {index + 1}
                      </td>

                      <td className="px-5 py-4 text-sm text-[#374151]">
                        {item.id}
                      </td>

                      <td className="px-5 py-4 text-sm font-medium text-[#111827]">
                        {item.full_name}
                      </td>

                      <td className="px-5 py-4 text-sm text-[#374151]">
                        {item.national_id}
                      </td>

                      <td className="px-5 py-4 text-sm text-[#374151]">
                        {item.phone}
                      </td>

                      <td className="px-5 py-4 text-sm text-[#374151]">
                        {formatDate(item.created_at)}
                      </td>

                      <td className="relative px-5 py-4 text-sm text-[#374151]">
                        <div className="relative inline-block" ref={menuRef}>
                          <button
                            onClick={() =>
                              setMenuOpenId(
                                menuOpenId === item.id ? null : item.id
                              )
                            }
                            className="rounded-lg p-2 transition hover:bg-[#F3F4F6]"
                          >
                            <MoreHorizontal size={18} />
                          </button>

                          {menuOpenId === item.id && (
                            <div className="absolute left-0 top-11 z-20 min-w-[160px] rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-lg">
                              <button
                                onClick={() => handleEdit(item)}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#374151] transition hover:bg-[#F9FAFB]"
                              >
                                <Pencil size={16} />
                                تعديل
                              </button>

                              <button
                                onClick={() => handleDelete(item.id)}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
                              >
                                <Trash2 size={16} />
                                حذف
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-5 py-8 text-center text-sm text-[#6B7280]"
                    >
                      لا توجد بيانات حالياً
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-2xl rounded-2xl bg-[#F9FAFB] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#EEF1F5] px-5 py-4">
                <button
                  onClick={closeModal}
                  className="rounded-lg p-2 text-[#6B7280] transition hover:bg-[#EEF2F7]"
                >
                  <X size={18} />
                </button>

                <h3 className="text-lg font-semibold text-[#111827]">
                  {editingItem ? "تعديل مالك" : "إضافة مالك جديد"}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 px-5 py-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="أدخل الاسم الكامل"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    رقم الهوية
                  </label>
                  <input
                    type="text"
                    name="national_id"
                    value={formData.national_id}
                    onChange={handleInputChange}
                    placeholder="أدخل رقم الهوية"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    رقم الهاتف
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="أدخل رقم الهاتف"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#EEF1F5] bg-white px-5 py-4">
                <button
                  onClick={closeModal}
                  className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5563] transition hover:bg-[#f9fafb]"
                >
                  إلغاء
                </button>

                <button
                  onClick={handleSubmitOwner}
                  disabled={loading}
                  className="rounded-xl bg-[#18346F] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1F3C88] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {editingItem ? "حفظ التعديلات" : "إضافة"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}