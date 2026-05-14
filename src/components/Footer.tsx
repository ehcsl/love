import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Clock, Printer, Facebook, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { NAV } from "@/lib/nav-config";

export function Footer() {
  const { t } = useLang();
  const serviceItems = NAV.filter((n) => n.children).flatMap((n) => n.children!);

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 bg-primary-foreground text-primary grid place-items-center font-serif text-lg">
              卓
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">EXCELLENT HONOUR</div>
              <div className="text-[10px] opacity-70 tracking-[0.18em]">CORPORATE SERVICES</div>
            </div>
          </div>
          <p className="text-sm/relaxed opacity-80">{t("footer_about_desc")}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] mb-4 opacity-80">{t("footer_services").toUpperCase()}</h4>
          <ul className="space-y-2 text-sm">
            {serviceItems.slice(0, 8).map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="opacity-80 hover:opacity-100 transition-opacity">
                  {t(s.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] mb-4 opacity-80">{t("footer_company").toUpperCase()}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="opacity-80 hover:opacity-100">{t("nav_about")}</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100">{t("nav_contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] mb-4 opacity-80">{t("footer_contact").toUpperCase()}</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{t("footer_address")}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+85226260378" className="hover:opacity-100">+852 2626 0378</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Printer className="h-4 w-4 shrink-0" />
              <span>Fax: +852 2626 0372</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 shrink-0" />
              <a href="https://wa.me/85298459451" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">WhatsApp: +852 9845 9451</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:info@ehcsl.com" className="hover:opacity-100">info@ehcsl.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Facebook className="h-4 w-4 shrink-0" />
              <a href="https://facebook.com/ehcsl" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">@ehcsl</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0" />
              <span>{t("footer_hours")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-px mx-auto max-w-7xl py-5 text-xs opacity-70 flex flex-wrap items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} {t("company")}. {t("footer_rights")}</div>
          <div>TCSP Licence | AML Compliant</div>
        </div>
      </div>
    </footer>
  );
}
