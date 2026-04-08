import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Home,
  Tag,
  CircleDollarSign,
  MessageCircle,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function ShowProperty() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("properties")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) {
      setProperty(data);
    }

    setLoading(false);
  };

  const handleWhatsApp = () => {
    const phone = "970599999999";
    const message = `مرحباً 👋
أرغب بالاستفسار عن العقار التالي:

📌 ${property?.title || ""}
🏠 ${property?.property_type || ""}
📍 ${property?.city || ""}
💰 ${property?.price || ""}

أرجو تزويدي بمزيد من التفاصيل.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F7FA]">
        <div className="flex h-[70vh] items-center justify-center">
          <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-md">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#1F3C88]/20 border-t-[#1F3C88]" />
            <p className="text-[15px] font-medium text-gray-600">
              جاري تحميل تفاصيل العقار...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-[#F5F7FA]">
        <div className="flex h-[70vh] items-center justify-center px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-[#1F3C88]">
              لم يتم العثور على العقار
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              يبدو أن العقار غير موجود أو تم حذفه من قاعدة البيانات.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#18346F]/80 to-[#F5F7FA]" />

        <div className="relative mx-auto max-w-[1400px] px-4 pb-10 pt-6 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.55fr_.8fr]">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(15,23,42,0.30)]">
              <img
                src={property.image}
                alt={property.title}
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute right-5 top-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                  {property.operation_type}
                </span>
                <span className="rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                  {property.property_type}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="max-w-[800px]">
                  <p className="mb-2 text-[12px] font-medium tracking-[0.2em] text-white/75 uppercase">
                    Aqari Store
                  </p>

                  <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl">
                    {property.title}
                  </h1>

                  <div className="mt-3 flex items-center gap-2 text-sm text-white/85">
                    <MapPin size={17} />
                    <span>{property.city}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price / Summary Card */}
            <div className="flex flex-col gap-5">
              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ring-1 ring-gray-100 sm:p-7">
                <p className="text-sm font-medium text-gray-400">السعر المطلوب</p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F3C88]/10 text-[#1F3C88]">
                    <CircleDollarSign size={28} />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-[#1F3C88]">
                      ${property.price}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      قيمة العقار المعروضة حالياً
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div className="rounded-2xl bg-[#F8FAFC] px-4 py-3">
                    <p className="text-xs text-gray-400">نوع العقار</p>
                    <p className="mt-1 font-semibold text-gray-800">
                      {property.property_type}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] px-4 py-3">
                    <p className="text-xs text-gray-400">نوع العملية</p>
                    <p className="mt-1 font-semibold text-gray-800">
                      {property.operation_type}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] px-4 py-3">
                    <p className="text-xs text-gray-400">المدينة</p>
                    <p className="mt-1 font-semibold text-gray-800">
                      {property.city}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-[#1F3C88] via-[#18346F] to-[#10295A] p-6 text-white shadow-[0_18px_50px_rgba(31,60,136,0.28)] sm:p-7">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">معلومة مهمة</h3>
                    <p className="mt-2 text-sm leading-7 text-white/85">
                      إذا كنت تريد معرفة المزيد حول هذا العقار أو ترتيب تواصل
                      مباشر، يمكنك التحدث مع فريقنا بكل سهولة عبر واتساب.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-[1px] hover:scale-[1.01]"
                >
                  <MessageCircle size={18} />
                  تواصل عبر واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="mx-auto max-w-[1400px] px-4 pb-14 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.55fr_.8fr]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ring-1 ring-gray-100 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F3C88]/10 text-[#1F3C88]">
                  <Home size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1F3C88]">
                    المعلومات الأساسية
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    عرض مختصر ومنظم لكامل البيانات الأساسية للعقار
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5 transition hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F3C88]/10 text-[#1F3C88]">
                      <Tag size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">نوع العملية</p>
                      <p className="mt-1 font-semibold text-gray-800">
                        {property.operation_type}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5 transition hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F3C88]/10 text-[#1F3C88]">
                      <Home size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">نوع العقار</p>
                      <p className="mt-1 font-semibold text-gray-800">
                        {property.property_type}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5 transition hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F3C88]/10 text-[#1F3C88]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">الموقع</p>
                      <p className="mt-1 font-semibold text-gray-800">
                        {property.city}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5 transition hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F3C88]/10 text-[#1F3C88]">
                      <CircleDollarSign size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">السعر</p>
                      <p className="mt-1 font-semibold text-gray-800">
                        ${property.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ring-1 ring-gray-100 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-10 w-1 rounded-full bg-gradient-to-b from-[#1F3C88] to-[#18346F]" />
                <div>
                  <h2 className="text-xl font-bold text-[#1F3C88]">
                    وصف العقار
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    كافة التفاصيل والمعلومات الوصفية الخاصة بالعقار
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FAFBFC] p-5 sm:p-6">
                <p className="text-[15px] leading-8 text-gray-600">
                  {property.description || "لا يوجد وصف متوفر لهذا العقار حالياً."}
                </p>
              </div>
            </div>
          </div>

          {/* Sticky CTA */}
          <div className="lg:pt-0">
            <div className="sticky top-6 rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ring-1 ring-gray-100 sm:p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1F3C88]/10 px-4 py-2 text-xs font-semibold text-[#1F3C88]">
                <PhoneCall size={14} />
                فريق عقاري جاهز لخدمتك
              </div>

              <h3 className="text-2xl font-bold leading-snug text-[#1F3C88]">
                هل أعجبك هذا العقار؟
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                إذا كنت ترغب في معرفة المزيد يمكنك التواصل مع فريقنا، وسنقوم
                بالرد عليك بسرعة وتزويدك بكامل التفاصيل اللازمة.
              </p>

              <button
                onClick={handleWhatsApp}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-[1px] hover:scale-[1.01]"
              >
                <MessageCircle size={18} />
                تواصل الآن عبر واتساب
              </button>

              <div className="mt-6 rounded-2xl border border-[#1F3C88]/10 bg-[#F8FAFF] p-4">
                <p className="text-[13px] leading-6 text-gray-600">
                  ملاحظة: قد تختلف بعض التفاصيل البسيطة حسب آخر تحديث للعقار،
                  لذلك يفضل التواصل المباشر للحصول على أحدث المعلومات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}