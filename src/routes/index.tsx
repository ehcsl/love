import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, FileSignature, Calculator, MapPin, ShieldCheck, Languages, BadgeCheck, UserCog } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { HeroCarousel } from "@/components/HeroCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Excellent Honour Corporate Services Limited | Hong Kong" },
      { name: "description", content: "Hong Kong company incorporation, secretarial, accounting, tax and virtual office services." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useLang();

  const services = [
    { icon: Building2, key: "nav_incorporation", to: "/services/hk-incorporation", desc: { en: "HK & offshore company formation, trademark filing.", tc: "香港及離岸公司成立，商標註冊。", sc: "香港及离岸公司成立，商标注册。" } },
    { icon: FileSignature, key: "nav_secretary", to: "/services/named-secretary", desc: { en: "Named secretary, NAR1, change of directors.", tc: "掛名秘書、周年申報、董事變更。", sc: "挂名秘书、周年申报、董事变更。" } },
    { icon: Calculator, key: "nav_accounting", to: "/services/bookkeeping", desc: { en: "Bookkeeping, audit coordination, profits tax.", tc: "簿記、審計協調、利得稅。", sc: "簿记、审计协调、利得税。" } },
    { icon: MapPin, key: "nav_virtual", to: "/services/registered-address", desc: { en: "Prestigious TST address, mail & call handling.", tc: "尖沙咀地標地址、郵件及電話處理。", sc: "尖沙咀地标地址、邮件及电话处理。" } },
  ];

  const reasons = [
    { icon: ShieldCheck, t: "why_1_t", d: "why_1_d" },
    { icon: Languages, t: "why_2_t", d: "why_2_d" },
    { icon: BadgeCheck, t: "why_3_t", d: "why_3_d" },
    { icon: UserCog, t: "why_4_t", d: "why_4_d" },
  ];

  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Services */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">— {t("services_title")}</div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
            {t("services_title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("services_sub")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={s.to}
                className="group block h-full bg-card border hover:border-primary/40 hover:shadow-lg transition-all p-7"
              >
                <div className="h-12 w-12 bg-primary/8 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(s.key)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc[lang]}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  <span>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3">— {t("why_title")}</div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">{t("why_title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("why_sub")}</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {reasons.map((r) => (
                <div key={r.t} className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 bg-primary text-primary-foreground grid place-items-center">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5">{t(r.t)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(r.d)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-24">
        <div className="relative overflow-hidden bg-primary text-primary-foreground p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif text-balance">{t("cta_title")}</h2>
              <p className="mt-4 opacity-85">{t("cta_sub")}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:brightness-110 transition w-fit"
            >
              {t("cta_btn")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
