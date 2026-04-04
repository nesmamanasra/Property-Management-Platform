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

const storageKey = "aqari-dashboard-transactions";

function StatusBadge({ status }) {
  const styles = {
    مكتمل: "bg-[#EAFBF0] text-[#22C55E]",
    "قيد الانتظار": "bg-[#FFF7E8] text-[#F59E0B]",
    ملغي: "bg-[#FDECEC] text-[#EF4444]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function MainSection() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [editingItem, setEditingItem] = useState(null);

  const menuRef = useRef(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    customer: "",
    propertyName: "",
    propertyType: "فيلا",
    purchaseType: "بيع",
    city: "نابلس",
    price: "",
    status: "قيد الانتظار",
    description: "",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredTransactions = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();

    if (!value) return transactions;

    return transactions.filter((item) => {
      return (
        String(item.id).toLowerCase().includes(value) ||
        String(item.order).toLowerCase().includes(value) ||
        String(item.customer).toLowerCase().includes(value) ||
        String(item.property).toLowerCase().includes(value) ||
        String(item.propertyType).toLowerCase().includes(value) ||
        String(item.purchase).toLowerCase().includes(value) ||
        String(item.city).toLowerCase().includes(value) ||
        String(item.price).toLowerCase().includes(value) ||
        String(item.status).toLowerCase().includes(value) ||
        String(item.description).toLowerCase().includes(value)
      );
    });
  }, [transactions, searchTerm]);

  const resetForm = () => {
    setFormData({
      customer: "",
      propertyName: "",
      propertyType: "فيلا",
      purchaseType: "بيع",
      city: "نابلس",
      price: "",
      status: "قيد الانتظار",
      description: "",
      image: "",
    });
    setEditingItem(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: typeof reader.result === "string" ? reader.result : "",
      }));
    };
    reader.readAsDataURL(file);
  };

  const formatPrice = (price) => {
    const cleaned = String(price).replace(/[^0-9.]/g, "");
    if (!cleaned) return "—";

    const number = Number(cleaned);
    if (Number.isNaN(number)) return "—";

    return `$${number.toLocaleString()}`;
  };

  const handleSubmitProperty = () => {
    if (
      !formData.customer.trim() ||
      !formData.propertyName.trim() ||
      !formData.price.trim() ||
      !formData.description.trim()
    ) {
      return;
    }

    if (editingItem) {
      setTransactions((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                customer: formData.customer,
                property: formData.propertyName,
                propertyType: formData.propertyType,
                purchase: formData.purchaseType,
                city: formData.city,
                price: formatPrice(formData.price),
                status: formData.status,
                description: formData.description,
                image: formData.image,
              }
            : item
        )
      );
    } else {
      const nextId = String(Date.now());
      const nextOrder = `#${Math.floor(10000 + Math.random() * 90000)}`;

      const newProperty = {
        id: nextId,
        order: nextOrder,
        customer: formData.customer,
        property: formData.propertyName,
        propertyType: formData.propertyType,
        purchase: formData.purchaseType,
        city: formData.city,
        price: formatPrice(formData.price),
        status: formData.status,
        description: formData.description,
        image: formData.image,
      };

      setTransactions((prev) => [newProperty, ...prev]);
    }

    closeModal();
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
    setMenuOpenId(null);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      customer: item.customer || "",
      propertyName: item.property || "",
      propertyType: item.propertyType || "فيلا",
      purchaseType: item.purchase || "بيع",
      city: item.city || "نابلس",
      price: String(item.price || "").replace(/[^0-9.]/g, ""),
      status: item.status || "قيد الانتظار",
      description: item.description || "",
      image: item.image || "",
    });
    setShowAddModal(true);
    setMenuOpenId(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="bg-[#F7F8FA] p-6" dir="rtl">
      <div className="mx-auto max-w-[1400px]">
        <div className="rounded-2xl border border-[#ECEEF2] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
          <div className="flex flex-col gap-4 border-b border-[#EEF1F5] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-right text-lg font-semibold text-[#1F2937]">
              تقرير العمليات
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
                إضافة عقار
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[1900px] w-full">
              <thead>
                <tr className="border-b border-[#EEF1F5] bg-[#FCFCFD] text-right">
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الرقم
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    رقم الطلب
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    اسم العميل
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الصورة
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    اسم العقار
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    نوع العقار
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    نوع العملية
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    المدينة
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الوصف
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    السعر
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold tracking-wide text-[#9CA3AF]">
                    الحالة
                  </th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>

              <tbody>
                {filteredTransactions.map((item, index) => (
                  <tr
                    key={`${item.id}-${item.order}`}
                    className="group border-b border-[#F3F4F6] text-sm hover:bg-[#18346F]"
                  >
                    <td className="px-5 py-4 text-[#6B7280] group-hover:text-white">
                      {index + 1}
                    </td>

                    <td className="px-5 py-4 font-medium text-[#374151] group-hover:text-white">
                      {item.order}
                    </td>

                    <td className="px-5 py-4 text-[#374151] group-hover:text-white">
                      {item.customer}
                    </td>

                    <td className="px-5 py-4">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.property}
                          className="h-14 w-20 rounded-lg object-cover ring-1 ring-[#E5E7EB]"
                        />
                      ) : (
                        <div className="flex h-14 w-20 items-center justify-center rounded-lg border border-dashed border-[#D1D5DB] text-xs text-[#9CA3AF] group-hover:border-white/50 group-hover:text-white">
                          بدون صورة
                        </div>
                      )}
                    </td>

                    <td className="px-5 py-4 text-[#374151] group-hover:text-white">
                      {item.property}
                    </td>

                    <td className="px-5 py-4 text-[#374151] group-hover:text-white">
                      {item.propertyType}
                    </td>

                    <td className="px-5 py-4 text-[#374151] group-hover:text-white">
                      {item.purchase}
                    </td>

                    <td className="px-5 py-4 text-[#374151] group-hover:text-white">
                      {item.city}
                    </td>

                    <td className="max-w-[260px] px-5 py-4 text-[#374151] group-hover:text-white">
                      <p className="line-clamp-2 min-w-[220px] leading-6">
                        {item.description || "—"}
                      </p>
                    </td>

                    <td className="px-5 py-4 font-medium text-[#1F2937] group-hover:text-white">
                      {item.price}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={item.status} />
                    </td>

                    <td className="relative px-5 py-4 text-left">
                      <button
                        onClick={() =>
                          setMenuOpenId(menuOpenId === item.id ? null : item.id)
                        }
                        className="text-[#9CA3AF] group-hover:text-white"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {menuOpenId === item.id && (
                        <div
                          ref={menuRef}
                          className="absolute left-5 top-12 z-20 min-w-[150px] overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
                        >
                          <button
                            onClick={() => handleEdit(item)}
                            className="flex w-full items-center justify-end gap-2 px-4 py-3 text-sm text-[#374151] transition hover:bg-[#F9FAFB]"
                          >
                            تعديل
                            <Pencil size={15} />
                          </button>

                          <button
                            onClick={() => handleDelete(item.id)}
                            className="flex w-full items-center justify-end gap-2 px-4 py-3 text-sm text-[#DC2626] transition hover:bg-[#FEF2F2]"
                          >
                            حذف
                            <Trash2 size={15} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {filteredTransactions.length === 0 && (
                  <tr>
                    <td
                      colSpan={12}
                      className="px-5 py-10 text-center text-sm text-[#9CA3AF]"
                    >
                      لا توجد بيانات حاليًا، يمكنك إضافة عقار جديد
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
            <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#ECEEF2] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-between border-b border-[#EEF1F5] px-5 py-4">
                <button
                  onClick={closeModal}
                  className="rounded-lg p-2 text-[#6B7280] transition hover:bg-[#F3F4F6]"
                >
                  <X size={18} />
                </button>

                <h3 className="text-right text-lg font-semibold text-[#1F2937]">
                  {editingItem ? "تعديل العقار" : "إضافة عقار جديد"}
                </h3>
              </div>

              <div className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto px-5 py-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    اسم العميل
                  </label>
                  <input
                    type="text"
                    name="customer"
                    value={formData.customer}
                    onChange={handleInputChange}
                    placeholder="أدخل اسم العميل"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    اسم العقار
                  </label>
                  <input
                    type="text"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleInputChange}
                    placeholder="أدخل اسم العقار"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    نوع العقار
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  >
                    <option value="فيلا">فيلا</option>
                    <option value="بيت">استديو</option>
                    <option value="بيت">بيت</option>
                    <option value="محل">محل</option>
                    <option value="أرض">أرض</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    نوع العملية
                  </label>
                  <select
                    name="purchaseType"
                    value={formData.purchaseType}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  >
                    <option value="بيع">بيع</option>
                    <option value="إجار">إجار</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    مكان العقار
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  >
                    <option value="نابلس">نابلس</option>
                    <option value="رام الله">رام الله</option>
                   <option value="الخليل ">الخليل</option>
                   <option value=" القدس">القدس </option>
                   <option value="الناصرة ">الناصرة </option>
                   <option value=" اريحا"> اريحا</option>
                   <option value=" بيت لحم"> بيت لحم</option>
                   <option value=" جنين"> جنين</option>
                   <option value="طولكرم ">طولكرم </option>
                   <option value=" طوباس"> طوباس</option>

                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    السعر
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="مثال: 250000"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    الحالة
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  >
                    <option value="قيد الانتظار">قيد الانتظار</option>
                    <option value="مكتمل">مكتمل</option>
                    <option value="ملغي">ملغي</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    وصف العقار
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="اكتب وصفًا عن العقار"
                    className="w-full resize-none rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                    صورة العقار
                  </label>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] file:ml-3 file:rounded-lg file:border-0 file:bg-[#18346F] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#1F3C88]"
                  />

                  {formData.image && (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#E5E7EB]">
                      <img
                        src={formData.image}
                        alt="preview"
                        className="h-56 w-full object-cover"
                      />
                    </div>
                  )}
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
                  onClick={handleSubmitProperty}
                  className="rounded-xl bg-[#18346F] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1F3C88]"
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