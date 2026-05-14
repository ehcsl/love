import { jsxs, jsx } from "react/jsx-runtime";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { u as useLang } from "./router-rsWX6JJe.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "framer-motion";
function Contact() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-6xl py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-xs uppercase tracking-[0.22em] text-primary mb-3", children: [
      "— ",
      t("nav_contact")
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-serif text-foreground text-balance", children: t("nav_contact") }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxs("ul", { className: "space-y-5 text-sm", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: t("footer_address") })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("a", { href: "tel:+85239560000", children: "+852 3956 0000" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:info@excellenthonour.hk", children: "info@excellenthonour.hk" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { children: t("footer_hours") })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-secondary/60 border p-8", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t("placeholder_body") }) })
    ] })
  ] });
}
export {
  Contact as component
};
