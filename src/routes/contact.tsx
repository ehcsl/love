import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  return (
    <section className="container-px mx-auto max-w-6xl py-20">
      <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">— {t("nav_contact")}</div>
      <h1 className="text-4xl md:text-5xl font-serif text-foreground text-balance">{t("nav_contact")}</h1>
      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <ul className="space-y-5 text-sm">
          <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><span>{t("footer_address")}</span></li>
          <li className="flex gap-3"><Phone className="h-5 w-5 text-primary" /><a href="tel:+85239560000">+852 3956 0000</a></li>
          <li className="flex gap-3"><Mail className="h-5 w-5 text-primary" /><a href="mailto:info@excellenthonour.hk">info@excellenthonour.hk</a></li>
          <li className="flex gap-3"><Clock className="h-5 w-5 text-primary" /><span>{t("footer_hours")}</span></li>
        </ul>
        <div className="bg-secondary/60 border p-8">
          <p className="text-sm text-muted-foreground">{t("placeholder_body")}</p>
        </div>
      </div>
    </section>
  );
}
