import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useLocation, Link, Outlet, createRootRouteWithContext, useRouter, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, ChevronDown, X, Menu, MapPin, Printer, MessageCircle, Mail, Facebook, Clock } from "lucide-react";
const LANGS = [
  { code: "en", label: "ENG" },
  { code: "tc", label: "繁" },
  { code: "sc", label: "简" }
];
const translations = {
  en: {
    company: "Excellent Honour Corporate Services Limited",
    companyShort: "Excellent Honour",
    phone: "Tel: +852 2626 0378",
    callus: "Call Us",
    nav_home: "Home",
    nav_about: "About Us",
    nav_incorporation: "Incorporation",
    nav_secretary: "Company Secretary",
    nav_accounting: "Accounting & Tax",
    nav_virtual: "Virtual Office",
    nav_contact: "Contact Us",
    sub_hk: "HK Company",
    sub_offshore: "Offshore Company",
    sub_trademark: "Trademark",
    sub_named: "Named Secretary",
    sub_nar1: "Annual Return NAR1",
    sub_change_dir: "Change of Directors",
    sub_bookkeeping: "Bookkeeping",
    sub_audit: "Audit Coordination",
    sub_ptr: "Profits Tax Return",
    sub_addr: "Registered Address",
    sub_mail: "Mail Forwarding",
    sub_call: "Call Answering",
    hero_eyebrow: "Hong Kong Corporate Services",
    hero_title: "Trusted partner for company formation, compliance and growth",
    hero_sub: "Over a decade of experience guiding Hong Kong and international businesses through incorporation, secretarial, accounting and tax compliance.",
    hero_cta_primary: "Free Consultation",
    hero_cta_secondary: "Our Services",
    hero_carousel_label: "Featured corporate services",
    hero_prev: "Previous slide",
    hero_next: "Next slide",
    hero_goto: "Go to slide",
    hero_s1_title: "Start Your Hong Kong Company with Confidence",
    hero_s1_sub: "Incorporation, compliance support, and practical guidance for local and overseas clients.",
    hero_s1_cta: "Explore Incorporation Services",
    hero_s1_secondary: "About Us",
    hero_s2_title: "Stay Compliant with Reliable Corporate Support",
    hero_s2_sub: "Named company secretary, annual return filing, and company change support in one place.",
    hero_s2_cta: "View Secretary Services",
    hero_s2_secondary: "Annual Return NAR1",
    hero_s3_title: "Simplify Ongoing Business Operations",
    hero_s3_sub: "Bookkeeping, audit coordination, profits tax support, registered address, and mail handling.",
    hero_s3_cta: "View Business Support Services",
    hero_s3_secondary: "Registered Address",
    services_title: "Our Core Services",
    services_sub: "End-to-end professional support for every stage of your business in Hong Kong.",
    why_title: "Why Excellent Honour",
    why_sub: "A corporate services partner built on accuracy, discretion and accountability.",
    why_1_t: "Licensed & Regulated",
    why_1_d: "TCSP licensed under the Companies Registry of Hong Kong, fully AML compliant.",
    why_2_t: "Bilingual Specialists",
    why_2_d: "Cantonese, Mandarin and English speaking professionals with cross-border expertise.",
    why_3_t: "Transparent Pricing",
    why_3_d: "Fixed-fee packages with no hidden charges. Clear deliverables from day one.",
    why_4_t: "Dedicated Account Manager",
    why_4_d: "A single point of contact who understands your business and timelines.",
    cta_title: "Ready to incorporate or restructure?",
    cta_sub: "Speak with a senior consultant today. No obligation, complete confidentiality.",
    cta_btn: "Schedule a Meeting",
    footer_about: "About",
    footer_about_desc: "Hong Kong-based corporate services firm providing incorporation, secretarial, accounting and tax compliance to companies worldwide.",
    footer_services: "Services",
    footer_company: "Company",
    footer_contact: "Contact",
    footer_address_label: "Office",
    footer_address: "Suite 2208, 22/F, Silvercord Tower 2, 30 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong",
    footer_hours: "Mon – Fri  09:30 – 18:30",
    footer_rights: "All rights reserved.",
    placeholder_title: "Service Detail",
    placeholder_body: "Detailed content for this service is being prepared. Please contact us for a tailored proposal.",
    placeholder_cta: "Request Information"
  },
  tc: {
    company: "卓譽商業服務有限公司",
    companyShort: "卓譽",
    phone: "電話：+852 2626 0378",
    callus: "致電我們",
    nav_home: "首頁",
    nav_about: "關於我們",
    nav_incorporation: "公司成立",
    nav_secretary: "公司秘書",
    nav_accounting: "會計及稅務",
    nav_virtual: "虛擬辦公室",
    nav_contact: "聯絡我們",
    sub_hk: "香港公司",
    sub_offshore: "離岸公司",
    sub_trademark: "商標註冊",
    sub_named: "掛名秘書",
    sub_nar1: "周年申報表 NAR1",
    sub_change_dir: "更改董事",
    sub_bookkeeping: "簿記服務",
    sub_audit: "審計協調",
    sub_ptr: "利得稅報稅表",
    sub_addr: "註冊地址",
    sub_mail: "郵件轉寄",
    sub_call: "電話接聽",
    hero_eyebrow: "香港專業商業服務",
    hero_title: "您信賴的公司成立、合規及增長夥伴",
    hero_sub: "逾十年經驗，協助本地及海外企業處理公司註冊、秘書、會計及稅務合規事務。",
    hero_cta_primary: "免費諮詢",
    hero_cta_secondary: "服務範圍",
    hero_carousel_label: "精選企業服務",
    hero_prev: "上一張",
    hero_next: "下一張",
    hero_goto: "前往第",
    hero_s1_title: "信心十足，開設您的香港公司",
    hero_s1_sub: "為本地及海外客戶提供公司成立、合規支援及實務指導。",
    hero_s1_cta: "了解公司成立服務",
    hero_s1_secondary: "關於我們",
    hero_s2_title: "可靠企業支援，確保合規無憂",
    hero_s2_sub: "掛名公司秘書、周年申報及公司變更，一站完成。",
    hero_s2_cta: "查看秘書服務",
    hero_s2_secondary: "周年申報表 NAR1",
    hero_s3_title: "簡化日常營運事務",
    hero_s3_sub: "簿記、審計協調、利得稅、註冊地址及郵件處理。",
    hero_s3_cta: "查看商業支援服務",
    hero_s3_secondary: "註冊地址",
    services_title: "核心服務",
    services_sub: "為您的香港業務提供全方位專業支援。",
    why_title: "為何選擇卓譽",
    why_sub: "建基於精準、審慎與責任的企業服務夥伴。",
    why_1_t: "持牌受規管",
    why_1_d: "持有香港公司註冊處 TCSP 牌照，全面遵守反洗黑錢規定。",
    why_2_t: "雙語專才",
    why_2_d: "粵語、普通話及英語專業團隊，具備跨境業務經驗。",
    why_3_t: "透明收費",
    why_3_d: "固定收費套餐，絕無隱藏費用，交付清晰。",
    why_4_t: "專屬客戶經理",
    why_4_d: "單一聯絡點，深入了解您的業務及時間需要。",
    cta_title: "準備成立或重組公司？",
    cta_sub: "立即與資深顧問對話。無任何承諾，絕對保密。",
    cta_btn: "預約會面",
    footer_about: "關於",
    footer_about_desc: "立足香港的企業服務公司，為全球客戶提供公司成立、秘書、會計及稅務合規服務。",
    footer_services: "服務",
    footer_company: "公司",
    footer_contact: "聯絡",
    footer_address_label: "辦事處",
    footer_address: "香港九龍尖沙咀廣東道30號新港中心二座22樓2208室",
    footer_hours: "星期一至五  09:30 – 18:30",
    footer_rights: "版權所有。",
    placeholder_title: "服務詳情",
    placeholder_body: "此服務的詳細內容正在準備中，歡迎聯絡我們索取度身建議書。",
    placeholder_cta: "索取資料"
  },
  sc: {
    company: "卓誉商业服务有限公司",
    companyShort: "卓誉",
    phone: "电话：+852 2626 0378",
    callus: "致电我们",
    nav_home: "首页",
    nav_about: "关于我们",
    nav_incorporation: "公司成立",
    nav_secretary: "公司秘书",
    nav_accounting: "会计及税务",
    nav_virtual: "虚拟办公室",
    nav_contact: "联络我们",
    sub_hk: "香港公司",
    sub_offshore: "离岸公司",
    sub_trademark: "商标注册",
    sub_named: "挂名秘书",
    sub_nar1: "周年申报表 NAR1",
    sub_change_dir: "变更董事",
    sub_bookkeeping: "簿记服务",
    sub_audit: "审计协调",
    sub_ptr: "利得税报税表",
    sub_addr: "注册地址",
    sub_mail: "邮件转寄",
    sub_call: "电话接听",
    hero_eyebrow: "香港专业商业服务",
    hero_title: "值得信赖的公司成立、合规与增长伙伴",
    hero_sub: "逾十年经验，协助本地及海外企业处理公司注册、秘书、会计及税务合规事务。",
    hero_cta_primary: "免费咨询",
    hero_cta_secondary: "服务范围",
    hero_carousel_label: "精选企业服务",
    hero_prev: "上一张",
    hero_next: "下一张",
    hero_goto: "前往第",
    hero_s1_title: "信心十足，开设您的香港公司",
    hero_s1_sub: "为本地及海外客户提供公司成立、合规支持及实务指导。",
    hero_s1_cta: "了解公司成立服务",
    hero_s1_secondary: "关于我们",
    hero_s2_title: "可靠企业支持，确保合规无忧",
    hero_s2_sub: "挂名公司秘书、周年申报及公司变更，一站完成。",
    hero_s2_cta: "查看秘书服务",
    hero_s2_secondary: "周年申报表 NAR1",
    hero_s3_title: "简化日常营运事务",
    hero_s3_sub: "簿记、审计协调、利得税、注册地址及邮件处理。",
    hero_s3_cta: "查看商业支持服务",
    hero_s3_secondary: "注册地址",
    services_title: "核心服务",
    services_sub: "为您的香港业务提供全方位专业支持。",
    why_title: "为何选择卓誉",
    why_sub: "建基于精准、审慎与责任的企业服务伙伴。",
    why_1_t: "持牌受监管",
    why_1_d: "持有香港公司注册处 TCSP 牌照，全面遵守反洗钱规定。",
    why_2_t: "双语专才",
    why_2_d: "粤语、普通话及英语专业团队，具备跨境业务经验。",
    why_3_t: "透明收费",
    why_3_d: "固定收费套餐，绝无隐藏费用，交付清晰。",
    why_4_t: "专属客户经理",
    why_4_d: "单一联络点，深入了解您的业务及时间需要。",
    cta_title: "准备成立或重组公司？",
    cta_sub: "立即与资深顾问对话。无任何承诺，绝对保密。",
    cta_btn: "预约会面",
    footer_about: "关于",
    footer_about_desc: "立足香港的企业服务公司，为全球客户提供公司成立、秘书、会计及税务合规服务。",
    footer_services: "服务",
    footer_company: "公司",
    footer_contact: "联络",
    footer_address_label: "办事处",
    footer_address: "香港九龙尖沙咀广东道30号新港中心二座22楼2208室",
    footer_hours: "星期一至五  09:30 – 18:30",
    footer_rights: "版权所有。",
    placeholder_title: "服务详情",
    placeholder_body: "此服务的详细内容正在准备中，欢迎联络我们索取度身建议书。",
    placeholder_cta: "索取资料"
  }
};
const LanguageContext = createContext(null);
function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("lang");
    if (saved && ["en", "tc", "sc"].includes(saved)) setLangState(saved);
  }, []);
  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (key) => translations[lang][key] ?? key;
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { lang, setLang, t }, children });
}
function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
const NAV = [
  { labelKey: "nav_home", to: "/" },
  { labelKey: "nav_about", to: "/about" },
  {
    labelKey: "nav_incorporation",
    children: [
      { labelKey: "sub_hk", to: "/services/hk-incorporation" },
      { labelKey: "sub_offshore", to: "/services/offshore-company" },
      { labelKey: "sub_trademark", to: "/services/trademark" }
    ]
  },
  {
    labelKey: "nav_secretary",
    children: [
      { labelKey: "sub_named", to: "/services/named-secretary" },
      { labelKey: "sub_nar1", to: "/services/annual-return-nar1" },
      { labelKey: "sub_change_dir", to: "/services/change-of-directors" }
    ]
  },
  {
    labelKey: "nav_accounting",
    children: [
      { labelKey: "sub_bookkeeping", to: "/services/bookkeeping" },
      { labelKey: "sub_audit", to: "/services/audit-coordination" },
      { labelKey: "sub_ptr", to: "/services/profits-tax-return" }
    ]
  },
  {
    labelKey: "nav_virtual",
    children: [
      { labelKey: "sub_addr", to: "/services/registered-address" },
      { labelKey: "sub_mail", to: "/services/mail-forwarding" },
      { labelKey: "sub_call", to: "/services/call-answering" }
    ]
  },
  { labelKey: "nav_contact", to: "/contact" }
];
function Header() {
  const { t, lang, setLang } = useLang();
  const [openDesktop, setOpenDesktop] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
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
  const enter = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktop(key);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 120);
  };
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-primary text-primary-foreground text-xs", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl flex items-center justify-between h-9", children: [
      /* @__PURE__ */ jsxs("a", { href: "tel:+85226260378", className: "inline-flex items-center gap-1.5 hover:opacity-90", children: [
        /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsx("span", { children: t("phone") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center divide-x divide-white/25", children: LANGS.map((l) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setLang(l.code),
            className: `px-2.5 transition-opacity ${lang === l.code ? "opacity-100 font-semibold" : "opacity-70 hover:opacity-100"}`,
            "aria-pressed": lang === l.code,
            children: l.label
          },
          l.code
        )) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "bg-accent text-accent-foreground px-3 py-1.5 text-xs font-medium tracking-wide hover:brightness-110 transition",
            children: t("callus")
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `bg-background border-b transition-shadow ${scrolled ? "shadow-sm" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl flex items-center justify-between h-16 lg:h-20", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 shrink-0", children: [
              /* @__PURE__ */ jsx("div", { className: "h-9 w-9 bg-primary text-primary-foreground grid place-items-center font-serif text-lg", children: "卓" }),
              /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-primary tracking-wide", children: "EXCELLENT HONOUR" }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted-foreground tracking-[0.18em]", children: "CORPORATE SERVICES" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-1", children: NAV.map((item) => {
              const hasChildren = !!item.children?.length;
              return /* @__PURE__ */ jsxs(
                "li",
                {
                  className: "relative",
                  onMouseEnter: () => hasChildren && enter(item.labelKey),
                  onMouseLeave: () => hasChildren && leave(),
                  children: [
                    item.to && !hasChildren ? /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: item.to,
                        className: "px-3.5 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",
                        activeProps: { className: "px-3.5 py-2 text-sm font-medium text-primary" },
                        activeOptions: { exact: item.to === "/" },
                        children: t(item.labelKey)
                      }
                    ) : /* @__PURE__ */ jsxs(
                      "button",
                      {
                        className: "px-3.5 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1",
                        onClick: () => setOpenDesktop(openDesktop === item.labelKey ? null : item.labelKey),
                        "aria-expanded": openDesktop === item.labelKey,
                        "aria-haspopup": "true",
                        children: [
                          t(item.labelKey),
                          /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(AnimatePresence, { children: hasChildren && openDesktop === item.labelKey && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 6 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 6 },
                        transition: { duration: 0.18, ease: "easeOut" },
                        className: "absolute left-0 top-full pt-2 min-w-[240px]",
                        children: /* @__PURE__ */ jsxs("div", { className: "bg-background border shadow-lg overflow-hidden", children: [
                          /* @__PURE__ */ jsx("div", { className: "h-0.5 bg-primary" }),
                          /* @__PURE__ */ jsx("ul", { className: "py-2", children: item.children.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                            Link,
                            {
                              to: c.to,
                              className: "block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors",
                              children: t(c.labelKey)
                            }
                          ) }, c.to)) })
                        ] })
                      }
                    ) })
                  ]
                },
                item.labelKey
              );
            }) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "lg:hidden p-2 -mr-2",
                onClick: () => setMobileOpen((v) => !v),
                "aria-label": "Menu",
                children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.2 },
              className: "lg:hidden overflow-hidden border-t bg-background",
              children: /* @__PURE__ */ jsx("ul", { className: "container-px mx-auto max-w-7xl py-2", children: NAV.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpen = mobileSub === item.labelKey;
                return /* @__PURE__ */ jsx("li", { className: "border-b last:border-b-0", children: item.to && !hasChildren ? /* @__PURE__ */ jsx(Link, { to: item.to, className: "block py-3 text-sm font-medium", children: t(item.labelKey) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setMobileSub(isOpen ? null : item.labelKey),
                      className: "w-full flex items-center justify-between py-3 text-sm font-medium",
                      children: [
                        t(item.labelKey),
                        /* @__PURE__ */ jsx(ChevronDown, { className: `h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}` })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
                    motion.ul,
                    {
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      className: "overflow-hidden pl-3 pb-2",
                      children: item.children.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: c.to,
                          className: "block py-2 text-sm text-muted-foreground hover:text-primary",
                          children: t(c.labelKey)
                        }
                      ) }, c.to))
                    }
                  ) })
                ] }) }, item.labelKey);
              }) })
            }
          ) })
        ]
      }
    )
  ] });
}
function Footer() {
  const { t } = useLang();
  const serviceItems = NAV.filter((n) => n.children).flatMap((n) => n.children);
  return /* @__PURE__ */ jsxs("footer", { className: "bg-primary text-primary-foreground mt-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-9 w-9 bg-primary-foreground text-primary grid place-items-center font-serif text-lg", children: "卓" }),
          /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold tracking-wide", children: "EXCELLENT HONOUR" }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] opacity-70 tracking-[0.18em]", children: "CORPORATE SERVICES" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm/relaxed opacity-80", children: t("footer_about_desc") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold tracking-[0.18em] mb-4 opacity-80", children: t("footer_services").toUpperCase() }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: serviceItems.slice(0, 8).map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: s.to, className: "opacity-80 hover:opacity-100 transition-opacity", children: t(s.labelKey) }) }, s.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold tracking-[0.18em] mb-4 opacity-80", children: t("footer_company").toUpperCase() }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "opacity-80 hover:opacity-100", children: t("nav_about") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "opacity-80 hover:opacity-100", children: t("nav_contact") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold tracking-[0.18em] mb-4 opacity-80", children: t("footer_contact").toUpperCase() }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm opacity-90", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: t("footer_address") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+85226260378", className: "hover:opacity-100", children: "+852 2626 0378" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Printer, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Fax: +852 2626 0372" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/85298459451", target: "_blank", rel: "noopener noreferrer", className: "hover:opacity-100", children: "WhatsApp: +852 9845 9451" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@ehcsl.com", className: "hover:opacity-100", children: "info@ehcsl.com" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "https://facebook.com/ehcsl", target: "_blank", rel: "noopener noreferrer", className: "hover:opacity-100", children: "@ehcsl" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: t("footer_hours") })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/15", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl py-5 text-xs opacity-70 flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        t("company"),
        ". ",
        t("footer_rights")
      ] }),
      /* @__PURE__ */ jsx("div", { children: "TCSP Licence | AML Compliant" })
    ] }) })
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/85298459451",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "WhatsApp",
      className: "fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-105 transition-transform",
      children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-7 w-7" })
    }
  );
}
function Layout() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppFab, {})
  ] });
}
const appCss = "/assets/styles-CJhNjFrw.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-serif text-primary", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-dark transition-colors",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please try again or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "border px-4 py-2 text-sm font-medium hover:bg-secondary", children: "Go home" })
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Excellent Honour Corporate Services Limited | Hong Kong" },
      { name: "description", content: "Hong Kong corporate services: company incorporation, secretary, accounting, tax and virtual office." },
      { property: "og:title", content: "Excellent Honour Corporate Services Limited | Hong Kong" },
      { property: "og:description", content: "Hong Kong corporate services: company incorporation, secretary, accounting, tax and virtual office." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Excellent Honour Corporate Services Limited | Hong Kong" },
      { name: "twitter:description", content: "Hong Kong corporate services: company incorporation, secretary, accounting, tax and virtual office." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/80688a7a-0c2b-495a-9dd2-59a964a77a00/id-preview-86bf6d6b--f22f85c5-cc65-4b4e-9e41-1e5187e54425.lovable.app-1778668826290.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/80688a7a-0c2b-495a-9dd2-59a964a77a00/id-preview-86bf6d6b--f22f85c5-cc65-4b4e-9e41-1e5187e54425.lovable.app-1778668826290.png" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(Layout, {}) }) });
}
const $$splitComponentImporter$e = () => import("./contact-r4lXCeaL.js");
const Route$e = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./about-DMdVVNVh.js");
const Route$d = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./index-BUH9W8eu.js");
const Route$c = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Excellent Honour Corporate Services Limited | Hong Kong"
    }, {
      name: "description",
      content: "Hong Kong company incorporation, secretarial, accounting, tax and virtual office services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./trademark-M7yhZI7C.js");
const Route$b = createFileRoute("/services/trademark")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./registered-address-DAMy0kX1.js");
const Route$a = createFileRoute("/services/registered-address")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./profits-tax-return-5dhjhjKO.js");
const Route$9 = createFileRoute("/services/profits-tax-return")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./offshore-company-yjkbDJ4u.js");
const Route$8 = createFileRoute("/services/offshore-company")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./named-secretary-BtdhDZ-n.js");
const Route$7 = createFileRoute("/services/named-secretary")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./mail-forwarding-DGRgsKtj.js");
const Route$6 = createFileRoute("/services/mail-forwarding")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./hk-incorporation-DCL3JOom.js");
const Route$5 = createFileRoute("/services/hk-incorporation")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./change-of-directors-BR_JXo_C.js");
const Route$4 = createFileRoute("/services/change-of-directors")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./call-answering-Bqc9VykI.js");
const Route$3 = createFileRoute("/services/call-answering")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./bookkeeping-BX0prweY.js");
const Route$2 = createFileRoute("/services/bookkeeping")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./audit-coordination-CmmynUMd.js");
const Route$1 = createFileRoute("/services/audit-coordination")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./annual-return-nar1-BFtGMmDZ.js");
const Route = createFileRoute("/services/annual-return-nar1")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ContactRoute = Route$e.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$f
});
const AboutRoute = Route$d.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ServicesTrademarkRoute = Route$b.update({
  id: "/services/trademark",
  path: "/services/trademark",
  getParentRoute: () => Route$f
});
const ServicesRegisteredAddressRoute = Route$a.update({
  id: "/services/registered-address",
  path: "/services/registered-address",
  getParentRoute: () => Route$f
});
const ServicesProfitsTaxReturnRoute = Route$9.update({
  id: "/services/profits-tax-return",
  path: "/services/profits-tax-return",
  getParentRoute: () => Route$f
});
const ServicesOffshoreCompanyRoute = Route$8.update({
  id: "/services/offshore-company",
  path: "/services/offshore-company",
  getParentRoute: () => Route$f
});
const ServicesNamedSecretaryRoute = Route$7.update({
  id: "/services/named-secretary",
  path: "/services/named-secretary",
  getParentRoute: () => Route$f
});
const ServicesMailForwardingRoute = Route$6.update({
  id: "/services/mail-forwarding",
  path: "/services/mail-forwarding",
  getParentRoute: () => Route$f
});
const ServicesHkIncorporationRoute = Route$5.update({
  id: "/services/hk-incorporation",
  path: "/services/hk-incorporation",
  getParentRoute: () => Route$f
});
const ServicesChangeOfDirectorsRoute = Route$4.update({
  id: "/services/change-of-directors",
  path: "/services/change-of-directors",
  getParentRoute: () => Route$f
});
const ServicesCallAnsweringRoute = Route$3.update({
  id: "/services/call-answering",
  path: "/services/call-answering",
  getParentRoute: () => Route$f
});
const ServicesBookkeepingRoute = Route$2.update({
  id: "/services/bookkeeping",
  path: "/services/bookkeeping",
  getParentRoute: () => Route$f
});
const ServicesAuditCoordinationRoute = Route$1.update({
  id: "/services/audit-coordination",
  path: "/services/audit-coordination",
  getParentRoute: () => Route$f
});
const ServicesAnnualReturnNar1Route = Route.update({
  id: "/services/annual-return-nar1",
  path: "/services/annual-return-nar1",
  getParentRoute: () => Route$f
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ServicesAnnualReturnNar1Route,
  ServicesAuditCoordinationRoute,
  ServicesBookkeepingRoute,
  ServicesCallAnsweringRoute,
  ServicesChangeOfDirectorsRoute,
  ServicesHkIncorporationRoute,
  ServicesMailForwardingRoute,
  ServicesNamedSecretaryRoute,
  ServicesOffshoreCompanyRoute,
  ServicesProfitsTaxReturnRoute,
  ServicesRegisteredAddressRoute,
  ServicesTrademarkRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  useLang as u
};
