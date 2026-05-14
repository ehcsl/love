import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { getSubService, getCategory, getUI } from "@/data/serviceContent";
import { Breadcrumb } from "./Breadcrumb";

export function ServiceSubPage({ slug }: { slug: string }) {
  const { lang } = useLang();
  const s = getSubService(lang, slug)!;
  const parent = getCategory(lang, s.parent)!;
  const ui = getUI(lang);
  const related = parent.subServices.filter((x) => x.slug !== slug);

  const hasPlaceholder = s.notes.some((n) => /pricing|收費|收费/i.test(n.q));

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl py-14 lg:py-20">
          <div className="text-primary-foreground/80">
            <Breadcrumb items={[
              { label: ui.breadcrumb_home, to: "/" },
              { label: ui.breadcrumb_services },
              { label: parent.title, to: `/services/${parent.slug}` },
              { label: s.title },
            ]} />
          </div>
          <div className="text-xs uppercase tracking-[0.22em] mt-6 text-primary-foreground/70">{s.hero.eyebrow}</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-serif text-balance max-w-3xl">{s.hero.title}</h1>
          <p className="mt-5 text-lg text-primary-foreground/85 max-w-2xl">{s.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">{s.cta.btn}</Link>
          </div>
        </div>
      </section>

      {hasPlaceholder && (
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="container-px mx-auto max-w-7xl py-3 flex items-center gap-2 text-xs text-amber-900">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{ui.placeholder_badge}</span>
          </div>
        </div>
      )}

      {/* Overview */}
      <section className="container-px mx-auto max-w-5xl py-14">
        <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.overview}</div>
        <div className="space-y-4">
          {s.overview.map((p, i) => <p key={i} className="text-lg leading-relaxed text-foreground">{p}</p>)}
        </div>
      </section>

      {/* Included + Audience */}
      <section className="bg-secondary/40 border-y">
        <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.included}</div>
            <ul className="mt-4 space-y-3">
              {s.included.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span className="text-foreground">{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.audience}</div>
            <ul className="mt-4 space-y-3">
              {s.audience.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <ArrowRight className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span className="text-foreground">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-px mx-auto max-w-7xl py-14">
        <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.process}</div>
        <ol className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {s.process.map((step, i) => (
            <li key={i} className="border-l-2 border-primary pl-4">
              <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-1 font-semibold text-foreground">{step.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Notes / FAQ */}
      <section className="bg-secondary/40 border-y">
        <div className="container-px mx-auto max-w-4xl py-14">
          <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.faq}</div>
          <dl className="mt-6 divide-y border-y bg-background">
            {s.notes.map((n, i) => (
              <div key={i} className="p-5">
                <dt className="font-semibold text-foreground">{n.q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-px mx-auto max-w-7xl py-14">
          <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">{ui.related}</div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="group bg-background border p-6 hover:border-primary transition">
                <div className="font-semibold text-foreground group-hover:text-primary">{r.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-5xl py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-serif">{s.cta.title}</h2>
          <p className="mt-3 text-primary-foreground/85">{s.cta.sub}</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
            {s.cta.btn} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
