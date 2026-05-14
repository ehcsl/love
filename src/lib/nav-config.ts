export type NavChild = { labelKey: string; to: string };
export type NavItem = { labelKey: string; to?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { labelKey: "nav_home", to: "/" },
  { labelKey: "nav_about", to: "/about" },
  {
    labelKey: "nav_incorporation",
    children: [
      { labelKey: "sub_hk", to: "/services/hk-incorporation" },
      { labelKey: "sub_offshore", to: "/services/offshore-company" },
      { labelKey: "sub_trademark", to: "/services/trademark" },
    ],
  },
  {
    labelKey: "nav_secretary",
    children: [
      { labelKey: "sub_named", to: "/services/named-secretary" },
      { labelKey: "sub_nar1", to: "/services/annual-return-nar1" },
      { labelKey: "sub_change_dir", to: "/services/change-of-directors" },
    ],
  },
  {
    labelKey: "nav_accounting",
    children: [
      { labelKey: "sub_bookkeeping", to: "/services/bookkeeping" },
      { labelKey: "sub_audit", to: "/services/audit-coordination" },
      { labelKey: "sub_ptr", to: "/services/profits-tax-return" },
    ],
  },
  {
    labelKey: "nav_virtual",
    children: [
      { labelKey: "sub_addr", to: "/services/registered-address" },
      { labelKey: "sub_mail", to: "/services/mail-forwarding" },
      { labelKey: "sub_call", to: "/services/call-answering" },
    ],
  },
  { labelKey: "nav_contact", to: "/contact" },
];
