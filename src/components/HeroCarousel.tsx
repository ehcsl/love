import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-hk.jpg";

const AUTOPLAY_MS = 7000;

type Slide = {
  titleKey: string;
  subKey: string;
  ctaKey: string;
  ctaTo: string;
  secondaryKey: string;
  secondaryTo: string;
};

const SLIDES: Slide[] = [
  {
    titleKey: "hero_s1_title",
    subKey: "hero_s1_sub",
    ctaKey: "hero_s1_cta",
    ctaTo: "/services/hk-incorporation",
    secondaryKey: "hero_s1_secondary",
    secondaryTo: "/about",
  },
  {
    titleKey: "hero_s2_title",
    subKey: "hero_s2_sub",
    ctaKey: "hero_s2_cta",
    ctaTo: "/services/named-secretary",
    secondaryKey: "hero_s2_secondary",
    secondaryTo: "/services/annual-return-nar1",
  },
  {
    titleKey: "hero_s3_title",
    subKey: "hero_s3_sub",
    ctaKey: "hero_s3_cta",
    ctaTo: "/services/bookkeeping",
    secondaryKey: "hero_s3_secondary",
    secondaryTo: "/services/registered-address",
  },
];

export function HeroCarousel() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);

  const go = useCallback((i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
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

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(SLIDES.length - 1); }
  };

  const slide = SLIDES[index];

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label={t("hero_carousel_label")}
      className="relative overflow-hidden focus:outline-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      onPointerDown={() => setPaused(true)}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/40" />
      </div>

      {/* Slides */}
      <div className="relative container-px mx-auto max-w-7xl py-24 md:py-36 min-h-[460px] md:min-h-[520px]">
        <div className="text-xs uppercase tracking-[0.28em] text-primary-foreground/80 mb-5">
          {t("hero_eyebrow")}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${SLIDES.length}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0.01 : 0.45, ease: "easeOut" }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
            className="max-w-2xl text-primary-foreground cursor-grab active:cursor-grabbing"
          >
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] text-balance">
              {t(slide.titleKey)}
            </h1>
            <p className="mt-6 text-base md:text-lg opacity-90 max-w-xl leading-relaxed">
              {t(slide.subKey)}
            </p>
            <div className="mt-9 flex flex-wrap gap-5 items-center">
              <Link
                to={slide.ctaTo}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:brightness-110 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                {t(slide.ctaKey)} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={slide.secondaryTo}
                className="text-sm font-medium text-white/90 underline-offset-4 hover:underline hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                {t(slide.secondaryKey)} →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute left-0 right-0 bottom-8 flex justify-center gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`${t("hero_goto")} ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="md:hidden absolute right-5 bottom-6 flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label={t("hero_prev")}
            className="h-10 w-10 grid place-items-center bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t("hero_next")}
            className="h-10 w-10 grid place-items-center bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop arrows - moved outside the max-width container */}
      <button
        type="button"
        onClick={prev}
        aria-label={t("hero_prev")}
        className="hidden md:grid absolute left-0 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label={t("hero_next")}
        className="hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}