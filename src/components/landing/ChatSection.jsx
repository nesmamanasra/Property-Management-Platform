import { useState } from "react";

const topics = [
  "استفسار عام",
  "دعم فني",
  "طلب خدمة",
  "شراكة",
  "شكوى",
  "أخرى",
];

export default function ChatSection() {
  const [selectedTopic, setSelectedTopic] = useState("استفسار عام");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | error | success

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }
    setStatus("success");
  };

  return (
    <section
      dir="rtl"
      className="w-full font-[Cairo,sans-serif]"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');`}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* Left Panel */}
        <div
          className="relative flex flex-col justify-end p-8 md:p-10 overflow-hidden order-2 lg:order-1"
          style={{
            background: "linear-gradient(135deg, #1F3C88 0%, #18346F 100%)",
          }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Glow blobs */}
          <div
            className="absolute -top-16 -right-20 w-72 h-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex items-center gap-2 w-fit mb-5 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 text-white/90 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            متاحون الآن للرد
          </div>

          <h2 className="relative text-3xl md:text-4xl font-bold text-white leading-snug mb-3">
            تواصل معنا
            <br />
            <span className="text-blue-200">سنراسلك قريباً</span>
          </h2>

          <p className="relative text-sm text-white/70 leading-relaxed max-w-xs mb-8">
            فريقنا جاهز للإجابة على جميع استفساراتك. أرسل رسالتك وسنتواصل معك في
            أقرب وقت ممكن.
          </p>

          <div className="relative flex flex-wrap gap-2">
            {[
              {
                label: "واتساب",
                icon: (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
              },
              {
                label: "بريد إلكتروني",
                icon: (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
              {
                label: "خلال 24 ساعة",
                icon: (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
              },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-white/70 border border-white/15 bg-white/10"
              >
                {chip.icon}
                {chip.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white flex flex-col justify-center p-8 md:p-10 order-1 lg:order-2">
          <div className="mb-7">
            <h3 className="text-xl font-bold mb-1 text-[#1F3C88]">
              أرسل استفسارك
            </h3>
            <p className="text-sm text-gray-400">
              سنراجع رسالتك ونرد عليك في أقرب وقت
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 tracking-wide">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="محمد أحمد"
                  className="bg-[#f7f8fc] border border-[#e0e4ef] rounded-lg px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-[#1F3C88] focus:bg-white transition-all placeholder:text-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 tracking-wide">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+970 5X XXX XXXX"
                  className="bg-[#f7f8fc] border border-[#e0e4ef] rounded-lg px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-[#1F3C88] focus:bg-white transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-500 tracking-wide">
                الموضوع
              </label>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3.5 py-1.5 rounded-full text-xs border transition-all cursor-pointer ${
                      selectedTopic === topic
                        ? "bg-[#eaf0ff] border-[#1F3C88] text-[#1F3C88] font-semibold"
                        : "bg-[#f7f8fc] border-[#e0e4ef] text-gray-500 hover:bg-[#eaf0ff] hover:border-[#1F3C88] hover:text-[#1F3C88]"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 tracking-wide">
                رسالتك <span className="font-normal text-gray-400">(اختياري)</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="اكتب تفاصيل إضافية هنا..."
                className="bg-[#f7f8fc] border border-[#e0e4ef] rounded-lg px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-[#1F3C88] focus:bg-white transition-all placeholder:text-gray-300 resize-none leading-relaxed"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "success"}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-white text-sm font-semibold transition-all duration-200 ${
                status === "success"
                  ? "bg-green-600 cursor-default"
                  : status === "error"
                  ? "bg-red-600"
                  : "hover:opacity-90 active:scale-[0.98]"
              }`}
              style={
                status === "idle"
                  ? {
                      background:
                        "linear-gradient(135deg, #1F3C88 0%, #18346F 100%)",
                    }
                  : {}
              }
            >
              {status === "success" ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  تم الإرسال بنجاح!
                </>
              ) : status === "error" ? (
                "يرجى ملء الاسم والرقم"
              ) : (
                <>
                  إرسال الرسالة
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}