import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useReducedMotion, AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Building2, FileSignature, Calculator, MapPin, ShieldCheck, Languages, BadgeCheck, UserCog } from "lucide-react";
import { u as useLang } from "./router-rsWX6JJe.js";
import { useState, useRef, useCallback, useEffect } from "react";
import "@tanstack/react-query";
const heroImg = "/assets/hero-hk-veq1SYTZ.jpg";
const AUTOPLAY_MS = 7e3;
const SLIDES = [
  {
    titleKey: "hero_s1_title",
    subKey: "hero_s1_sub",
    ctaKey: "hero_s1_cta",
    ctaTo: "/services/hk-incorporation",
    secondaryKey: "hero_s1_secondary",
    secondaryTo: "/about"
  },
  {
    titleKey: "hero_s2_title",
    subKey: "hero_s2_sub",
    ctaKey: "hero_s2_cta",
    ctaTo: "/services/named-secretary",
    secondaryKey: "hero_s2_secondary",
    secondaryTo: "/services/annual-return-nar1"
  },
  {
    titleKey: "hero_s3_title",
    subKey: "hero_s3_sub",
    ctaKey: "hero_s3_cta",
    ctaTo: "/services/bookkeeping",
    secondaryKey: "hero_s3_secondary",
    secondaryTo: "/services/registered-address"
  }
];
function HeroCarousel() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef(null);
  const go = useCallback((i) => {
    setIndex((i % SLIDES.length + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(() => go(index + 1), [index, go]);
  const prev = useCallback(() => go(index - 1), [index, go]);
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(SLIDES.length - 1);
    }
  };
  const slide = SLIDES[index];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: regionRef,
      "aria-roledescription": "carousel",
      "aria-label": t("hero_carousel_label"),
      className: "relative overflow-hidden focus:outline-none",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocus: () => setPaused(true),
      onBlur: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      },
      onPointerDown: () => setPaused(true),
      onKeyDown,
      tabIndex: 0,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("img", { src: heroImg, alt: "", width: 1920, height: 1280, className: "h-full w-full object-cover" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/40" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative container-px mx-auto max-w-7xl py-24 md:py-36 min-h-[460px] md:min-h-[520px]", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.28em] text-primary-foreground/80 mb-5", children: t("hero_eyebrow") }),
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `${index + 1} / ${SLIDES.length}`,
              initial: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
              animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
              exit: reduce ? { opacity: 0 } : { opacity: 0, y: -8 },
              transition: { duration: reduce ? 0.01 : 0.45, ease: "easeOut" },
              drag: reduce ? false : "x",
              dragConstraints: { left: 0, right: 0 },
              dragElastic: 0.2,
              onDragEnd: (_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              },
              className: "max-w-2xl text-primary-foreground cursor-grab active:cursor-grabbing",
              children: [
                /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-serif leading-[1.1] text-balance", children: t(slide.titleKey) }),
                /* @__PURE__ */ jsx("p", { className: "mt-6 text-base md:text-lg opacity-90 max-w-xl leading-relaxed", children: t(slide.subKey) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-5 items-center", children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: slide.ctaTo,
                      className: "inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:brightness-110 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                      children: [
                        t(slide.ctaKey),
                        " ",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: slide.secondaryTo,
                      className: "text-sm font-medium text-white/90 underline-offset-4 hover:underline hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm",
                      children: [
                        t(slide.secondaryKey),
                        " →"
                      ]
                    }
                  )
                ] })
              ]
            },
            index
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 bottom-8 flex justify-center gap-2.5", children: SLIDES.map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => go(i),
              "aria-label": `${t("hero_goto")} ${i + 1}`,
              "aria-current": i === index,
              className: `h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${i === index ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"}`
            },
            i
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "md:hidden absolute right-5 bottom-6 flex gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: prev,
                "aria-label": t("hero_prev"),
                className: "h-10 w-10 grid place-items-center bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm",
                children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: next,
                "aria-label": t("hero_next"),
                className: "h-10 w-10 grid place-items-center bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm",
                children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: prev,
            "aria-label": t("hero_prev"),
            className: "hidden md:grid absolute left-0 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: next,
            "aria-label": t("hero_next"),
            className: "hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
          }
        )
      ]
    }
  );
}
function Home() {
  const {
    t,
    lang
  } = useLang();
  const services = [{
    icon: Building2,
    key: "nav_incorporation",
    to: "/services/hk-incorporation",
    desc: {
      en: "HK & offshore company formation, trademark filing.",
      tc: "香港及離岸公司成立，商標註冊。",
      sc: "香港及离岸公司成立，商标注册。"
    }
  }, {
    icon: FileSignature,
    key: "nav_secretary",
    to: "/services/named-secretary",
    desc: {
      en: "Named secretary, NAR1, change of directors.",
      tc: "掛名秘書、周年申報、董事變更。",
      sc: "挂名秘书、周年申报、董事变更。"
    }
  }, {
    icon: Calculator,
    key: "nav_accounting",
    to: "/services/bookkeeping",
    desc: {
      en: "Bookkeeping, audit coordination, profits tax.",
      tc: "簿記、審計協調、利得稅。",
      sc: "簿记、审计协调、利得税。"
    }
  }, {
    icon: MapPin,
    key: "nav_virtual",
    to: "/services/registered-address",
    desc: {
      en: "Prestigious TST address, mail & call handling.",
      tc: "尖沙咀地標地址、郵件及電話處理。",
      sc: "尖沙咀地标地址、邮件及电话处理。"
    }
  }];
  const reasons = [{
    icon: ShieldCheck,
    t: "why_1_t",
    d: "why_1_d"
  }, {
    icon: Languages,
    t: "why_2_t",
    d: "why_2_d"
  }, {
    icon: BadgeCheck,
    t: "why_3_t",
    d: "why_3_d"
  }, {
    icon: UserCog,
    t: "why_4_t",
    d: "why_4_d"
  }];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroCarousel, {}),
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-7xl py-20 md:py-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs uppercase tracking-[0.22em] text-primary mb-3", children: [
          "— ",
          t("services_title")
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-serif text-foreground text-balance", children: t("services_title") }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: t("services_sub") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.4,
        delay: i * 0.06
      }, children: /* @__PURE__ */ jsxs(Link, { to: s.to, className: "group block h-full bg-card border hover:border-primary/40 hover:shadow-lg transition-all p-7", children: [
        /* @__PURE__ */ jsx("div", { className: "h-12 w-12 bg-primary/8 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: t(s.key) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc[lang] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary", children: /* @__PURE__ */ jsx("span", { children: "→" }) })
      ] }) }, s.key)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/60 border-y", children: /* @__PURE__ */ jsx("div", { className: "container-px mx-auto max-w-7xl py-20 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs uppercase tracking-[0.22em] text-primary mb-3", children: [
          "— ",
          t("why_title")
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-serif text-foreground text-balance", children: t("why_title") }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: t("why_sub") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-10", children: reasons.map((r) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-11 w-11 shrink-0 bg-primary text-primary-foreground grid place-items-center", children: /* @__PURE__ */ jsx(r.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1.5", children: t(r.t) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: t(r.d) })
        ] })
      ] }, r.t)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "container-px mx-auto max-w-7xl py-20 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-primary text-primary-foreground p-10 md:p-16", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid lg:grid-cols-[1fr_auto] gap-8 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-serif text-balance", children: t("cta_title") }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 opacity-85", children: t("cta_sub") })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:brightness-110 transition w-fit", children: [
          t("cta_btn"),
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
