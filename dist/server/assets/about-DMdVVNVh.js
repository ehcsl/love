import { jsxs, jsx } from "react/jsx-runtime";
import { u as useLang } from "./router-rsWX6JJe.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "framer-motion";
import "lucide-react";
function About() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-5xl py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-xs uppercase tracking-[0.22em] text-primary mb-3", children: [
      "— ",
      t("nav_about")
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-serif text-foreground text-balance", children: t("nav_about") }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl", children: t("placeholder_body") })
  ] });
}
export {
  About as component
};
