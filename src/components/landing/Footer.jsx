import logo from "../../assets/aqari_top_white.png";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  ChevronDown,
  ArrowUpLeft,
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-b from-[#1F3C88] to-[#18346F] text-white"
      dir="rtl"
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-80px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-60px] h-80 w-80 rounded-full bg-[#5FA8FF]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16 md:py-16">
        {/* top */}
        <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="space-y-5">
            <img
              src={logo}
              alt="Aqari Logo"
              className="h-20 w-auto object-contain"
            />

            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                إدارة عقاراتك تبدأ من هنا
              </h2>

              <p className="max-w-2xl text-sm leading-7 text-white/85 md:text-base">
                منصة عقاري تساعدك على إدارة العقارات، متابعة المستأجرين،
                تنظيم العقود، ورصد الدفعات من مكان واحد وبخطوات أبسط.
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-6">
            <p className="text-sm font-semibold text-white/80">
              جاهز لتنظيم أعمالك العقارية؟
            </p>

            <h3 className="mt-2 text-xl font-bold md:text-2xl">
              ابدأ مع عقاري اليوم
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/75">
              اجمع كل عمليات الإدارة والمتابعة في لوحة واحدة واضحة وسهلة.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#18346F] transition hover:scale-[1.02]">
                ابدأ الآن
                <ArrowUpLeft size={16} />
              </button>

              <button className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                احجز عرضًا توضيحيًا
              </button>
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* about */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">عن المنصة</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#" className="transition hover:text-white">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  لماذا عقاري؟
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  قصص النجاح
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* quick links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">روابط سريعة</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#features" className="transition hover:text-white">
                  المميزات
                </a>
              </li>
              <li>
                <a href="#forwhom" className="transition hover:text-white">
                  لمن هذا النظام
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-white">
                  الأسعار
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  الدعم والتواصل
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* features */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">ما الذي نقدمه</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>إدارة العقارات والوحدات</li>
              <li>تنظيم بيانات المستأجرين</li>
              <li>متابعة العقود والمدفوعات</li>
              <li>لوحة تحكم وتقارير واضحة</li>
              <li>دعم مستمر وسهولة استخدام</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">تواصل معنا</h3>

            <ul className="space-y-4 text-sm text-white/85">
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:info@aqari.com"
                  className="transition hover:text-white"
                >
                  info@aqari.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Phone size={18} />
                </div>
                <a
                  href="tel:+970599999999"
                  className="transition hover:text-white"
                >
                  +970 599 999 999
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <MapPin size={18} />
                </div>
                <span>فلسطين</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/15"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/15"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/15"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/15"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col gap-5 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2025 عقاري. جميع الحقوق محفوظة.</p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="transition hover:text-white">
              الشروط والأحكام
            </a>
            <a href="#" className="transition hover:text-white">
              سياسة الخصوصية
            </a>
            <a href="#" className="transition hover:text-white">
              سياسة ملفات الارتباط
            </a>
          </div>

          <button className="inline-flex items-center gap-2 self-start rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15 md:self-auto">
            <Globe size={16} />
            العربية
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}