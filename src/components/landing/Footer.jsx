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
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-[#0F2D62] to-[#0859C4] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 border-b border-white/20">
          <div className="flex items-center gap-3">
          <img
  src={logo}
  alt="Logo"
  className="h-20 w-auto object-contain"
/>
          </div>

          <p className="text-sm md:text-base text-white/90">
            Transformação digital que realmente funciona.
          </p>
        </div>

        {/* Middle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-10 border-b border-white/20">
          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Empresa</h3>
            <ul className="space-y-3 text-white/85">
              <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition">Serviços</a></li>
              <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition">Testemunhos</a></li>
              <li><a href="#" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Navegação</h3>
            <ul className="space-y-3 text-white/85">
              <li><a href="#" className="hover:text-white transition">Benefícios principais</a></li>
              <li><a href="#" className="hover:text-white transition">Os nossos serviços</a></li>
              <li><a href="#" className="hover:text-white transition">Porque salesforce</a></li>
              <li><a href="#" className="hover:text-white transition">Testemunhos</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contacto</h3>

            <ul className="space-y-4 text-white/85">
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:info@azimute.pt"
                  className="hover:text-white transition"
                >
                  info@azimute.pt
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Phone size={18} />
                </div>
                <a
                  href="tel:+351123456789"
                  className="hover:text-white transition"
                >
                  +351 123 456 789
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <MapPin size={18} />
                </div>
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>

          {/* Empty space */}
          <div className="hidden lg:block"></div>

          {/* Right side */}
          <div className="flex flex-col lg:items-end gap-6">
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition">
              <Globe size={16} />
              Português
              <ChevronDown size={16} />
            </button>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/75">
          <p>© 2025 Azimute. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="hover:text-white transition">
              Termos e Condições
            </a>
            <a href="#" className="hover:text-white transition">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}