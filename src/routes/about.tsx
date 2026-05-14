import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <section className="container-px mx-auto max-w-5xl py-20">
      <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">— {t("nav_about")}</div>
      <h1 className="text-4xl md:text-5xl font-serif text-foreground text-balance">{t("nav_about")}</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("placeholder_body")}</p>
    </section>
  );
}
