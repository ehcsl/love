// Service content for Excellent Honour Corporate Services Limited.
// Original adapted copy. Any pricing shown is a PLACEHOLDER for human review.
// Structured per locale (en | tc | sc).

import type { Lang } from "@/i18n/translations";

export type FAQ = { q: string; a: string };
export type ProcessStep = { title: string; desc: string };

export type SubServiceContent = {
  slug: string;          // e.g. "hk-incorporation"
  parent: string;        // e.g. "incorporation"
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; sub: string };
  overview: string[];                   // paragraphs
  included: string[];                   // "what is included" bullets
  audience: string[];                   // "who it's for" bullets
  process: ProcessStep[];
  notes: FAQ[];                         // FAQs / important notes
  cta: { title: string; sub: string; btn: string };
};

export type CategoryContent = {
  slug: string;          // e.g. "incorporation"
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; sub: string };
  overview: string[];
  features: { title: string; desc: string }[];
  process: ProcessStep[];
  faqs: FAQ[];
  subServices: { slug: string; title: string; desc: string }[];
  cta: { title: string; sub: string; btn: string };
};

export type ServiceContent = {
  categories: Record<string, CategoryContent>;
  subServices: Record<string, SubServiceContent>;
  ui: {
    breadcrumb_home: string;
    breadcrumb_services: string;
    placeholder_badge: string;
    overview: string;
    features: string;
    process: string;
    faq: string;
    included: string;
    audience: string;
    related: string;
    explore_subservices: string;
    talk_to_us: string;
  };
};

// ============================================================
// ENGLISH
// ============================================================
const en: ServiceContent = {
  ui: {
    breadcrumb_home: "Home",
    breadcrumb_services: "Services",
    placeholder_badge: "Pricing placeholder — pending review",
    overview: "Overview",
    features: "Service Features",
    process: "Our Process",
    faq: "FAQ & Important Notes",
    included: "What's Included",
    audience: "Who It's For",
    related: "Related Services",
    explore_subservices: "Explore Sub-Services",
    talk_to_us: "Talk to a Consultant",
  },
  categories: {
    incorporation: {
      slug: "incorporation",
      title: "Company Incorporation",
      metaTitle: "Company Incorporation Services in Hong Kong | Excellent Honour",
      metaDescription:
        "Set up a Hong Kong limited company, offshore company or register a trademark with experienced corporate consultants.",
      hero: {
        eyebrow: "Incorporation",
        title: "Start your business in Hong Kong with confidence",
        sub: "End-to-end company formation and registration support — local limited companies, offshore entities and trademark protection.",
      },
      overview: [
        "Hong Kong is one of the world's most efficient places to incorporate, but the regulatory requirements still demand careful handling. Excellent Honour guides founders, SMEs and overseas investors through every step of forming a compliant Hong Kong limited company.",
        "From name search and Certificate of Incorporation to Business Registration, share allocation and bank account preparation — our consultants ensure your company is properly set up and ready to operate.",
      ],
      features: [
        { title: "Local & Foreign Founders", desc: "We work with both Hong Kong residents and overseas clients, including remote applicants." },
        { title: "Bank Account Support", desc: "Document preparation and introductions to local and digital banking partners." },
        { title: "Compliance Built-In", desc: "Statutory registers, company chops and constitutional documents prepared from day one." },
        { title: "Multilingual Service", desc: "Cantonese, Mandarin and English specialists across the entire formation process." },
      ],
      process: [
        { title: "Initial Consultation", desc: "We confirm your structure, shareholders, directors and intended business activity." },
        { title: "Name Search & Approval", desc: "We verify name availability with the Companies Registry." },
        { title: "Document Preparation", desc: "Incorporation forms, articles of association and shareholder documents." },
        { title: "Filing & Registration", desc: "Submission to the Companies Registry and Inland Revenue Department." },
        { title: "Handover", desc: "Delivery of CI, BR, statutory registers, chops and bank-ready documents." },
      ],
      faqs: [
        { q: "How long does Hong Kong incorporation take?", a: "A standard private limited company can typically be incorporated within several working days once all signed documents and KYC information are received." },
        { q: "Do shareholders or directors need to be in Hong Kong?", a: "No. A Hong Kong limited company can be formed with overseas individual or corporate shareholders and directors. A Hong Kong-resident company secretary and a registered Hong Kong address are required." },
        { q: "What is the minimum share capital?", a: "There is no statutory minimum. Most clients adopt HKD 10,000 divided into 10,000 shares as a practical default." },
        { q: "Will my company need to file annual returns and audited accounts?", a: "Yes. Every Hong Kong limited company must file an annual return (NAR1) and prepare audited financial statements each year, regardless of trading activity." },
      ],
      subServices: [
        { slug: "hk-incorporation", title: "Hong Kong Limited Company", desc: "Form a Hong Kong private limited company with full compliance setup." },
        { slug: "offshore-company", title: "Offshore Company", desc: "Incorporate overseas entities such as BVI, Cayman or Samoa." },
        { slug: "trademark", title: "Trademark Registration", desc: "Protect your brand in Hong Kong, Mainland China and key overseas markets." },
      ],
      cta: {
        title: "Ready to incorporate?",
        sub: "Speak with a senior consultant for a tailored, no-obligation quotation.",
        btn: "Request a Free Consultation",
      },
    },
    secretary: {
      slug: "secretary",
      title: "Company Secretary",
      metaTitle: "Hong Kong Company Secretary Services | Excellent Honour",
      metaDescription:
        "Named company secretary, annual return filing (NAR1) and statutory change services for Hong Kong limited companies.",
      hero: {
        eyebrow: "Company Secretary",
        title: "Stay compliant with the Companies Ordinance — without the hassle",
        sub: "Named company secretary, annual filings, register maintenance and statutory change support, all under one annual fee.",
      },
      overview: [
        "Section 474 of the Hong Kong Companies Ordinance requires every limited company to appoint a company secretary who ordinarily resides in Hong Kong (or is a Hong Kong-incorporated body corporate).",
        "Excellent Honour acts as your named company secretary, prepares and files your statutory documents and maintains your statutory registers — keeping your company in good standing throughout the year.",
      ],
      features: [
        { title: "Named Secretary", desc: "We act as your appointed company secretary as required by law." },
        { title: "Annual Return (NAR1)", desc: "Prepared and filed on time with the Companies Registry." },
        { title: "Statutory Registers", desc: "Members, directors, secretary and Significant Controllers Register kept up to date." },
        { title: "Change Filings", desc: "Director changes, address changes, name changes and share transfers." },
      ],
      process: [
        { title: "Engagement", desc: "We review your existing records and accept the appointment as company secretary." },
        { title: "Records Review", desc: "Statutory registers and prior filings checked and brought current if needed." },
        { title: "Annual Cycle", desc: "We track your filing dates and prepare NAR1, BR renewal and meeting minutes." },
        { title: "On-demand Filings", desc: "Any director, address or capital changes are filed promptly within statutory deadlines." },
      ],
      faqs: [
        { q: "What is the deadline for the Annual Return (NAR1)?", a: "A private company must file NAR1 within 42 days of the anniversary of its incorporation date. Late filing attracts escalating government penalties." },
        { q: "Can the sole director also be the company secretary?", a: "No. Section 475 of the Companies Ordinance prohibits the sole director of a private company from also acting as the company secretary." },
        { q: "What is the Significant Controllers Register (SCR)?", a: "Since March 2018, every Hong Kong company must keep an SCR identifying its beneficial owners and a designated representative, available for inspection by law enforcement." },
        { q: "What if I miss a filing deadline?", a: "Late annual returns trigger registration fees that increase with delay, and persistent default may result in prosecution. We monitor deadlines so this doesn't happen." },
      ],
      subServices: [
        { slug: "named-secretary", title: "Named Company Secretary", desc: "Hold the statutory appointment under the Companies Ordinance." },
        { slug: "annual-return-nar1", title: "Annual Return (NAR1)", desc: "Timely preparation and filing of your annual return." },
        { slug: "change-of-directors", title: "Change of Directors", desc: "Appointment, resignation and particulars updates." },
      ],
      cta: {
        title: "Looking for a reliable company secretary?",
        sub: "Switch to Excellent Honour for transparent fees and proactive deadline management.",
        btn: "Get a Quotation",
      },
    },
    accounting: {
      slug: "accounting",
      title: "Accounting & Tax",
      metaTitle: "Accounting, Audit Coordination & Profits Tax Services | Excellent Honour",
      metaDescription:
        "Bookkeeping, audit coordination and Hong Kong Profits Tax Return (PTR) preparation for SMEs and international clients.",
      hero: {
        eyebrow: "Accounting & Tax",
        title: "Clean books, audit-ready accounts, on-time tax filing",
        sub: "From monthly bookkeeping to audit coordination and profits tax filing — practical accounting support for Hong Kong companies.",
      },
      overview: [
        "Every Hong Kong limited company must maintain proper accounting records, produce audited financial statements and file a Profits Tax Return each year. Even dormant companies are required to comply.",
        "Our finance team prepares your books, liaises with a Hong Kong CPA for the statutory audit and files your PTR with the Inland Revenue Department, so deadlines are met and adjustments are minimised.",
      ],
      features: [
        { title: "Bookkeeping", desc: "Monthly, quarterly or annual ledger maintenance with management reports." },
        { title: "Audit Coordination", desc: "We prepare audit schedules and liaise with independent CPA firms on your behalf." },
        { title: "Profits Tax Return", desc: "Tax computation and PTR submission, including extension applications where eligible." },
        { title: "Offshore Claims", desc: "Documentation and submission support for offshore profits exemption applications." },
      ],
      process: [
        { title: "Document Collection", desc: "We agree the financial year, scope and document checklist with you." },
        { title: "Bookkeeping", desc: "Transactions are recorded and reconciled to bank statements." },
        { title: "Financial Statements", desc: "Draft P&L, balance sheet and trial balance prepared for audit." },
        { title: "Audit", desc: "Independent CPA conducts the statutory audit and issues the audit report." },
        { title: "Tax Filing", desc: "Profits Tax computation and PTR submitted to the IRD with supporting schedules." },
      ],
      faqs: [
        { q: "When does my new company receive its first PTR?", a: "The IRD typically issues the first Profits Tax Return about 18 months after incorporation. Subsequent returns are issued each April." },
        { q: "Can I just file a 'zero' return if my company didn't trade?", a: "No. Under current IRD practice, a Profits Tax Return must be supported by audited financial statements, even for dormant or non-trading companies, unless a formal dormant filing applies." },
        { q: "What is the Profits Tax rate?", a: "Under the two-tier regime, the first HKD 2 million of assessable profits of a corporation is taxed at 8.25%, and the remainder at 16.5%. Only one entity per group can elect the lower tier." },
        { q: "Can I claim offshore profits exemption?", a: "Hong Kong taxes on a territorial basis. Income genuinely sourced outside Hong Kong may be exempt, but a formal claim with supporting evidence must be reviewed and approved by the IRD." },
      ],
      subServices: [
        { slug: "bookkeeping", title: "Bookkeeping", desc: "Monthly or annual ledger maintenance and management reports." },
        { slug: "audit-coordination", title: "Audit Coordination", desc: "Audit schedule preparation and liaison with independent CPAs." },
        { slug: "profits-tax-return", title: "Profits Tax Return", desc: "Tax computation and PTR submission to the Inland Revenue Department." },
      ],
      cta: {
        title: "Need a clean audit and on-time PTR?",
        sub: "Get a fixed-fee quotation based on your transaction volume and turnover.",
        btn: "Request a Quotation",
      },
    },
    "virtual-office": {
      slug: "virtual-office",
      title: "Virtual Office",
      metaTitle: "Virtual Office, Registered Address & Mail Handling | Excellent Honour",
      metaDescription:
        "Prestigious Tsim Sha Tsui virtual office: registered address, mail forwarding and call answering for Hong Kong companies.",
      hero: {
        eyebrow: "Virtual Office",
        title: "A professional Hong Kong business address — without the rent",
        sub: "Use our Tsim Sha Tsui address as your registered office, with secure mail handling and bilingual call answering.",
      },
      overview: [
        "A registered office address in Hong Kong is mandatory for every limited company under the Companies Ordinance. Our virtual office plans give you a real, prestigious commercial address in Tsim Sha Tsui together with the operational services you need to run a credible business.",
        "Whether you're an overseas founder, a remote-first SME or simply prefer not to maintain a leased office, our team handles your mail, calls and statutory display requirements professionally.",
      ],
      features: [
        { title: "Tsim Sha Tsui Address", desc: "Use a real Grade-A commercial address as your registered and business address." },
        { title: "Mail Handling", desc: "Unlimited inbound mail and parcel reception with notification and forwarding options." },
        { title: "Call Answering", desc: "Bilingual receptionists answer in your company name and route calls or messages." },
        { title: "Statutory Display", desc: "Company name displayed at the office to satisfy Companies Registry requirements." },
      ],
      process: [
        { title: "Choose a Plan", desc: "Pick the combination of address, mail and call services you need." },
        { title: "Onboarding", desc: "We complete KYC and update your registered address with the authorities if needed." },
        { title: "Activation", desc: "Mail and call services go live; you receive notifications via email or our portal." },
        { title: "Ongoing Support", desc: "Forwarding, scanning and meeting room bookings handled on request." },
      ],
      faqs: [
        { q: "Is a virtual office address acceptable to the Companies Registry?", a: "Yes. As long as the address is a real, identifiable Hong Kong premises and your company name is displayed there, it satisfies the registered office requirement." },
        { q: "Will banks accept a virtual office address?", a: "Most Hong Kong banks accept a virtual office address as the registered address but may also ask about the operational location. We can advise on what to disclose." },
        { q: "How is mail handled?", a: "Mail is logged and you are notified. You can collect in person, request scanning to PDF or arrange forwarding to a chosen address." },
        { q: "Can I cancel the service?", a: "Service terms vary by plan. We will guide you through any required address change with the Companies Registry and Inland Revenue Department." },
      ],
      subServices: [
        { slug: "registered-address", title: "Registered Address", desc: "Use our Hong Kong address as your registered office." },
        { slug: "mail-forwarding", title: "Mail Forwarding", desc: "Mail and parcel reception with scanning and forwarding." },
        { slug: "call-answering", title: "Call Answering", desc: "Dedicated number with bilingual receptionists." },
      ],
      cta: {
        title: "Need a Hong Kong business address today?",
        sub: "Activate a virtual office plan in as little as one working day.",
        btn: "Apply Now",
      },
    },
  },
  subServices: {
    "hk-incorporation": {
      slug: "hk-incorporation", parent: "incorporation",
      title: "Hong Kong Limited Company Incorporation",
      metaTitle: "Hong Kong Limited Company Incorporation | Excellent Honour",
      metaDescription: "Form your Hong Kong private limited company end-to-end — name search, CI, BR, statutory registers and bank-ready documents.",
      hero: { eyebrow: "Incorporation · HK Company", title: "Form your Hong Kong limited company", sub: "End-to-end incorporation handled by experienced consultants — typically completed within several working days." },
      overview: [
        "A Hong Kong private limited company is the most common vehicle for doing business in or through Hong Kong: limited liability, internationally recognised, and supported by a simple, low-rate tax system.",
        "Our team manages the full process from name search to issuing your statutory registers and bank-ready documentation.",
      ],
      included: [
        "Company name search with the Companies Registry",
        "Application for Certificate of Incorporation (CI), including government fee",
        "Application for one-year Business Registration Certificate (BR), including government fee",
        "Articles of Association (5 copies) and company common seal / chops",
        "Statutory registers (members, directors, secretary, SCR)",
        "Allotment of shares to up to 5 individual shareholders",
        "Document pack ready for bank account opening",
      ],
      audience: [
        "Founders launching a new Hong Kong business",
        "Overseas investors establishing a Hong Kong presence",
        "Existing groups setting up a Hong Kong subsidiary",
        "Professionals restructuring from sole proprietor to limited company",
      ],
      process: [
        { title: "Consultation", desc: "Confirm structure, shareholders, directors and business scope." },
        { title: "Name Check", desc: "Verify availability with the Companies Registry." },
        { title: "Documentation", desc: "Prepare incorporation forms and articles for signing." },
        { title: "Filing", desc: "Submit to the Companies Registry and IRD." },
        { title: "Handover", desc: "Deliver CI, BR, registers, chops and bank-ready pack." },
      ],
      notes: [
        { q: "How quickly can I be incorporated?", a: "Standard turnaround is typically several working days from receipt of signed documents and KYC." },
        { q: "Do I need to come to Hong Kong?", a: "No. The full process can be handled remotely with proper KYC documentation." },
        { q: "Pricing", a: "Final fees depend on the package selected. Pricing on this page is a placeholder pending review." },
      ],
      cta: { title: "Ready to incorporate?", sub: "Get a tailored quotation today.", btn: "Request a Quotation" },
    },
    "offshore-company": {
      slug: "offshore-company", parent: "incorporation",
      title: "Offshore Company Incorporation",
      metaTitle: "Offshore Company Incorporation (BVI, Cayman, Samoa) | Excellent Honour",
      metaDescription: "Incorporate offshore companies in BVI, Cayman, Samoa and other jurisdictions with full ongoing compliance support.",
      hero: { eyebrow: "Incorporation · Offshore", title: "Incorporate an offshore company", sub: "BVI, Cayman, Samoa and other established offshore jurisdictions, with annual maintenance support." },
      overview: [
        "Offshore companies are commonly used for holding structures, international trade and asset planning. Each jurisdiction has different requirements for directors, shareholders, registered agents and economic substance.",
        "We help you select the right jurisdiction, complete formation and maintain the entity in good standing.",
      ],
      included: [
        "Jurisdiction recommendation and structure planning",
        "Name reservation and incorporation filings",
        "Registered agent and registered office",
        "Standard corporate documents (Memorandum, Articles, Certificate of Incorporation)",
        "First-year government and agent fees",
        "Apostille / certified copies on request (additional fees may apply)",
      ],
      audience: [
        "Holding companies for international assets",
        "Cross-border trading vehicles",
        "Founders structuring intellectual property",
        "Family wealth and succession planning",
      ],
      process: [
        { title: "Jurisdiction Review", desc: "We compare jurisdictions for cost, substance and reputational fit." },
        { title: "KYC", desc: "Identity, address and source-of-funds documents collected." },
        { title: "Formation", desc: "Filing with the registry of the chosen jurisdiction." },
        { title: "Document Pack", desc: "Originals and certified copies issued for downstream use." },
      ],
      notes: [
        { q: "Do offshore companies still file annual returns?", a: "Most jurisdictions require an annual government fee and registered agent renewal. Some now also require economic substance reporting." },
        { q: "Can I open a Hong Kong bank account for an offshore company?", a: "It is possible but increasingly subject to enhanced due diligence. We will advise on documentation and realistic options." },
        { q: "Pricing", a: "Fees vary by jurisdiction and structure. Figures on this page are placeholders pending review." },
      ],
      cta: { title: "Considering an offshore structure?", sub: "Get jurisdiction guidance and a fixed-fee quotation.", btn: "Talk to a Consultant" },
    },
    "trademark": {
      slug: "trademark", parent: "incorporation",
      title: "Trademark Registration",
      metaTitle: "Trademark Registration in Hong Kong & China | Excellent Honour",
      metaDescription: "Protect your brand with trademark searches and applications in Hong Kong, Mainland China and key overseas markets.",
      hero: { eyebrow: "Incorporation · Trademark", title: "Protect your brand", sub: "Trademark searches, classification and registration in Hong Kong, Mainland China and overseas." },
      overview: [
        "A registered trademark is the foundation of brand protection. Without registration, enforcing your rights against copycats is difficult and costly.",
        "We coordinate searches, Nice classification, applications and ongoing renewals across multiple jurisdictions.",
      ],
      included: [
        "Pre-application availability search",
        "Nice classification advice",
        "Application drafting and filing",
        "Office action response coordination",
        "Registration certificate issuance and docketing",
      ],
      audience: [
        "Brands launching a new product or service",
        "Companies expanding into Mainland China or Asia-Pacific",
        "Founders raising investment who need IP on the cap table",
      ],
      process: [
        { title: "Search", desc: "Identify conflicts and refine the mark or specification if needed." },
        { title: "Filing", desc: "File the application in your chosen jurisdictions." },
        { title: "Examination", desc: "Respond to any office actions or oppositions." },
        { title: "Registration", desc: "Receive certificate; we track renewals." },
      ],
      notes: [
        { q: "How long does registration take?", a: "Hong Kong: typically 6–12 months if unopposed. Mainland China: typically 12–18 months." },
        { q: "Should I register in China even if I only sell in Hong Kong?", a: "Often yes, given China's first-to-file system and the risk of trademark squatting." },
        { q: "Pricing", a: "Fees depend on jurisdiction and number of classes. Placeholder pending review." },
      ],
      cta: { title: "Ready to protect your brand?", sub: "Start with a free initial search.", btn: "Request a Search" },
    },
    "named-secretary": {
      slug: "named-secretary", parent: "secretary",
      title: "Named Company Secretary",
      metaTitle: "Named Company Secretary Service in Hong Kong | Excellent Honour",
      metaDescription: "Excellent Honour acts as your appointed company secretary under the Companies Ordinance, with annual filings included.",
      hero: { eyebrow: "Secretary · Named", title: "Appoint Excellent Honour as your company secretary", sub: "Satisfy section 474 of the Companies Ordinance with a reliable, locally resident secretary." },
      overview: [
        "Every Hong Kong limited company must appoint a company secretary. We hold the appointment, prepare statutory documents and keep your company in good standing.",
      ],
      included: [
        "Acting as named company secretary for the engagement period",
        "Maintenance of statutory registers (members, directors, secretary, SCR)",
        "Preparation and filing of the Annual Return (NAR1)",
        "Business Registration Certificate renewal handling",
        "Reminders for upcoming statutory deadlines",
      ],
      audience: [
        "New companies needing a qualified secretary from incorporation",
        "Companies switching from another service provider",
        "Overseas-owned Hong Kong companies needing a local secretary",
      ],
      process: [
        { title: "Appointment", desc: "We accept the appointment and notify the Companies Registry." },
        { title: "Records Migration", desc: "Existing registers and records are reviewed and updated." },
        { title: "Annual Operation", desc: "We track deadlines and prepare statutory documents on time." },
      ],
      notes: [
        { q: "Can a sole director also be the secretary?", a: "No. Section 475 of the Companies Ordinance prohibits this for private companies." },
        { q: "Can a non-resident be a secretary?", a: "The secretary must ordinarily reside in Hong Kong (for an individual) or be a Hong Kong-incorporated body corporate." },
        { q: "Pricing", a: "Annual fee depends on the plan. Figures on this page are placeholders pending review." },
      ],
      cta: { title: "Need a reliable secretary?", sub: "Switch to Excellent Honour with no disruption.", btn: "Get a Quotation" },
    },
    "annual-return-nar1": {
      slug: "annual-return-nar1", parent: "secretary",
      title: "Annual Return (NAR1) Filing",
      metaTitle: "NAR1 Annual Return Filing in Hong Kong | Excellent Honour",
      metaDescription: "Timely preparation and filing of the Hong Kong Annual Return (NAR1) for private and public companies.",
      hero: { eyebrow: "Secretary · NAR1", title: "Annual Return (NAR1) filed on time", sub: "Avoid escalating government penalties for late filings." },
      overview: [
        "A private Hong Kong company must file Form NAR1 within 42 days of the anniversary of its incorporation date. Late filings attract increasing government fees and may lead to prosecution.",
      ],
      included: [
        "Drafting the NAR1 with current particulars",
        "Director and shareholder confirmation",
        "Filing with the Companies Registry",
        "Payment of the annual registration fee on your behalf (charged to client)",
      ],
      audience: [
        "Hong Kong private limited companies",
        "Companies that have missed prior filings and need to catch up",
      ],
      process: [
        { title: "Reminder", desc: "We notify you ahead of the filing window." },
        { title: "Confirmation", desc: "You confirm particulars; we draft the NAR1." },
        { title: "Filing", desc: "Submission to the Companies Registry within the 42-day window." },
      ],
      notes: [
        { q: "What is the late-filing penalty?", a: "Government registration fees increase based on how late the return is filed (over 42 days but not more than 3 months, 3–6 months, 6–9 months, over 9 months). Persistent default may result in prosecution." },
        { q: "Pricing", a: "Service fee shown elsewhere is a placeholder pending review. Government fees are charged at cost." },
      ],
      cta: { title: "Don't miss your NAR1 deadline", sub: "Hand it to us and stop tracking it yourself.", btn: "File My NAR1" },
    },
    "change-of-directors": {
      slug: "change-of-directors", parent: "secretary",
      title: "Change of Directors & Particulars",
      metaTitle: "Change of Directors and Statutory Filings | Excellent Honour",
      metaDescription: "Director appointments, resignations and particulars updates filed with the Hong Kong Companies Registry.",
      hero: { eyebrow: "Secretary · Changes", title: "Director and company changes, properly filed", sub: "Appointment, resignation, address and particulars changes within statutory deadlines." },
      overview: [
        "Changes in directors, secretary, registered office or company name must be notified to the Companies Registry within prescribed time limits. We prepare resolutions and statutory forms and handle the filings.",
      ],
      included: [
        "Drafting board resolutions or written members' resolutions",
        "Preparation of relevant statutory forms (e.g. ND2A, NR1, NNC2)",
        "Update of statutory registers",
        "Filing with the Companies Registry",
      ],
      audience: [
        "Companies onboarding or off-boarding directors",
        "Companies relocating their registered office",
        "Companies undergoing rebranding or share restructuring",
      ],
      process: [
        { title: "Instruction", desc: "Confirm the change and provide supporting documents." },
        { title: "Drafting", desc: "We prepare resolutions and statutory forms." },
        { title: "Signing & Filing", desc: "Documents signed and filed with the Companies Registry." },
      ],
      notes: [
        { q: "What is the deadline?", a: "Most changes must be notified within 15 days. We work to that window." },
        { q: "Pricing", a: "Service fees vary by change type. Any figures shown are placeholders pending review; government fees are charged at cost." },
      ],
      cta: { title: "Have a change to file?", sub: "Send us the details and we'll handle it.", btn: "Start a Filing" },
    },
    "bookkeeping": {
      slug: "bookkeeping", parent: "accounting",
      title: "Bookkeeping Services",
      metaTitle: "Bookkeeping Services for Hong Kong SMEs | Excellent Honour",
      metaDescription: "Monthly, quarterly or annual bookkeeping with management reports for Hong Kong SMEs and international clients.",
      hero: { eyebrow: "Accounting · Bookkeeping", title: "Clean books, ready for audit and decisions", sub: "Outsourced bookkeeping with clear reports — monthly, quarterly or annual." },
      overview: [
        "Proper accounting records are a legal requirement for Hong Kong companies and the foundation of every audit and tax filing. Our team maintains your ledgers and produces management reports.",
      ],
      included: [
        "General ledger maintenance",
        "Bank reconciliations",
        "Profit & loss, balance sheet and trial balance",
        "Accounts receivable and payable schedules",
        "Document filing and digitisation",
      ],
      audience: [
        "SMEs without an in-house finance team",
        "Overseas-owned Hong Kong companies",
        "Founders preparing for audit or fundraising",
      ],
      process: [
        { title: "Scope", desc: "Agree volume, frequency and chart of accounts." },
        { title: "Document Flow", desc: "Set up secure document submission." },
        { title: "Recording", desc: "Transactions recorded and reconciled." },
        { title: "Reporting", desc: "Management reports delivered on schedule." },
      ],
      notes: [
        { q: "What software do you use?", a: "We work with mainstream accounting software and can adapt to your existing system on request." },
        { q: "Pricing", a: "Fees depend on transaction volume. Figures are placeholders pending review." },
      ],
      cta: { title: "Outsource your bookkeeping", sub: "Get a fixed quote based on your transaction volume.", btn: "Request a Quotation" },
    },
    "audit-coordination": {
      slug: "audit-coordination", parent: "accounting",
      title: "Audit Coordination",
      metaTitle: "Statutory Audit Coordination for Hong Kong Companies | Excellent Honour",
      metaDescription: "Audit schedule preparation and CPA liaison for Hong Kong statutory audits.",
      hero: { eyebrow: "Accounting · Audit", title: "Audit-ready accounts, handled end-to-end", sub: "We prepare your audit pack and coordinate with an independent Hong Kong CPA." },
      overview: [
        "Every Hong Kong limited company must produce audited financial statements signed by an independent practising CPA. We prepare the supporting workings and liaise with the audit firm so the process moves smoothly.",
      ],
      included: [
        "Audit schedule preparation",
        "Trial balance, ledger and reconciliations pack",
        "Liaison with the audit firm and response to queries",
        "Coordination of director sign-off",
        "Final audited financial statements ready for tax filing",
      ],
      audience: [
        "Companies undergoing their first statutory audit",
        "Companies switching auditor or service provider",
        "Group entities consolidating multiple Hong Kong subsidiaries",
      ],
      process: [
        { title: "Prep", desc: "Compile the audit pack." },
        { title: "Audit Fieldwork", desc: "Auditor reviews; we respond to queries." },
        { title: "Sign-off", desc: "Directors sign the financial statements and audit report." },
      ],
      notes: [
        { q: "Do dormant companies need an audit?", a: "Generally yes, unless a formal dormant filing is in place." },
        { q: "Pricing", a: "Audit fee depends on size and complexity. Any figures shown are placeholders pending review." },
      ],
      cta: { title: "Time to start your audit?", sub: "Get a clear scope and fixed fee.", btn: "Start My Audit" },
    },
    "profits-tax-return": {
      slug: "profits-tax-return", parent: "accounting",
      title: "Profits Tax Return (PTR)",
      metaTitle: "Hong Kong Profits Tax Return (PTR) Filing | Excellent Honour",
      metaDescription: "Profits tax computation and PTR filing with the Hong Kong Inland Revenue Department, including extension applications.",
      hero: { eyebrow: "Accounting · PTR", title: "Profits Tax Return filed correctly and on time", sub: "Tax computation, PTR submission and extension management." },
      overview: [
        "The Profits Tax Return must be filed with the Inland Revenue Department together with audited financial statements and a tax computation. Hong Kong applies a two-tier rate of 8.25% on the first HKD 2 million of profits and 16.5% on the remainder.",
      ],
      included: [
        "Profits tax computation aligned to audited accounts",
        "Preparation and filing of the PTR and supporting schedules",
        "Block extension management where eligible",
        "Correspondence with the IRD on routine queries",
      ],
      audience: [
        "Active and dormant Hong Kong limited companies",
        "Companies considering an offshore profits exemption claim",
      ],
      process: [
        { title: "Receive PTR", desc: "Confirm filing window and any extension." },
        { title: "Compute Tax", desc: "Prepare the tax computation from audited accounts." },
        { title: "File", desc: "Submit the PTR and computations to the IRD." },
      ],
      notes: [
        { q: "When is the first PTR issued?", a: "Approximately 18 months after incorporation, then annually each April." },
        { q: "What if I don't file?", a: "Penalties of up to HKD 10,000 plus a treble-tax additional penalty may apply, and prosecution is possible for persistent default." },
        { q: "Pricing", a: "Service fees depend on complexity. Any figures shown are placeholders pending review." },
      ],
      cta: { title: "PTR coming up?", sub: "Let us handle the computation and filing.", btn: "Request a Quotation" },
    },
    "registered-address": {
      slug: "registered-address", parent: "virtual-office",
      title: "Registered Address",
      metaTitle: "Registered Office Address in Hong Kong | Excellent Honour",
      metaDescription: "Use a real Hong Kong commercial address as your registered office, with statutory display compliance.",
      hero: { eyebrow: "Virtual Office · Address", title: "A real Hong Kong registered office address", sub: "Statutory display, mail reception and a credible business image." },
      overview: [
        "Every Hong Kong limited company must keep a registered office in Hong Kong where statutory notices can be served. Our address satisfies this requirement and projects a professional image.",
      ],
      included: [
        "Use of our Tsim Sha Tsui address as registered office and business address",
        "Display of company name as required by the Companies Registry",
        "Reception and notification of standard mail and notices",
      ],
      audience: [
        "Overseas founders incorporating remotely",
        "Companies wanting to keep their home address private",
        "Remote-first SMEs",
      ],
      process: [
        { title: "Apply", desc: "Choose a plan and complete KYC." },
        { title: "Activate", desc: "Address goes live; we update the Companies Registry if needed." },
        { title: "Operate", desc: "Mail and notices handled per your instructions." },
      ],
      notes: [
        { q: "Will the Companies Registry accept it?", a: "Yes, provided your company name is properly displayed and notices can be served — both of which are covered." },
        { q: "Pricing", a: "Plan fees shown elsewhere are placeholders pending review." },
      ],
      cta: { title: "Need a Hong Kong address?", sub: "Activate in as little as one working day.", btn: "Apply Now" },
    },
    "mail-forwarding": {
      slug: "mail-forwarding", parent: "virtual-office",
      title: "Mail Forwarding & Scanning",
      metaTitle: "Mail Forwarding & Scanning for Hong Kong Companies | Excellent Honour",
      metaDescription: "Mail and parcel reception, scanning to PDF, and forwarding to your chosen address.",
      hero: { eyebrow: "Virtual Office · Mail", title: "Never miss an important letter again", sub: "Mail and parcel reception, instant notifications, scanning and forwarding." },
      overview: [
        "We act as the receiving point for your business correspondence and parcels. You decide whether to collect, scan or forward — and you're notified each time something arrives.",
      ],
      included: [
        "Reception of letters and parcels addressed to your company",
        "Notification by email or via the client portal",
        "Scanning to PDF on request",
        "Forwarding by local or international courier (postage at cost)",
      ],
      audience: [
        "Overseas-based directors and shareholders",
        "Companies without a physical office in Hong Kong",
        "Founders who travel frequently",
      ],
      process: [
        { title: "Receive", desc: "Mail logged and recorded." },
        { title: "Notify", desc: "You receive a notification with sender details." },
        { title: "Action", desc: "Collect, scan or forward — your choice." },
      ],
      notes: [
        { q: "Can you forward overseas?", a: "Yes. International courier is available at cost." },
        { q: "Pricing", a: "Plan fees and forwarding charges are placeholders pending review." },
      ],
      cta: { title: "Need mail handled professionally?", sub: "Bundle with our registered address service.", btn: "Apply Now" },
    },
    "call-answering": {
      slug: "call-answering", parent: "virtual-office",
      title: "Call Answering Service",
      metaTitle: "Bilingual Call Answering for Hong Kong Companies | Excellent Honour",
      metaDescription: "Dedicated phone number with bilingual receptionists answering in your company name.",
      hero: { eyebrow: "Virtual Office · Calls", title: "Professional, bilingual call answering", sub: "A dedicated number, your company name, and trained receptionists." },
      overview: [
        "Project a professional image without hiring a receptionist. Our team answers your calls in your company name and routes them to your team or takes a message.",
      ],
      included: [
        "Dedicated direct phone number",
        "Bilingual answering in your company name",
        "Live transfer to a designated number",
        "Message taking and delivery by email or portal",
      ],
      audience: [
        "Founders who want a polished first impression",
        "Distributed teams without a central reception",
        "Companies serving both English and Chinese-speaking clients",
      ],
      process: [
        { title: "Setup", desc: "We assign a number and configure your greeting and routing." },
        { title: "Operation", desc: "Calls answered during business hours; messages delivered after hours." },
      ],
      notes: [
        { q: "What hours are covered?", a: "Standard Hong Kong business hours; extended cover available on request." },
        { q: "Pricing", a: "Plan fees shown elsewhere are placeholders pending review." },
      ],
      cta: { title: "Sound bigger than you are.", sub: "Activate a dedicated answered line in days.", btn: "Apply Now" },
    },
  },
};

// ============================================================
// Traditional Chinese
// ============================================================
const tc: ServiceContent = {
  ui: {
    breadcrumb_home: "首頁",
    breadcrumb_services: "服務",
    placeholder_badge: "收費為佔位資料，待人工確認",
    overview: "服務概覽",
    features: "服務特色",
    process: "服務流程",
    faq: "常見問題及注意事項",
    included: "服務包括",
    audience: "適用對象",
    related: "相關服務",
    explore_subservices: "探索子服務",
    talk_to_us: "聯絡顧問",
  },
  categories: {
    incorporation: {
      slug: "incorporation",
      title: "公司成立",
      metaTitle: "香港公司成立服務｜卓譽商業服務有限公司",
      metaDescription: "成立香港有限公司、離岸公司及辦理商標註冊，由經驗豐富的專業團隊全程跟進。",
      hero: {
        eyebrow: "公司成立",
        title: "在香港信心十足地展開業務",
        sub: "由本地有限公司、離岸公司至商標註冊，提供一站式公司成立及合規支援。",
      },
      overview: [
        "香港擁有全球最高效的公司成立制度之一，但合規要求仍需謹慎處理。卓譽協助創辦人、中小企及海外投資者順利完成香港有限公司的整個成立程序。",
        "由公司名稱查冊、申請公司註冊證書（CI）及商業登記證（BR），到分配股份及準備銀行開戶文件，我們確保您的公司合規啟動，並可即時投入營運。",
      ],
      features: [
        { title: "本地及海外創辦人", desc: "為香港居民及海外客戶（包括遙距申請）提供服務。" },
        { title: "銀行開戶支援", desc: "協助準備文件並引薦本地及虛擬銀行夥伴。" },
        { title: "全面合規", desc: "首日即備妥法定登記冊、公司印章及章程文件。" },
        { title: "多語團隊", desc: "粵語、普通話及英語團隊全程跟進。" },
      ],
      process: [
        { title: "初步諮詢", desc: "確認公司架構、股東、董事及業務範圍。" },
        { title: "名稱查冊", desc: "向公司註冊處查核公司名稱可用性。" },
        { title: "文件準備", desc: "準備成立表格、章程及股東文件供簽署。" },
        { title: "遞交註冊", desc: "向公司註冊處及稅務局遞交申請。" },
        { title: "文件交付", desc: "交付 CI、BR、登記冊、印章及銀行開戶文件包。" },
      ],
      faqs: [
        { q: "成立香港有限公司需時多久？", a: "在收到完整簽署文件及 KYC 資料後，一般可於數個工作天內完成成立。" },
        { q: "股東或董事必須在香港嗎？", a: "不需要。香港有限公司可由海外個人或公司股東及董事組成，但須委任香港居民／法人為公司秘書，並設有香港註冊地址。" },
        { q: "最低股本是多少？", a: "法例並無最低股本要求，常見做法為港幣 10,000 元分為 10,000 股。" },
        { q: "公司是否每年都要報稅及審計？", a: "是。所有香港有限公司無論是否經營，均須每年提交周年申報表（NAR1）及經審計財務報表。" },
      ],
      subServices: [
        { slug: "hk-incorporation", title: "香港有限公司", desc: "全套香港私人有限公司成立服務。" },
        { slug: "offshore-company", title: "離岸公司", desc: "BVI、Cayman、Samoa 等離岸公司註冊。" },
        { slug: "trademark", title: "商標註冊", desc: "於香港、中國內地及海外保護您的品牌。" },
      ],
      cta: { title: "準備成立公司？", sub: "與資深顧問對話，獲取度身報價。", btn: "預約免費諮詢" },
    },
    secretary: {
      slug: "secretary",
      title: "公司秘書",
      metaTitle: "香港公司秘書服務｜卓譽商業服務有限公司",
      metaDescription: "提供掛名公司秘書、周年申報表（NAR1）及法定變更服務，全面符合《公司條例》要求。",
      hero: {
        eyebrow: "公司秘書",
        title: "輕鬆符合《公司條例》要求",
        sub: "掛名公司秘書、周年申報、登記冊維護及法定變更，一個年費全包。" ,
      },
      overview: [
        "根據《公司條例》第 474 條，香港每間有限公司均須委任一名通常居於香港的公司秘書（或在香港註冊的法人團體）。",
        "卓譽出任您的掛名公司秘書，準備並提交法定文件，維護法定登記冊，全年確保您的公司處於良好狀態。",
      ],
      features: [
        { title: "掛名秘書", desc: "依法擔任您的公司秘書。" },
        { title: "周年申報（NAR1）", desc: "按時準備並向公司註冊處遞交。" },
        { title: "法定登記冊", desc: "維護成員、董事、秘書及重要控制人登記冊。" },
        { title: "變更申報", desc: "處理董事變更、地址變更、改名及股份轉讓。" },
      ],
      process: [
        { title: "聘任", desc: "我們審閱現有紀錄並接受公司秘書委任。" },
        { title: "紀錄整理", desc: "檢視並更新法定登記冊及過往申報。" },
        { title: "年度跟進", desc: "追蹤申報限期，準備 NAR1、商業登記續期及會議記錄。" },
        { title: "即時申報", desc: "董事、地址或股本變更於法定限期內申報。" },
      ],
      faqs: [
        { q: "周年申報表（NAR1）的提交期限？", a: "私人公司須於成立周年日後 42 日內提交，逾期將被收取遞增的政府罰款。" },
        { q: "唯一董事可否同時擔任公司秘書？", a: "不可以。《公司條例》第 475 條禁止私人公司的唯一董事兼任公司秘書。" },
        { q: "重要控制人登記冊（SCR）是甚麼？", a: "自 2018 年 3 月起，所有香港公司須備存 SCR，記錄實益擁有人及指定代表，供執法人員查閱。" },
        { q: "若錯過申報限期會怎樣？", a: "周年申報遲交會被收取遞增登記費用，持續違規可能被檢控。我們會代您追蹤所有限期。" },
      ],
      subServices: [
        { slug: "named-secretary", title: "掛名公司秘書", desc: "依《公司條例》出任您的法定公司秘書。" },
        { slug: "annual-return-nar1", title: "周年申報表 NAR1", desc: "準時準備並提交周年申報表。" },
        { slug: "change-of-directors", title: "更改董事", desc: "董事委任、辭任及資料更改。" },
      ],
      cta: { title: "尋找可靠的公司秘書？", sub: "轉用卓譽，享受透明收費及主動限期管理。", btn: "索取報價" },
    },
    accounting: {
      slug: "accounting",
      title: "會計及稅務",
      metaTitle: "會計、審計協調及利得稅服務｜卓譽商業服務有限公司",
      metaDescription: "為香港中小企及海外客戶提供簿記、審計協調及利得稅報稅表（PTR）服務。",
      hero: {
        eyebrow: "會計及稅務",
        title: "帳目清晰、審計就緒、按時報稅",
        sub: "由月度簿記至審計協調及報稅，提供實用的會計支援。",
      },
      overview: [
        "每間香港有限公司均須備存妥善會計紀錄、製備經審計財務報表並每年提交利得稅報稅表。即使屬於不活動公司亦須遵從。",
        "我們的財務團隊負責入帳、與香港執業會計師協調法定審計，並向稅務局遞交利得稅報稅表，確保按時完成。",
      ],
      features: [
        { title: "簿記理帳", desc: "月度／季度／年度入帳，附管理報表。" },
        { title: "審計協調", desc: "我們準備審計工作底稿，並代您與獨立會計師事務所對接。" },
        { title: "利得稅報稅表", desc: "稅務計算及 PTR 提交，並按需要申請延期。" },
        { title: "離岸收入申請", desc: "協助準備離岸利潤豁免徵稅的申報文件。" },
      ],
      process: [
        { title: "收集文件", desc: "確認財政年度、範圍及文件清單。" },
        { title: "簿記入帳", desc: "入帳並對銀行月結單進行核對。" },
        { title: "財務報表", desc: "準備損益表、資產負債表及試算表供審計使用。" },
        { title: "審計", desc: "由獨立會計師進行法定審計並出具審計報告。" },
        { title: "稅務申報", desc: "向稅務局提交利得稅計算及 PTR 連同附表。" },
      ],
      faqs: [
        { q: "新公司何時收到首份利得稅報稅表？", a: "稅務局通常在公司成立 18 個月後發出首份報稅表，其後每年 4 月份發出。" },
        { q: "公司沒有營運可以做零申報嗎？", a: "不可以。根據稅務局現時做法，利得稅報稅表必須連同經審計財務報表一併提交，即使屬於不活動公司亦然（除非已正式申請不活動公司狀態）。" },
        { q: "利得稅稅率是多少？", a: "在兩級制下，法團首 200 萬港元應評稅利潤稅率為 8.25%，餘額為 16.5%。每集團只可有一間公司享用較低稅率。" },
        { q: "可否申請離岸收入豁免？", a: "香港採用地域來源原則。源自香港境外的收入可申請豁免，但須有充分文件支持並獲稅務局審批。" },
      ],
      subServices: [
        { slug: "bookkeeping", title: "簿記服務", desc: "月度或年度入帳及管理報表。" },
        { slug: "audit-coordination", title: "審計協調", desc: "準備審計底稿並對接獨立會計師。" },
        { slug: "profits-tax-return", title: "利得稅報稅表", desc: "稅務計算及向稅務局提交 PTR。" },
      ],
      cta: { title: "需要乾淨的審計及準時的 PTR？", sub: "根據單據量及營業額提供固定收費報價。", btn: "索取報價" },
    },
    "virtual-office": {
      slug: "virtual-office",
      title: "虛擬辦公室",
      metaTitle: "虛擬辦公室、註冊地址及代收信件服務｜卓譽商業服務有限公司",
      metaDescription: "尖沙咀甲級寫字樓虛擬辦公室：註冊地址、信件處理及電話接聽服務。",
      hero: {
        eyebrow: "虛擬辦公室",
        title: "尊貴的香港商業地址，無需承擔租金",
        sub: "以我們尖沙咀地址作為您的註冊辦事處，配以可靠的信件處理及雙語電話接聽。",
      },
      overview: [
        "依《公司條例》規定，每間香港有限公司均須設有香港註冊辦事處。我們的虛擬辦公室計劃提供尖沙咀真實商業地址，配以您日常營運所需的服務。",
        "無論您是海外創辦人、遙距運作的中小企，或希望節省辦公室成本的企業，我們的團隊均可專業處理您的信件、電話及法定水牌要求。",
      ],
      features: [
        { title: "尖沙咀地址", desc: "以真實甲級商業地址作為註冊及商業地址。" },
        { title: "信件處理", desc: "無限代收信件及包裹，附即時通知及轉寄選項。" },
        { title: "電話接聽", desc: "雙語接待員以貴公司名義接聽電話並轉駁或留言。" },
        { title: "法定水牌", desc: "於辦公室展示公司名稱以符合公司註冊處要求。" },
      ],
      process: [
        { title: "選擇計劃", desc: "選擇所需的地址、信件及電話服務組合。" },
        { title: "登記程序", desc: "完成 KYC 並按需要更新公司註冊地址。" },
        { title: "啟用服務", desc: "信件及電話服務即時啟動，您可透過電郵或客戶平台查收通知。" },
        { title: "持續支援", desc: "按要求提供轉寄、掃描及會議室預訂。" },
      ],
      faqs: [
        { q: "虛擬辦公室地址會獲公司註冊處接受嗎？", a: "會。只要該地址為真實的香港地點，並展示公司名稱，便符合註冊辦事處要求。" },
        { q: "銀行會否接受虛擬辦公室地址？", a: "大多數香港銀行接受虛擬辦公室作為註冊地址，但可能會詢問實際營運地點。我們可就應如何披露提供建議。" },
        { q: "信件如何處理？", a: "信件入帳後您會收到通知，可選擇親身領取、要求掃描為 PDF 或安排轉寄。" },
        { q: "可以取消服務嗎？", a: "視乎所選計劃條款。我們會協助辦理向公司註冊處及稅務局更新地址的程序。" },
      ],
      subServices: [
        { slug: "registered-address", title: "註冊地址", desc: "以我們的香港地址作為公司註冊地址。" },
        { slug: "mail-forwarding", title: "信件轉寄", desc: "代收信件包裹、掃描及轉寄。" },
        { slug: "call-answering", title: "電話接聽", desc: "獨立號碼及雙語接待員。" },
      ],
      cta: { title: "立即需要香港商業地址？", sub: "最快一個工作天內啟用虛擬辦公室計劃。", btn: "立即申請" },
    },
  },
  subServices: {
    "hk-incorporation": {
      slug: "hk-incorporation", parent: "incorporation",
      title: "成立香港有限公司",
      metaTitle: "成立香港有限公司｜卓譽商業服務有限公司",
      metaDescription: "全套成立香港私人有限公司服務 — 名稱查冊、CI、BR、法定登記冊及銀行開戶文件包。",
      hero: { eyebrow: "公司成立 · 香港公司", title: "成立您的香港有限公司", sub: "由經驗豐富的顧問全程跟進，一般於數個工作天內完成。" },
      overview: [
        "香港私人有限公司是於本地或經香港營商最常用的法律形式：股東責任有限、國際認可、稅率簡單低廉。",
        "我們由名稱查冊到交付法定登記冊及銀行開戶文件，全程跟進。",
      ],
      included: [
        "向公司註冊處進行公司名稱查冊",
        "申請公司註冊證書（CI），已包括政府費用",
        "申請一年期商業登記證（BR），已包括政府費用",
        "公司章程 5 本及公司印章／圓印",
        "法定登記冊（成員、董事、秘書、SCR）",
        "最多 5 位自然人股東入冊",
        "銀行開戶所需文件包",
      ],
      audience: [
        "在香港新設立業務的創辦人",
        "在香港設立據點的海外投資者",
        "現有集團設立香港子公司",
        "由獨資轉為有限公司的專業人士",
      ],
      process: [
        { title: "諮詢", desc: "確認公司架構、股東、董事及業務範圍。" },
        { title: "名稱查冊", desc: "向公司註冊處核對名稱可用性。" },
        { title: "文件準備", desc: "準備成立表格及章程供簽署。" },
        { title: "遞交註冊", desc: "向公司註冊處及稅務局遞交。" },
        { title: "交付文件", desc: "交付 CI、BR、登記冊、印章及銀行文件包。" },
      ],
      notes: [
        { q: "成立需時多久？", a: "在收到簽署文件及 KYC 資料後，一般於數個工作天內完成。" },
        { q: "需要親身來香港嗎？", a: "不需要。整個流程可在備妥 KYC 文件後遙距完成。" },
        { q: "收費", a: "最終收費視乎所選計劃。本頁所列價格為佔位資料，待人工確認。" },
      ],
      cta: { title: "準備成立公司？", sub: "立即取得度身報價。", btn: "索取報價" },
    },
    "offshore-company": {
      slug: "offshore-company", parent: "incorporation",
      title: "成立離岸公司",
      metaTitle: "離岸公司註冊（BVI、Cayman、Samoa）｜卓譽",
      metaDescription: "於 BVI、Cayman、Samoa 等司法管轄區成立離岸公司，提供完整年度合規支援。",
      hero: { eyebrow: "公司成立 · 離岸", title: "成立離岸公司", sub: "BVI、Cayman、Samoa 及其他成熟離岸司法管轄區，附年度維護服務。" },
      overview: [
        "離岸公司常用於控股架構、國際貿易及資產規劃。各司法管轄區對董事、股東、註冊代理及經濟實質要求各有不同。",
        "我們協助您選擇合適的司法管轄區、完成成立並維持公司處於良好狀態。",
      ],
      included: [
        "司法管轄區建議及架構規劃",
        "名稱保留及註冊申報",
        "註冊代理及註冊辦事處",
        "標準公司文件（章程大綱及細則、註冊證書）",
        "首年政府及代理費用",
        "按要求辦理海牙認證／核證副本（可能另收費用）",
      ],
      audience: [
        "持有國際資產的控股公司",
        "跨境貿易主體",
        "知識產權架構持有人",
        "家族財富及傳承規劃",
      ],
      process: [
        { title: "司法管轄區評估", desc: "比較成本、實質要求及聲譽。" },
        { title: "KYC", desc: "收集身份、地址及資金來源文件。" },
        { title: "註冊", desc: "向所選司法管轄區註冊處遞交。" },
        { title: "文件包", desc: "簽發正本及核證副本以供後續使用。" },
      ],
      notes: [
        { q: "離岸公司仍須提交年度申報嗎？", a: "大多數司法管轄區須繳交年度政府費及註冊代理費，部分現時亦要求經濟實質申報。" },
        { q: "可以為離岸公司開立香港銀行戶口嗎？", a: "可以，但會接受更嚴格的盡職審查。我們會就文件及實際選擇提供建議。" },
        { q: "收費", a: "視乎司法管轄區及架構而定。本頁所列價格為佔位資料，待人工確認。" },
      ],
      cta: { title: "考慮離岸架構？", sub: "獲取司法管轄區建議及固定報價。", btn: "聯絡顧問" },
    },
    "trademark": {
      slug: "trademark", parent: "incorporation",
      title: "商標註冊",
      metaTitle: "香港及中國商標註冊｜卓譽",
      metaDescription: "於香港、中國內地及主要海外市場辦理商標查冊及註冊。",
      hero: { eyebrow: "公司成立 · 商標", title: "保護您的品牌", sub: "於香港、中國內地及海外辦理商標查冊、分類及註冊。" },
      overview: [
        "註冊商標是品牌保護的基礎。沒有註冊，要對抗仿冒會困難且代價高昂。",
        "我們協調查冊、Nice 分類、申請及後續續期，覆蓋多個司法管轄區。",
      ],
      included: [
        "申請前可用性查冊",
        "Nice 分類建議",
        "申請文件起草及遞交",
        "回應審查意見的協調",
        "簽發註冊證書及限期管理",
      ],
      audience: [
        "推出新產品或服務的品牌",
        "拓展中國內地或亞太市場的企業",
        "需要將知識產權納入估值的創辦人",
      ],
      process: [
        { title: "查冊", desc: "識別衝突，必要時調整商標或商品說明。" },
        { title: "申請", desc: "於指定司法管轄區遞交。" },
        { title: "審查", desc: "回應審查意見或反對。" },
        { title: "註冊", desc: "獲頒證書，我們追蹤續期。" },
      ],
      notes: [
        { q: "註冊需時多久？", a: "香港：如無反對，一般 6–12 個月。中國內地：一般 12–18 個月。" },
        { q: "只在香港銷售也要在中國註冊嗎？", a: "通常建議註冊，因中國採用先申請原則，存在搶注風險。" },
        { q: "收費", a: "視乎司法管轄區及類別數量。本頁所列為佔位資料，待人工確認。" },
      ],
      cta: { title: "準備保護品牌？", sub: "由免費初步查冊開始。", btn: "索取查冊" },
    },
    "named-secretary": {
      slug: "named-secretary", parent: "secretary",
      title: "掛名公司秘書",
      metaTitle: "香港掛名公司秘書服務｜卓譽",
      metaDescription: "卓譽依《公司條例》出任您的掛名公司秘書，並包含年度法定申報。",
      hero: { eyebrow: "公司秘書 · 掛名", title: "委任卓譽為您的公司秘書", sub: "符合《公司條例》第 474 條要求，由可靠的本地秘書全程跟進。" },
      overview: ["每間香港有限公司均須委任公司秘書。我們出任秘書、準備法定文件並維持公司良好狀態。"],
      included: [
        "於服務期內擔任掛名公司秘書",
        "維護法定登記冊（成員、董事、秘書、SCR）",
        "準備並提交周年申報表（NAR1）",
        "代辦商業登記證續期",
        "提示即將到期的法定限期",
      ],
      audience: [
        "新成立公司",
        "由其他服務商轉換的公司",
        "海外股東持有的香港公司",
      ],
      process: [
        { title: "委任", desc: "接受委任並通知公司註冊處。" },
        { title: "紀錄遷移", desc: "審視並更新現有登記冊及紀錄。" },
        { title: "年度跟進", desc: "追蹤限期並按時準備法定文件。" },
      ],
      notes: [
        { q: "唯一董事可同時擔任秘書嗎？", a: "不可以。《公司條例》第 475 條禁止私人公司唯一董事兼任秘書。" },
        { q: "非香港居民可擔任秘書嗎？", a: "公司秘書（個人）須通常居於香港，或為在香港註冊的法人團體。" },
        { q: "收費", a: "年費視計劃而定。本頁所列為佔位資料，待人工確認。" },
      ],
      cta: { title: "需要可靠的秘書？", sub: "無縫轉用卓譽。", btn: "索取報價" },
    },
    "annual-return-nar1": {
      slug: "annual-return-nar1", parent: "secretary",
      title: "周年申報表（NAR1）",
      metaTitle: "周年申報表 NAR1 提交服務｜卓譽",
      metaDescription: "為私人及公眾公司按時準備並提交香港周年申報表（NAR1）。",
      hero: { eyebrow: "公司秘書 · NAR1", title: "周年申報表 NAR1 準時提交", sub: "避免遲交招致遞增的政府罰款。" },
      overview: ["私人公司須於成立周年日後 42 日內提交 NAR1。逾期將招致遞增的政府費用，並可能被檢控。"],
      included: [
        "起草 NAR1 並更新最新資料",
        "向董事及股東確認資料",
        "向公司註冊處提交",
        "代繳年度登記費（按成本向客戶收回）",
      ],
      audience: ["香港私人有限公司", "需補交過往申報的公司"],
      process: [
        { title: "提示", desc: "於提交期前提示客戶。" },
        { title: "確認", desc: "確認資料後起草 NAR1。" },
        { title: "提交", desc: "於 42 日內向公司註冊處提交。" },
      ],
      notes: [
        { q: "遲交罰款是？", a: "登記費用按遲交時間遞增（超過 42 日但不多於 3 個月、3–6 個月、6–9 個月、超過 9 個月），持續違規可能被檢控。" },
        { q: "收費", a: "其他位置所示服務費為佔位資料，待人工確認。政府費用按成本收取。" },
      ],
      cta: { title: "別錯過 NAR1 限期", sub: "交給我們，無需自行追蹤。", btn: "代辦 NAR1" },
    },
    "change-of-directors": {
      slug: "change-of-directors", parent: "secretary",
      title: "更改董事及公司資料",
      metaTitle: "更改董事及法定申報｜卓譽",
      metaDescription: "向公司註冊處申報董事委任、辭任及資料更改。",
      hero: { eyebrow: "公司秘書 · 變更", title: "妥善申報董事及公司變更", sub: "委任、辭任、地址及資料變更，按法定限期內完成。" },
      overview: ["董事、秘書、註冊地址或公司名稱的變更，必須於指定限期內向公司註冊處申報。我們起草決議及法定表格並負責提交。"],
      included: [
        "起草董事會決議或書面成員決議",
        "準備相關法定表格（如 ND2A、NR1、NNC2）",
        "更新法定登記冊",
        "向公司註冊處提交",
      ],
      audience: ["新增或退任董事的公司", "搬遷註冊地址的公司", "進行品牌更新或股本重組的公司"],
      process: [
        { title: "指示", desc: "確認變更並提供支持文件。" },
        { title: "起草", desc: "準備決議及法定表格。" },
        { title: "簽署及提交", desc: "簽署文件並向公司註冊處提交。" },
      ],
      notes: [
        { q: "限期是？", a: "大部分變更須於 15 日內申報。" },
        { q: "收費", a: "視變更類別而定。所示為佔位資料，政府費用按成本收取。" },
      ],
      cta: { title: "有變更需申報？", sub: "提供詳情，我們代辦。", btn: "開始申報" },
    },
    "bookkeeping": {
      slug: "bookkeeping", parent: "accounting",
      title: "簿記服務",
      metaTitle: "香港中小企簿記服務｜卓譽",
      metaDescription: "為香港中小企及海外客戶提供月度、季度或年度簿記及管理報表。",
      hero: { eyebrow: "會計 · 簿記", title: "帳目清晰，便於審計及決策", sub: "外包簿記，附清晰報表 — 月度、季度或年度。" },
      overview: ["備存妥善會計紀錄是香港公司的法定要求，亦是審計及報稅的基礎。我們的團隊維護您的帳目並提供管理報表。"],
      included: [
        "總帳維護",
        "銀行對帳",
        "損益表、資產負債表及試算表",
        "應收及應付帳明細",
        "單據存檔及數碼化",
      ],
      audience: ["沒有內部財務團隊的中小企", "海外股東持有的香港公司", "準備審計或融資的創辦人"],
      process: [
        { title: "範圍", desc: "確認交易量、頻率及科目表。" },
        { title: "文件流程", desc: "建立安全的單據遞交方式。" },
        { title: "入帳", desc: "入帳並對帳。" },
        { title: "報表", desc: "按時交付管理報表。" },
      ],
      notes: [
        { q: "使用甚麼軟件？", a: "我們使用主流會計軟件，亦可按要求配合您現有系統。" },
        { q: "收費", a: "視交易量而定。所示為佔位資料，待人工確認。" },
      ],
      cta: { title: "外包您的簿記", sub: "依交易量提供固定報價。", btn: "索取報價" },
    },
    "audit-coordination": {
      slug: "audit-coordination", parent: "accounting",
      title: "審計協調",
      metaTitle: "香港公司法定審計協調｜卓譽",
      metaDescription: "為香港公司準備審計底稿並對接執業會計師。",
      hero: { eyebrow: "會計 · 審計", title: "審計就緒的帳目，全程代辦", sub: "我們準備審計底稿並與獨立執業會計師對接。" },
      overview: ["每間香港有限公司均須由獨立執業會計師簽發經審計財務報表。我們準備工作底稿並與審計師溝通，確保流程順暢。"],
      included: [
        "審計底稿準備",
        "試算表、總帳及對帳檔",
        "與審計師對接並回應查詢",
        "協調董事簽署",
        "完成最終經審計財務報表以供報稅",
      ],
      audience: ["首次審計的公司", "更換審計師或服務商的公司", "需合併多間香港子公司的集團"],
      process: [
        { title: "準備", desc: "整理審計底稿。" },
        { title: "現場審計", desc: "審計師審查，我們回應查詢。" },
        { title: "簽署", desc: "董事簽署財務報表及審計報告。" },
      ],
      notes: [
        { q: "不活動公司也要審計嗎？", a: "一般要，除非已正式申請不活動公司狀態。" },
        { q: "收費", a: "審計費視乎規模及複雜程度。所示為佔位資料，待人工確認。" },
      ],
      cta: { title: "是時候開始審計？", sub: "獲取清晰範圍及固定收費。", btn: "開始審計" },
    },
    "profits-tax-return": {
      slug: "profits-tax-return", parent: "accounting",
      title: "利得稅報稅表（PTR）",
      metaTitle: "香港利得稅報稅表（PTR）｜卓譽",
      metaDescription: "向稅務局提交利得稅計算及 PTR，並包括延期申請。",
      hero: { eyebrow: "會計 · PTR", title: "利得稅報稅表準確按時提交", sub: "稅務計算、PTR 提交及延期管理。" },
      overview: ["利得稅報稅表須連同經審計財務報表及稅務計算一併提交稅務局。香港採用兩級制，首 200 萬港元利潤稅率為 8.25%，餘額為 16.5%。"],
      included: [
        "依審計報表編製利得稅計算",
        "準備並提交 PTR 及附表",
        "適用時管理整批延期",
        "回應稅務局一般查詢",
      ],
      audience: ["活躍及不活動香港有限公司", "考慮申請離岸利潤豁免的公司"],
      process: [
        { title: "收到 PTR", desc: "確認提交期限及任何延期。" },
        { title: "計算稅務", desc: "依審計報表編製稅務計算。" },
        { title: "提交", desc: "向稅務局提交 PTR 及計算。" },
      ],
      notes: [
        { q: "首份 PTR 何時發出？", a: "一般於成立 18 個月後發出，其後每年 4 月發出。" },
        { q: "如不提交會怎樣？", a: "最高可被罰 10,000 元並可加徵相當於少徵稅款 3 倍的罰款，持續違規可能被檢控。" },
        { q: "收費", a: "視複雜程度而定。所示為佔位資料，待人工確認。" },
      ],
      cta: { title: "PTR 即將到期？", sub: "由我們處理計算及提交。", btn: "索取報價" },
    },
    "registered-address": {
      slug: "registered-address", parent: "virtual-office",
      title: "註冊地址",
      metaTitle: "香港公司註冊辦事處地址｜卓譽",
      metaDescription: "以真實香港商業地址作為註冊辦事處，符合法定水牌要求。",
      hero: { eyebrow: "虛擬辦公室 · 地址", title: "真實的香港註冊辦事處地址", sub: "法定水牌、信件接收及專業形象。" },
      overview: ["每間香港有限公司均須於香港設有註冊辦事處以便送達法定通知。我們的地址符合此要求並提升專業形象。"],
      included: [
        "以我們的尖沙咀地址作為註冊及商業地址",
        "依公司註冊處要求展示公司名稱",
        "接收一般信件及通知並通知客戶",
      ],
      audience: ["遙距成立公司的海外創辦人", "希望保持住址私隱的公司", "遙距運作的中小企"],
      process: [
        { title: "申請", desc: "選擇計劃並完成 KYC。" },
        { title: "啟用", desc: "地址即時啟用，按需要更新公司註冊處資料。" },
        { title: "運作", desc: "依您指示處理信件及通知。" },
      ],
      notes: [
        { q: "公司註冊處會接受嗎？", a: "會。只要正確展示公司名稱並可送達通知 — 兩者我們均已涵蓋。" },
        { q: "收費", a: "其他位置所示計劃費為佔位資料，待人工確認。" },
      ],
      cta: { title: "需要香港地址？", sub: "最快一個工作天啟用。", btn: "立即申請" },
    },
    "mail-forwarding": {
      slug: "mail-forwarding", parent: "virtual-office",
      title: "信件轉寄及掃描",
      metaTitle: "香港公司信件轉寄及掃描服務｜卓譽",
      metaDescription: "代收信件包裹、掃描為 PDF 及轉寄到您指定地址。",
      hero: { eyebrow: "虛擬辦公室 · 信件", title: "再不會錯過重要信件", sub: "代收信件包裹、即時通知、掃描及轉寄。" },
      overview: ["我們作為您業務通訊及包裹的接收點。您可選擇親收、掃描或轉寄，每次有信件到達我們均會通知。"],
      included: [
        "代收以您公司名義寄送的信件及包裹",
        "電郵或客戶平台通知",
        "按要求掃描為 PDF",
        "本地或國際快遞轉寄（郵費按成本收取）",
      ],
      audience: ["駐外董事及股東", "在香港沒有實體辦公室的公司", "經常出差的創辦人"],
      process: [
        { title: "接收", desc: "信件入帳並紀錄。" },
        { title: "通知", desc: "您收到含寄件人資料的通知。" },
        { title: "處理", desc: "親收、掃描或轉寄，由您決定。" },
      ],
      notes: [
        { q: "可以轉寄海外嗎？", a: "可以。國際快遞按成本收取。" },
        { q: "收費", a: "計劃費及轉寄費為佔位資料，待人工確認。" },
      ],
      cta: { title: "需要專業處理信件？", sub: "與註冊地址服務組合使用。", btn: "立即申請" },
    },
    "call-answering": {
      slug: "call-answering", parent: "virtual-office",
      title: "電話接聽服務",
      metaTitle: "香港公司雙語電話接聽服務｜卓譽",
      metaDescription: "獨立電話號碼配雙語接待員，以您的公司名義接聽電話。",
      hero: { eyebrow: "虛擬辦公室 · 電話", title: "專業雙語電話接聽", sub: "獨立號碼、貴公司名義及訓練有素的接待員。" },
      overview: ["毋須聘請接待員亦能展現專業形象。我們的團隊以您的公司名義接聽電話並轉駁至您的團隊或代為留言。"],
      included: [
        "獨立直線電話號碼",
        "以貴公司名義雙語接聽",
        "即時轉駁至指定號碼",
        "電郵或客戶平台留言通知",
      ],
      audience: ["重視第一印象的創辦人", "沒有總機的分散式團隊", "服務中英客戶的公司"],
      process: [
        { title: "設定", desc: "分配號碼並設定問候語及轉駁。" },
        { title: "運作", desc: "辦公時間內接聽，非辦公時間留言通知。" },
      ],
      notes: [
        { q: "覆蓋甚麼時間？", a: "標準香港辦公時間，可按要求延長。" },
        { q: "收費", a: "其他位置所示為佔位資料，待人工確認。" },
      ],
      cta: { title: "讓您聽起來更專業", sub: "數天內啟用獨立接聽線。", btn: "立即申請" },
    },
  },
};

// ============================================================
// Simplified Chinese — adapted from TC with simplified characters
// ============================================================
const sc: ServiceContent = {
  ui: {
    breadcrumb_home: "首页",
    breadcrumb_services: "服务",
    placeholder_badge: "收费为占位资料，待人工确认",
    overview: "服务概览",
    features: "服务特色",
    process: "服务流程",
    faq: "常见问题及注意事项",
    included: "服务包括",
    audience: "适用对象",
    related: "相关服务",
    explore_subservices: "探索子服务",
    talk_to_us: "联络顾问",
  },
  categories: {
    incorporation: {
      slug: "incorporation",
      title: "公司成立",
      metaTitle: "香港公司成立服务｜卓誉商业服务有限公司",
      metaDescription: "成立香港有限公司、离岸公司及办理商标注册，由经验丰富的专业团队全程跟进。",
      hero: {
        eyebrow: "公司成立",
        title: "在香港信心十足地展开业务",
        sub: "由本地有限公司、离岸公司至商标注册，提供一站式公司成立及合规支持。",
      },
      overview: [
        "香港拥有全球最高效的公司成立制度之一，但合规要求仍需谨慎处理。卓誉协助创办人、中小企及海外投资者顺利完成香港有限公司的整个成立程序。",
        "由公司名称查册、申请公司注册证书（CI）及商业登记证（BR），到分配股份及准备银行开户文件，我们确保您的公司合规启动。",
      ],
      features: [
        { title: "本地及海外创办人", desc: "为香港居民及海外客户（包括远程申请）提供服务。" },
        { title: "银行开户支持", desc: "协助准备文件并引荐本地及虚拟银行伙伴。" },
        { title: "全面合规", desc: "首日即备妥法定登记册、公司印章及章程文件。" },
        { title: "多语团队", desc: "粤语、普通话及英语团队全程跟进。" },
      ],
      process: [
        { title: "初步咨询", desc: "确认公司架构、股东、董事及业务范围。" },
        { title: "名称查册", desc: "向公司注册处查核名称可用性。" },
        { title: "文件准备", desc: "准备成立表格、章程及股东文件供签署。" },
        { title: "递交注册", desc: "向公司注册处及税务局递交申请。" },
        { title: "文件交付", desc: "交付 CI、BR、登记册、印章及银行开户文件包。" },
      ],
      faqs: [
        { q: "成立香港有限公司需时多久？", a: "在收到完整签署文件及 KYC 资料后，一般可于数个工作天内完成成立。" },
        { q: "股东或董事必须在香港吗？", a: "不需要。香港有限公司可由海外个人或公司股东及董事组成，但须委任香港居民／法人为公司秘书，并设有香港注册地址。" },
        { q: "最低股本是多少？", a: "法例并无最低股本要求，常见做法为港币 10,000 元分为 10,000 股。" },
        { q: "公司是否每年都要报税及审计？", a: "是。所有香港有限公司无论是否经营，均须每年提交周年申报表（NAR1）及经审计财务报表。" },
      ],
      subServices: [
        { slug: "hk-incorporation", title: "香港有限公司", desc: "全套香港私人有限公司成立服务。" },
        { slug: "offshore-company", title: "离岸公司", desc: "BVI、Cayman、Samoa 等离岸公司注册。" },
        { slug: "trademark", title: "商标注册", desc: "于香港、中国内地及海外保护您的品牌。" },
      ],
      cta: { title: "准备成立公司？", sub: "与资深顾问对话，获取度身报价。", btn: "预约免费咨询" },
    },
    secretary: {
      slug: "secretary",
      title: "公司秘书",
      metaTitle: "香港公司秘书服务｜卓誉商业服务有限公司",
      metaDescription: "提供挂名公司秘书、周年申报表（NAR1）及法定变更服务，全面符合《公司条例》要求。",
      hero: {
        eyebrow: "公司秘书",
        title: "轻松符合《公司条例》要求",
        sub: "挂名公司秘书、周年申报、登记册维护及法定变更，一个年费全包。",
      },
      overview: [
        "根据《公司条例》第 474 条，香港每间有限公司均须委任一名通常居于香港的公司秘书（或在香港注册的法人团体）。",
        "卓誉出任您的挂名公司秘书，准备并提交法定文件，维护法定登记册，全年确保您的公司处于良好状态。",
      ],
      features: [
        { title: "挂名秘书", desc: "依法担任您的公司秘书。" },
        { title: "周年申报（NAR1）", desc: "按时准备并向公司注册处递交。" },
        { title: "法定登记册", desc: "维护成员、董事、秘书及重要控制人登记册。" },
        { title: "变更申报", desc: "处理董事变更、地址变更、改名及股份转让。" },
      ],
      process: [
        { title: "聘任", desc: "审阅现有纪录并接受公司秘书委任。" },
        { title: "纪录整理", desc: "检视并更新法定登记册及过往申报。" },
        { title: "年度跟进", desc: "追踪申报限期，准备 NAR1、商业登记续期及会议记录。" },
        { title: "即时申报", desc: "董事、地址或股本变更于法定限期内申报。" },
      ],
      faqs: [
        { q: "周年申报表（NAR1）的提交期限？", a: "私人公司须于成立周年日后 42 日内提交，逾期将被收取递增的政府罚款。" },
        { q: "唯一董事可否同时担任公司秘书？", a: "不可以。《公司条例》第 475 条禁止私人公司的唯一董事兼任公司秘书。" },
        { q: "重要控制人登记册（SCR）是什么？", a: "自 2018 年 3 月起，所有香港公司须备存 SCR，记录实益拥有人及指定代表，供执法人员查阅。" },
        { q: "若错过申报限期会怎样？", a: "周年申报迟交会被收取递增登记费用，持续违规可能被检控。我们会代您追踪所有限期。" },
      ],
      subServices: [
        { slug: "named-secretary", title: "挂名公司秘书", desc: "依《公司条例》出任您的法定公司秘书。" },
        { slug: "annual-return-nar1", title: "周年申报表 NAR1", desc: "准时准备并提交周年申报表。" },
        { slug: "change-of-directors", title: "变更董事", desc: "董事委任、辞任及资料更改。" },
      ],
      cta: { title: "寻找可靠的公司秘书？", sub: "转用卓誉，享受透明收费及主动限期管理。", btn: "索取报价" },
    },
    accounting: {
      slug: "accounting",
      title: "会计及税务",
      metaTitle: "会计、审计协调及利得税服务｜卓誉商业服务有限公司",
      metaDescription: "为香港中小企及海外客户提供簿记、审计协调及利得税报税表（PTR）服务。",
      hero: {
        eyebrow: "会计及税务",
        title: "账目清晰、审计就绪、按时报税",
        sub: "由月度簿记至审计协调及报税，提供实用的会计支持。",
      },
      overview: [
        "每间香港有限公司均须备存妥善会计纪录、制备经审计财务报表并每年提交利得税报税表。即使属于不活动公司亦须遵从。",
        "我们的财务团队负责入账、与香港执业会计师协调法定审计，并向税务局递交利得税报税表，确保按时完成。",
      ],
      features: [
        { title: "簿记理账", desc: "月度／季度／年度入账，附管理报表。" },
        { title: "审计协调", desc: "我们准备审计工作底稿，并代您与独立会计师事务所对接。" },
        { title: "利得税报税表", desc: "税务计算及 PTR 提交，并按需要申请延期。" },
        { title: "离岸收入申请", desc: "协助准备离岸利润豁免征税的申报文件。" },
      ],
      process: [
        { title: "收集文件", desc: "确认财政年度、范围及文件清单。" },
        { title: "簿记入账", desc: "入账并对银行月结单进行核对。" },
        { title: "财务报表", desc: "准备损益表、资产负债表及试算表供审计使用。" },
        { title: "审计", desc: "由独立会计师进行法定审计并出具审计报告。" },
        { title: "税务申报", desc: "向税务局提交利得税计算及 PTR 连同附表。" },
      ],
      faqs: [
        { q: "新公司何时收到首份利得税报税表？", a: "税务局通常在公司成立 18 个月后发出首份报税表，其后每年 4 月份发出。" },
        { q: "公司没有营运可以做零申报吗？", a: "不可以。根据税务局现时做法，利得税报税表必须连同经审计财务报表一并提交，即使属于不活动公司亦然。" },
        { q: "利得税税率是多少？", a: "在两级制下，法团首 200 万港元应评税利润税率为 8.25%，余额为 16.5%。每集团只可有一间公司享用较低税率。" },
        { q: "可否申请离岸收入豁免？", a: "香港采用地域来源原则。源自香港境外的收入可申请豁免，但须有充分文件支持并获税务局审批。" },
      ],
      subServices: [
        { slug: "bookkeeping", title: "簿记服务", desc: "月度或年度入账及管理报表。" },
        { slug: "audit-coordination", title: "审计协调", desc: "准备审计底稿并对接独立会计师。" },
        { slug: "profits-tax-return", title: "利得税报税表", desc: "税务计算及向税务局提交 PTR。" },
      ],
      cta: { title: "需要干净的审计及准时的 PTR？", sub: "根据单据量及营业额提供固定收费报价。", btn: "索取报价" },
    },
    "virtual-office": {
      slug: "virtual-office",
      title: "虚拟办公室",
      metaTitle: "虚拟办公室、注册地址及代收信件服务｜卓誉商业服务有限公司",
      metaDescription: "尖沙咀甲级写字楼虚拟办公室：注册地址、信件处理及电话接听服务。",
      hero: {
        eyebrow: "虚拟办公室",
        title: "尊贵的香港商业地址，无需承担租金",
        sub: "以我们尖沙咀地址作为您的注册办事处，配以可靠的信件处理及双语电话接听。",
      },
      overview: [
        "依《公司条例》规定，每间香港有限公司均须设有香港注册办事处。我们的虚拟办公室计划提供尖沙咀真实商业地址，配以您日常营运所需的服务。",
        "无论您是海外创办人、远程运作的中小企，或希望节省办公室成本的企业，我们的团队均可专业处理您的信件、电话及法定水牌要求。",
      ],
      features: [
        { title: "尖沙咀地址", desc: "以真实甲级商业地址作为注册及商业地址。" },
        { title: "信件处理", desc: "无限代收信件及包裹，附即时通知及转寄选项。" },
        { title: "电话接听", desc: "双语接待员以贵公司名义接听电话并转驳或留言。" },
        { title: "法定水牌", desc: "于办公室展示公司名称以符合公司注册处要求。" },
      ],
      process: [
        { title: "选择计划", desc: "选择所需的地址、信件及电话服务组合。" },
        { title: "登记程序", desc: "完成 KYC 并按需要更新公司注册地址。" },
        { title: "启用服务", desc: "信件及电话服务即时启动，您可透过电邮或客户平台查收通知。" },
        { title: "持续支持", desc: "按要求提供转寄、扫描及会议室预订。" },
      ],
      faqs: [
        { q: "虚拟办公室地址会获公司注册处接受吗？", a: "会。只要该地址为真实的香港地点，并展示公司名称，便符合注册办事处要求。" },
        { q: "银行会否接受虚拟办公室地址？", a: "大多数香港银行接受虚拟办公室作为注册地址，但可能会询问实际营运地点。" },
        { q: "信件如何处理？", a: "信件入账后您会收到通知，可选择亲身领取、要求扫描为 PDF 或安排转寄。" },
        { q: "可以取消服务吗？", a: "视乎所选计划条款。我们会协助办理向公司注册处及税务局更新地址的程序。" },
      ],
      subServices: [
        { slug: "registered-address", title: "注册地址", desc: "以我们的香港地址作为公司注册地址。" },
        { slug: "mail-forwarding", title: "信件转寄", desc: "代收信件包裹、扫描及转寄。" },
        { slug: "call-answering", title: "电话接听", desc: "独立号码及双语接待员。" },
      ],
      cta: { title: "立即需要香港商业地址？", sub: "最快一个工作天内启用虚拟办公室计划。", btn: "立即申请" },
    },
  },
  subServices: {
    "hk-incorporation": {
      slug: "hk-incorporation", parent: "incorporation",
      title: "成立香港有限公司",
      metaTitle: "成立香港有限公司｜卓誉商业服务有限公司",
      metaDescription: "全套成立香港私人有限公司服务 — 名称查册、CI、BR、法定登记册及银行开户文件包。",
      hero: { eyebrow: "公司成立 · 香港公司", title: "成立您的香港有限公司", sub: "由经验丰富的顾问全程跟进，一般于数个工作天内完成。" },
      overview: [
        "香港私人有限公司是于本地或经香港营商最常用的法律形式：股东责任有限、国际认可、税率简单低廉。",
        "我们由名称查册到交付法定登记册及银行开户文件，全程跟进。",
      ],
      included: [
        "向公司注册处进行公司名称查册",
        "申请公司注册证书（CI），已包括政府费用",
        "申请一年期商业登记证（BR），已包括政府费用",
        "公司章程 5 本及公司印章／圆印",
        "法定登记册（成员、董事、秘书、SCR）",
        "最多 5 位自然人股东入册",
        "银行开户所需文件包",
      ],
      audience: ["新设立业务的创办人", "在香港设立据点的海外投资者", "现有集团设立香港子公司", "由独资转为有限公司的专业人士"],
      process: [
        { title: "咨询", desc: "确认公司架构、股东、董事及业务范围。" },
        { title: "名称查册", desc: "向公司注册处核对名称可用性。" },
        { title: "文件准备", desc: "准备成立表格及章程供签署。" },
        { title: "递交注册", desc: "向公司注册处及税务局递交。" },
        { title: "交付文件", desc: "交付 CI、BR、登记册、印章及银行文件包。" },
      ],
      notes: [
        { q: "成立需时多久？", a: "在收到签署文件及 KYC 资料后，一般于数个工作天内完成。" },
        { q: "需要亲身来香港吗？", a: "不需要。整个流程可在备妥 KYC 文件后远程完成。" },
        { q: "收费", a: "最终收费视乎所选计划。本页所列价格为占位资料，待人工确认。" },
      ],
      cta: { title: "准备成立公司？", sub: "立即取得度身报价。", btn: "索取报价" },
    },
    "offshore-company": {
      slug: "offshore-company", parent: "incorporation",
      title: "成立离岸公司",
      metaTitle: "离岸公司注册（BVI、Cayman、Samoa）｜卓誉",
      metaDescription: "于 BVI、Cayman、Samoa 等司法管辖区成立离岸公司，提供完整年度合规支持。",
      hero: { eyebrow: "公司成立 · 离岸", title: "成立离岸公司", sub: "BVI、Cayman、Samoa 及其他成熟离岸司法管辖区，附年度维护服务。" },
      overview: [
        "离岸公司常用于控股架构、国际贸易及资产规划。各司法管辖区对董事、股东、注册代理及经济实质要求各有不同。",
        "我们协助您选择合适的司法管辖区、完成成立并维持公司处于良好状态。",
      ],
      included: ["司法管辖区建议及架构规划", "名称保留及注册申报", "注册代理及注册办事处", "标准公司文件", "首年政府及代理费用", "按要求办理海牙认证／核证副本（可能另收费用）"],
      audience: ["持有国际资产的控股公司", "跨境贸易主体", "知识产权架构持有人", "家族财富及传承规划"],
      process: [
        { title: "司法管辖区评估", desc: "比较成本、实质要求及声誉。" },
        { title: "KYC", desc: "收集身份、地址及资金来源文件。" },
        { title: "注册", desc: "向所选司法管辖区注册处递交。" },
        { title: "文件包", desc: "签发正本及核证副本以供后续使用。" },
      ],
      notes: [
        { q: "离岸公司仍须提交年度申报吗？", a: "大多数司法管辖区须缴交年度政府费及注册代理费，部分现时亦要求经济实质申报。" },
        { q: "可以为离岸公司开立香港银行户口吗？", a: "可以，但会接受更严格的尽职审查。我们会就文件及实际选择提供建议。" },
        { q: "收费", a: "视乎司法管辖区及架构而定。本页所列价格为占位资料，待人工确认。" },
      ],
      cta: { title: "考虑离岸架构？", sub: "获取司法管辖区建议及固定报价。", btn: "联络顾问" },
    },
    "trademark": {
      slug: "trademark", parent: "incorporation",
      title: "商标注册",
      metaTitle: "香港及中国商标注册｜卓誉",
      metaDescription: "于香港、中国内地及主要海外市场办理商标查册及注册。",
      hero: { eyebrow: "公司成立 · 商标", title: "保护您的品牌", sub: "于香港、中国内地及海外办理商标查册、分类及注册。" },
      overview: [
        "注册商标是品牌保护的基础。没有注册，要对抗仿冒会困难且代价高昂。",
        "我们协调查册、Nice 分类、申请及后续续期，覆盖多个司法管辖区。",
      ],
      included: ["申请前可用性查册", "Nice 分类建议", "申请文件起草及递交", "回应审查意见的协调", "签发注册证书及限期管理"],
      audience: ["推出新产品或服务的品牌", "拓展中国内地或亚太市场的企业", "需要将知识产权纳入估值的创办人"],
      process: [
        { title: "查册", desc: "识别冲突，必要时调整商标或商品说明。" },
        { title: "申请", desc: "于指定司法管辖区递交。" },
        { title: "审查", desc: "回应审查意见或反对。" },
        { title: "注册", desc: "获颁证书，我们追踪续期。" },
      ],
      notes: [
        { q: "注册需时多久？", a: "香港：如无反对，一般 6–12 个月。中国内地：一般 12–18 个月。" },
        { q: "只在香港销售也要在中国注册吗？", a: "通常建议注册，因中国采用先申请原则，存在抢注风险。" },
        { q: "收费", a: "视乎司法管辖区及类别数量。本页所列为占位资料，待人工确认。" },
      ],
      cta: { title: "准备保护品牌？", sub: "由免费初步查册开始。", btn: "索取查册" },
    },
    "named-secretary": {
      slug: "named-secretary", parent: "secretary",
      title: "挂名公司秘书",
      metaTitle: "香港挂名公司秘书服务｜卓誉",
      metaDescription: "卓誉依《公司条例》出任您的挂名公司秘书，并包含年度法定申报。",
      hero: { eyebrow: "公司秘书 · 挂名", title: "委任卓誉为您的公司秘书", sub: "符合《公司条例》第 474 条要求。" },
      overview: ["每间香港有限公司均须委任公司秘书。我们出任秘书、准备法定文件并维持公司良好状态。"],
      included: ["于服务期内担任挂名公司秘书", "维护法定登记册（成员、董事、秘书、SCR）", "准备并提交周年申报表（NAR1）", "代办商业登记证续期", "提示即将到期的法定限期"],
      audience: ["新成立公司", "由其他服务商转换的公司", "海外股东持有的香港公司"],
      process: [
        { title: "委任", desc: "接受委任并通知公司注册处。" },
        { title: "纪录迁移", desc: "审视并更新现有登记册及纪录。" },
        { title: "年度跟进", desc: "追踪限期并按时准备法定文件。" },
      ],
      notes: [
        { q: "唯一董事可同时担任秘书吗？", a: "不可以。《公司条例》第 475 条禁止私人公司唯一董事兼任秘书。" },
        { q: "非香港居民可担任秘书吗？", a: "公司秘书（个人）须通常居于香港，或为在香港注册的法人团体。" },
        { q: "收费", a: "年费视计划而定。本页所列为占位资料，待人工确认。" },
      ],
      cta: { title: "需要可靠的秘书？", sub: "无缝转用卓誉。", btn: "索取报价" },
    },
    "annual-return-nar1": {
      slug: "annual-return-nar1", parent: "secretary",
      title: "周年申报表（NAR1）",
      metaTitle: "周年申报表 NAR1 提交服务｜卓誉",
      metaDescription: "为私人及公众公司按时准备并提交香港周年申报表（NAR1）。",
      hero: { eyebrow: "公司秘书 · NAR1", title: "周年申报表 NAR1 准时提交", sub: "避免迟交招致递增的政府罚款。" },
      overview: ["私人公司须于成立周年日后 42 日内提交 NAR1。逾期将招致递增的政府费用，并可能被检控。"],
      included: ["起草 NAR1 并更新最新资料", "向董事及股东确认资料", "向公司注册处提交", "代缴年度登记费（按成本向客户收回）"],
      audience: ["香港私人有限公司", "需补交过往申报的公司"],
      process: [
        { title: "提示", desc: "于提交期前提示客户。" },
        { title: "确认", desc: "确认资料后起草 NAR1。" },
        { title: "提交", desc: "于 42 日内向公司注册处提交。" },
      ],
      notes: [
        { q: "迟交罚款是？", a: "登记费用按迟交时间递增，持续违规可能被检控。" },
        { q: "收费", a: "其他位置所示服务费为占位资料，待人工确认。政府费用按成本收取。" },
      ],
      cta: { title: "别错过 NAR1 限期", sub: "交给我们，无需自行追踪。", btn: "代办 NAR1" },
    },
    "change-of-directors": {
      slug: "change-of-directors", parent: "secretary",
      title: "变更董事及公司资料",
      metaTitle: "变更董事及法定申报｜卓誉",
      metaDescription: "向公司注册处申报董事委任、辞任及资料更改。",
      hero: { eyebrow: "公司秘书 · 变更", title: "妥善申报董事及公司变更", sub: "委任、辞任、地址及资料变更，按法定限期内完成。" },
      overview: ["董事、秘书、注册地址或公司名称的变更，必须于指定限期内向公司注册处申报。我们起草决议及法定表格并负责提交。"],
      included: ["起草董事会决议或书面成员决议", "准备相关法定表格（如 ND2A、NR1、NNC2）", "更新法定登记册", "向公司注册处提交"],
      audience: ["新增或退任董事的公司", "搬迁注册地址的公司", "进行品牌更新或股本重组的公司"],
      process: [
        { title: "指示", desc: "确认变更并提供支持文件。" },
        { title: "起草", desc: "准备决议及法定表格。" },
        { title: "签署及提交", desc: "签署文件并向公司注册处提交。" },
      ],
      notes: [
        { q: "限期是？", a: "大部分变更须于 15 日内申报。" },
        { q: "收费", a: "视变更类别而定。所示为占位资料。" },
      ],
      cta: { title: "有变更需申报？", sub: "提供详情，我们代办。", btn: "开始申报" },
    },
    "bookkeeping": {
      slug: "bookkeeping", parent: "accounting",
      title: "簿记服务",
      metaTitle: "香港中小企簿记服务｜卓誉",
      metaDescription: "为香港中小企及海外客户提供月度、季度或年度簿记及管理报表。",
      hero: { eyebrow: "会计 · 簿记", title: "账目清晰，便于审计及决策", sub: "外包簿记，附清晰报表 — 月度、季度或年度。" },
      overview: ["备存妥善会计纪录是香港公司的法定要求，亦是审计及报税的基础。"],
      included: ["总账维护", "银行对账", "损益表、资产负债表及试算表", "应收及应付账明细", "单据存档及数码化"],
      audience: ["没有内部财务团队的中小企", "海外股东持有的香港公司", "准备审计或融资的创办人"],
      process: [
        { title: "范围", desc: "确认交易量、频率及科目表。" },
        { title: "文件流程", desc: "建立安全的单据递交方式。" },
        { title: "入账", desc: "入账并对账。" },
        { title: "报表", desc: "按时交付管理报表。" },
      ],
      notes: [
        { q: "使用什么软件？", a: "我们使用主流会计软件，亦可按要求配合您现有系统。" },
        { q: "收费", a: "视交易量而定。所示为占位资料。" },
      ],
      cta: { title: "外包您的簿记", sub: "依交易量提供固定报价。", btn: "索取报价" },
    },
    "audit-coordination": {
      slug: "audit-coordination", parent: "accounting",
      title: "审计协调",
      metaTitle: "香港公司法定审计协调｜卓誉",
      metaDescription: "为香港公司准备审计底稿并对接执业会计师。",
      hero: { eyebrow: "会计 · 审计", title: "审计就绪的账目，全程代办", sub: "我们准备审计底稿并与独立执业会计师对接。" },
      overview: ["每间香港有限公司均须由独立执业会计师签发经审计财务报表。"],
      included: ["审计底稿准备", "试算表、总账及对账档", "与审计师对接并回应查询", "协调董事签署", "完成最终经审计财务报表以供报税"],
      audience: ["首次审计的公司", "更换审计师或服务商的公司", "需合并多间香港子公司的集团"],
      process: [
        { title: "准备", desc: "整理审计底稿。" },
        { title: "现场审计", desc: "审计师审查，我们回应查询。" },
        { title: "签署", desc: "董事签署财务报表及审计报告。" },
      ],
      notes: [
        { q: "不活动公司也要审计吗？", a: "一般要，除非已正式申请不活动公司状态。" },
        { q: "收费", a: "审计费视乎规模及复杂程度。所示为占位资料。" },
      ],
      cta: { title: "是时候开始审计？", sub: "获取清晰范围及固定收费。", btn: "开始审计" },
    },
    "profits-tax-return": {
      slug: "profits-tax-return", parent: "accounting",
      title: "利得税报税表（PTR）",
      metaTitle: "香港利得税报税表（PTR）｜卓誉",
      metaDescription: "向税务局提交利得税计算及 PTR，并包括延期申请。",
      hero: { eyebrow: "会计 · PTR", title: "利得税报税表准确按时提交", sub: "税务计算、PTR 提交及延期管理。" },
      overview: ["利得税报税表须连同经审计财务报表及税务计算一并提交税务局。香港采用两级制，首 200 万港元利润税率为 8.25%，余额为 16.5%。"],
      included: ["依审计报表编制利得税计算", "准备并提交 PTR 及附表", "适用时管理整批延期", "回应税务局一般查询"],
      audience: ["活跃及不活动香港有限公司", "考虑申请离岸利润豁免的公司"],
      process: [
        { title: "收到 PTR", desc: "确认提交期限及任何延期。" },
        { title: "计算税务", desc: "依审计报表编制税务计算。" },
        { title: "提交", desc: "向税务局提交 PTR 及计算。" },
      ],
      notes: [
        { q: "首份 PTR 何时发出？", a: "一般于成立 18 个月后发出，其后每年 4 月发出。" },
        { q: "如不提交会怎样？", a: "最高可被罚 10,000 元并可加征相当于少征税款 3 倍的罚款，持续违规可能被检控。" },
        { q: "收费", a: "视复杂程度而定。所示为占位资料。" },
      ],
      cta: { title: "PTR 即将到期？", sub: "由我们处理计算及提交。", btn: "索取报价" },
    },
    "registered-address": {
      slug: "registered-address", parent: "virtual-office",
      title: "注册地址",
      metaTitle: "香港公司注册办事处地址｜卓誉",
      metaDescription: "以真实香港商业地址作为注册办事处，符合法定水牌要求。",
      hero: { eyebrow: "虚拟办公室 · 地址", title: "真实的香港注册办事处地址", sub: "法定水牌、信件接收及专业形象。" },
      overview: ["每间香港有限公司均须于香港设有注册办事处以便送达法定通知。"],
      included: ["以我们的尖沙咀地址作为注册及商业地址", "依公司注册处要求展示公司名称", "接收一般信件及通知并通知客户"],
      audience: ["远程成立公司的海外创办人", "希望保持住址私隐的公司", "远程运作的中小企"],
      process: [
        { title: "申请", desc: "选择计划并完成 KYC。" },
        { title: "启用", desc: "地址即时启用，按需要更新公司注册处资料。" },
        { title: "运作", desc: "依您指示处理信件及通知。" },
      ],
      notes: [
        { q: "公司注册处会接受吗？", a: "会。只要正确展示公司名称并可送达通知 — 两者我们均已涵盖。" },
        { q: "收费", a: "其他位置所示计划费为占位资料。" },
      ],
      cta: { title: "需要香港地址？", sub: "最快一个工作天启用。", btn: "立即申请" },
    },
    "mail-forwarding": {
      slug: "mail-forwarding", parent: "virtual-office",
      title: "信件转寄及扫描",
      metaTitle: "香港公司信件转寄及扫描服务｜卓誉",
      metaDescription: "代收信件包裹、扫描为 PDF 及转寄到您指定地址。",
      hero: { eyebrow: "虚拟办公室 · 信件", title: "再不会错过重要信件", sub: "代收信件包裹、即时通知、扫描及转寄。" },
      overview: ["我们作为您业务通讯及包裹的接收点。您可选择亲收、扫描或转寄。"],
      included: ["代收以您公司名义寄送的信件及包裹", "电邮或客户平台通知", "按要求扫描为 PDF", "本地或国际快递转寄（邮费按成本收取）"],
      audience: ["驻外董事及股东", "在香港没有实体办公室的公司", "经常出差的创办人"],
      process: [
        { title: "接收", desc: "信件入账并纪录。" },
        { title: "通知", desc: "您收到含寄件人资料的通知。" },
        { title: "处理", desc: "亲收、扫描或转寄，由您决定。" },
      ],
      notes: [
        { q: "可以转寄海外吗？", a: "可以。国际快递按成本收取。" },
        { q: "收费", a: "计划费及转寄费为占位资料。" },
      ],
      cta: { title: "需要专业处理信件？", sub: "与注册地址服务组合使用。", btn: "立即申请" },
    },
    "call-answering": {
      slug: "call-answering", parent: "virtual-office",
      title: "电话接听服务",
      metaTitle: "香港公司双语电话接听服务｜卓誉",
      metaDescription: "独立电话号码配双语接待员，以您的公司名义接听电话。",
      hero: { eyebrow: "虚拟办公室 · 电话", title: "专业双语电话接听", sub: "独立号码、贵公司名义及训练有素的接待员。" },
      overview: ["毋须聘请接待员亦能展现专业形象。"],
      included: ["独立直线电话号码", "以贵公司名义双语接听", "即时转驳至指定号码", "电邮或客户平台留言通知"],
      audience: ["重视第一印象的创办人", "没有总机的分散式团队", "服务中英客户的公司"],
      process: [
        { title: "设定", desc: "分配号码并设定问候语及转驳。" },
        { title: "运作", desc: "办公时间内接听，非办公时间留言通知。" },
      ],
      notes: [
        { q: "覆盖什么时间？", a: "标准香港办公时间，可按要求延长。" },
        { q: "收费", a: "其他位置所示为占位资料。" },
      ],
      cta: { title: "让您听起来更专业", sub: "数天内启用独立接听线。", btn: "立即申请" },
    },
  },
};

export const SERVICE_CONTENT: Record<Lang, ServiceContent> = { en, tc, sc };

export function getCategory(lang: Lang, slug: string): CategoryContent | undefined {
  return SERVICE_CONTENT[lang].categories[slug];
}
export function getSubService(lang: Lang, slug: string): SubServiceContent | undefined {
  return SERVICE_CONTENT[lang].subServices[slug];
}
export function getUI(lang: Lang) {
  return SERVICE_CONTENT[lang].ui;
}
