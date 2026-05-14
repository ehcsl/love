import { jsxs, jsx } from "react/jsx-runtime";
import { u as useLang } from "./router-rsWX6JJe.js";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
function ServicePlaceholder({ titleKey }) {
  const { t } = useLang();
  return /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-5xl py-20", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-primary mb-3", children: t("placeholder_title") }),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-serif text-foreground text-balance", children: t(titleKey) }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl", children: t("placeholder_body") }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/contact",
        className: "mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary-dark transition-colors",
        children: [
          t("placeholder_cta"),
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ]
      }
    )
  ] });
}
export {
  ServicePlaceholder as S
};
