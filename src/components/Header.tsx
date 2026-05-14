import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { NAV } from "@/lib/nav-config";
import { LANGS } from "@/i18n/translations";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSub(null);
    setOpenDesktop(null);
  }, [location.pathname]);

  const enter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktop(key);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 120);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-9">
          <a href="tel:+85226260378" className="inline-flex items-center gap-1.5 hover:opacity-90">
            <Phone className="h-3.5 w-3.5" />
            <span>{t("phone")}</span>
          </a>
          <div className="flex items-center gap-3">
            <div className="flex items-center divide-x divide-white/25">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 transition-opacity ${lang === l.code ? "opacity-100 font-semibold" : "opacity-70 hover:opacity-100"}`}
                  aria-pressed={lang === l.code}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href="#"
              className="bg-accent text-accent-foreground px-3 py-1.5 text-xs font-medium tracking-wide hover:brightness-110 transition"
            >
              {t("callus")}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-background border-b transition-shadow ${scrolled ? "shadow-sm" : ""}`}
      >
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="h-9 w-9 bg-primary text-primary-foreground grid place-items-center font-serif text-lg">
              卓
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-primary tracking-wide">EXCELLENT HONOUR</div>
              <div className="text-[10px] text-muted-foreground tracking-[0.18em]">CORPORATE SERVICES</div>
            </div>
          </Link>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const hasChildren = !!item.children?.length;
              return (
                <li
                  key={item.labelKey}
                  className="relative"
                  onMouseEnter={() => hasChildren && enter(item.labelKey)}
                  onMouseLeave={() => hasChildren && leave()}
                >
                  {item.to && !hasChildren ? (
                    <Link
                      to={item.to}
                      className="px-3.5 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      activeProps={{ className: "px-3.5 py-2 text-sm font-medium text-primary" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {t(item.labelKey)}
                    </Link>
                  ) : (
                    <button
                      className="px-3.5 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      onClick={() => setOpenDesktop(openDesktop === item.labelKey ? null : item.labelKey)}
                      aria-expanded={openDesktop === item.labelKey}
                      aria-haspopup="true"
                    >
                      {t(item.labelKey)}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  )}
                  <AnimatePresence>
                    {hasChildren && openDesktop === item.labelKey && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 min-w-[240px]"
                      >
                        <div className="bg-background border shadow-lg overflow-hidden">
                          <div className="h-0.5 bg-primary" />
                          <ul className="py-2">
                            {item.children!.map((c) => (
                              <li key={c.to}>
                                <Link
                                  to={c.to}
                                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                                >
                                  {t(c.labelKey)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t bg-background"
            >
              <ul className="container-px mx-auto max-w-7xl py-2">
                {NAV.map((item) => {
                  const hasChildren = !!item.children?.length;
                  const isOpen = mobileSub === item.labelKey;
                  return (
                    <li key={item.labelKey} className="border-b last:border-b-0">
                      {item.to && !hasChildren ? (
                        <Link to={item.to} className="block py-3 text-sm font-medium">
                          {t(item.labelKey)}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => setMobileSub(isOpen ? null : item.labelKey)}
                            className="w-full flex items-center justify-between py-3 text-sm font-medium"
                          >
                            {t(item.labelKey)}
                            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-3 pb-2"
                              >
                                {item.children!.map((c) => (
                                  <li key={c.to}>
                                    <Link
                                      to={c.to}
                                      className="block py-2 text-sm text-muted-foreground hover:text-primary"
                                    >
                                      {t(c.labelKey)}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
