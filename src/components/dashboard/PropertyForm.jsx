import React, { useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function PropertyForm({
  editingItem,
  setEditingItem,
  onSuccess,
}) {
  const fileInputRef = useRef(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [owners, setOwners] = useState([]);
  const [loadingOwners, setLoadingOwners] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [compressingImage, setCompressingImage] = useState(false);

  const [formData, setFormData] = useState({
    owner_id: "",
    propertyName: "",
    propertyType: "فيلا",
    purchaseType: "بيع",
    city: "نابلس",
    price: "",
    status: "قيد الانتظار",
    description: "",
    image: "",
  });

  const fetchOwners = async () => {
    try {
      setLoadingOwners(true);

      const { data, error } = await supabase
        .from("owners")
        .select("id, full_name")
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching owners:", error);
        return;
      }

      setOwners(data || []);
    } catch (error) {
      console.error("Unexpected owners fetch error:", error);
    } finally {
      setLoadingOwners(false);
    }
  };

  useEffect(() => {
    fetchOwners();
  }, []);

  const resetForm = () => {
    setFormData({
      owner_id: "",
      propertyName: "",
      propertyType: "فيلا",
      purchaseType: "بيع",
      city: "نابلس",
      price: "",
      status: "قيد الانتظار",
      description: "",
      image: "",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const closeModal = () => {
    setShowAddModal(false);
    setEditingItem(null);
    resetForm();
  };

  const openAddModal = () => {
    setEditingItem(null);
    resetForm();
    setShowAddModal(true);
  };

  useEffect(() => {
    if (!editingItem) return;

    setFormData({
      owner_id: editingItem.owner_id || "",
      propertyName: editingItem.title || "",
      propertyType: editingItem.property_type || "فيلا",
      purchaseType: editingItem.operation_type || "بيع",
      city: editingItem.city || "نابلس",
      price:
        editingItem.price !== null && editingItem.price !== undefined
          ? String(editingItem.price)
          : "",
      status: editingItem.status || "قيد الانتظار",
      description: editingItem.description || "",
      image: editingItem.image || "",
    });

    setShowAddModal(true);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [editingItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();

        img.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) {
              reject(new Error("Canvas context not available"));
              return;
            }

            const MAX_WIDTH = 1200;
            const MAX_HEIGHT = 1200;

            let { width, height } = img;

            const widthRatio = MAX_WIDTH / width;
            const heightRatio = MAX_HEIGHT / height;
            const ratio = Math.min(widthRatio, heightRatio, 1);

            width = Math.round(width * ratio);
            height = Math.round(height * ratio);

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height);

            const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
            resolve(compressedBase64);
          } catch (err) {
            reject(err);
          }
        };

        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = event.target?.result;
      };

      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setCompressingImage(true);

      const compressedImage = await compressImage(file);

      setFormData((prev) => ({
        ...prev,
        image: typeof compressedImage === "string" ? compressedImage : "",
      }));
    } catch (error) {
      console.error("Error compressing image:", error);
    } finally {
      setCompressingImage(false);
    }
  };

  const handleSubmitProperty = async () => {
    if (
      submitting ||
      compressingImage ||
      !formData.owner_id ||
      !formData.propertyName.trim() ||
      !formData.price.trim() ||
      !formData.description.trim()
    ) {
      return;
    }

    const payload = {
      owner_id: formData.owner_id,
      title: formData.propertyName.trim(),
      property_type: formData.propertyType,
      operation_type: formData.purchaseType,
      city: formData.city,
      description: formData.description.trim(),
      price: Number(formData.price),
      status: formData.status,
      image: formData.image,
    };

    try {
      setSubmitting(true);

      if (editingItem?.id) {
        const { data, error } = await supabase
          .from("properties")
          .update(payload)
          .eq("id", editingItem.id)
          .select()
          .single();

        if (error) {
          console.error("Error updating property:", error);
          return;
        }

        closeModal();

        if (onSuccess && data) {
          onSuccess(data, "update");
        }

        return;
      }

      const { data, error } = await supabase
        .from("properties")
        .insert([payload])
        .select()
        .single();

      if (error) {
        console.error("Error inserting property:", error);
        return;
      }

      closeModal();

      if (onSuccess && data) {
        onSuccess(data, "insert");
      }
    } catch (error) {
      console.error("Unexpected submit error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={openAddModal}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#18346F] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1F3C88]"
      >
        <Plus size={16} />
        إضافة عقار
      </button>

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
                  اسم المالك
                </label>
                <select
                  name="owner_id"
                  value={formData.owner_id}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-right text-sm text-[#374151] outline-none transition focus:border-[#18346F]"
                >
                  <option value="">
                    {loadingOwners ? "جاري تحميل المالكين..." : "اختر المالك"}
                  </option>
                  {owners.map((owner) => (
                    <option key={owner.id} value={owner.id}>
                      {owner.full_name}
                    </option>
                  ))}
                </select>
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
                  <option value="شقة">شقة</option>
                  <option value="بيت">بيت</option>
                  <option value="محل">محل</option>
                  <option value="أرض">أرض</option>
                  <option value="مصيف">مصيف</option>
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
                  <option value="إيجار">إيجار</option>
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
                  <option value="الخليل">الخليل</option>
                  <option value="جنين">جنين</option>
                  <option value="طولكرم">طولكرم</option>
                  <option value="القدس">القدس</option>
                  <option value="قلقيلية">قلقيلية</option>
                  <option value="طوباس">طوباس</option>
                  <option value="بيت لحم">بيت لحم</option>
                  <option value="سلفيت">سلفيت</option>
                  <option value="أريحا">أريحا</option>
                  <option value="غزة">غزة</option>
                  <option value="يافا">يافا</option>
                  <option value="حيفا">حيفا</option>
                  <option value="عكا">عكا</option>
                  <option value="الناصرة">الناصرة</option>
                  <option value="صفد">صفد</option>
                  <option value="الرملة">الرملة</option>
                  <option value="اللد">اللد</option>
                  <option value="بيسان">بيسان</option>
                  <option value="طبريا">طبريا</option>
                  <option value="ام الفحم">أم الفحم</option>
                  <option value="مناطق الداخل">مناطق الداخل</option>


                </select>
              </div>

              <div>
                <label className="mb-2 block text-right text-sm font-medium text-[#374151]">
                  السعر
                </label>
                <input
                  type="number"
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
                  <option value="متاح">متاح</option>
                  <option value="تم البيع">تم البيع</option>
                  <option value="تم التأجير">تم التأجير</option>
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

                {compressingImage && (
                  <p className="mt-2 text-right text-sm text-[#6B7280]">
                    جاري ضغط الصورة...
                  </p>
                )}

                {formData.image && (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-[#E5E7EB]">
                    <img
                      src={formData.image}
                      alt="preview"
                      loading="lazy"
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
                disabled={submitting || compressingImage}
                className="rounded-xl bg-[#18346F] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1F3C88] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {compressingImage
                  ? "جاري تجهيز الصورة..."
                  : submitting
                  ? "جاري الحفظ..."
                  : editingItem
                  ? "حفظ التعديلات"
                  : "إضافة"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}