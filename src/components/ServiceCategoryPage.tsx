import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { getCategory, getUI } from "@/data/serviceContent";
import { Breadcrumb } from "./Breadcrumb";

export function ServiceCategoryPage({ slug }: { slug: string }) {
  const { lang } = useLang();
  const c = getCategory(lang, slug)!;
  const ui = getUI(lang);
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl py-14 lg:py-20">
          <div className="text-primary-foreground/80">
            <Breadcrumb items={[
              { label: ui.breadcrumb_home, to: "/" },
              { label: ui.breadcrumb_services },
              { label: c.title },
            ]} />
          </div>
          <div className="text-xs uppercase tracking-[0.22em] mt-6 text-primary-foreground/70">{c.hero.eyebrow}</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-serif text-balance max-w-3xl">{c.hero.title}</h1>
          <p className="mt-5 text-lg text-primary-foreground/85 max-w-2xl">{c.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">{c.cta.btn}</Link>
            <a href="#sub-services" className="border border-primary-foreground/30 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition">{ui.explore_subservices}</a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container-px mx-auto max-w-5xl py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.overview}</div>
        <div className="space-y-4 text-foreground">
          {c.overview.map((p, i) => <p key={i} className="text-lg leading-relaxed">{p}</p>)}
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/40 border-y">
        <div className="container-px mx-auto max-w-7xl py-16">
          <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.features}</div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {c.features.map((f, i) => (
              <div key={i} className="bg-background border p-6">
                <div className="text-base font-semibold text-primary">{f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.process}</div>
        <ol className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {c.process.map((s, i) => (
            <li key={i} className="border-l-2 border-primary pl-4">
              <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-1 font-semibold text-foreground">{s.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Sub-services */}
      <section id="sub-services" className="bg-secondary/40 border-y">
        <div className="container-px mx-auto max-w-7xl py-16">
          <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.explore_subservices}</div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {c.subServices.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-background border p-6 hover:border-primary transition">
                <div className="font-semibold text-foreground group-hover:text-primary">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm text-primary">
                  {ui.talk_to_us} <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto max-w-4xl py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.faq}</div>
        <dl className="mt-6 divide-y border-y">
          {c.faqs.map((f, i) => (
            <div key={i} className="py-5">
              <dt className="font-semibold text-foreground">{f.q}</dt>
              <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-5xl py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-serif">{c.cta.title}</h2>
          <p className="mt-3 text-primary-foreground/85">{c.cta.sub}</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
            {c.cta.btn} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
