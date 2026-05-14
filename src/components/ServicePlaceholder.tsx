import { useLang } from "@/i18n/LanguageContext";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function ServicePlaceholder({ titleKey }: { titleKey: string }) {
  const { t } = useLang();
  return (
    <section className="container-px mx-auto max-w-5xl py-20">
      <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{t("placeholder_title")}</div>
      <h1 className="text-4xl md:text-5xl font-serif text-foreground text-balance">{t(titleKey)}</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("placeholder_body")}</p>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary-dark transition-colors"
      >
        {t("placeholder_cta")} <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
