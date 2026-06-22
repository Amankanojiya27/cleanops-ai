// File: rowmend-studio-web/src/app/_content/site-content.ts
export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  icon:
    | "spreadsheet"
    | "research"
    | "transcription"
    | "crm"
    | "summary"
    | "automation";
  title: string;
  description: string;
  price: string;
  emphasis?: boolean;
};

export type Step = {
  number: string;
  title: string;
  detail: string;
  note: string;
};

export type Plan = {
  name: string;
  price: string;
  note: string;
  featured?: boolean;
  items: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export const brandName = "RowMend Studio";

export const tagline =
  "AI-assisted spreadsheet cleanup and back-office support for small businesses.";

export const navigation: NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const heroTitle =
  "Spreadsheet and CRM cleanup for small teams that need cleaner data fast.";

export const heroSubheadline =
  "RowMend Studio standardizes messy spreadsheets, repairs contact exports, removes duplicates, and returns reviewed files that are easier to import, share, or work from.";

export const heroLead =
  "Best for small businesses, agencies, consultants, and founders who need a practical cleanup partner instead of another tool.";

export const heroPrimaryCta = "Send a sample file";
export const heroSecondaryCta = "Request a cleanup estimate";

export const trustItems = [
  "Reviewed delivery",
  "Reply within 2-6 business hours",
  "Small sample tasks welcome",
  "Clear scope before work starts",
];

export const heroProofTitle = "Sample spreadsheet cleanup outcome";
export const heroProofBadge = "Private review";

export const beforeItems = [
  "1,284-row export with duplicate contacts across tabs",
  "Mixed phone formats and inconsistent company names",
  "Missing owner fields and untagged lead status values",
];

export const afterItems = [
  "Deduplicated main sheet with standardized columns",
  "Import-ready phone, company, and status formatting",
  "Flagged issues tab plus reviewed handoff summary",
];

export const heroProofDetails = [
  "Delivered in 36 hours after scope confirmation",
  "Duplicate rows logged in a separate review tab",
];

export const servicesLead =
  "The primary offer is spreadsheet cleanup and CRM/contact data cleanup. Supporting services stay available when they help the same workflow move faster.";

export const serviceOptions: Service[] = [
  {
    icon: "spreadsheet",
    title: "Spreadsheet cleanup",
    description:
      "Standardize columns, remove duplicates, flag missing values, and return a clean file ready to use.",
    price: "From $15 / INR 999",
    emphasis: true,
  },
  {
    icon: "crm",
    title: "CRM and contact cleanup",
    description:
      "Repair exports, clean records, and organize contact data for import, follow-up, or review.",
    price: "From $25 / INR 1,999",
    emphasis: true,
  },
  {
    icon: "transcription",
    title: "Transcription and short notes",
    description:
      "Turn recordings into reviewed transcripts and concise notes your team can use quickly.",
    price: "From $39 / INR 2,999",
  },
  {
    icon: "automation",
    title: "Recurring cleanup support",
    description:
      "Handle recurring cleanup and admin support without adding a large ops layer or extra software complexity.",
    price: "From $49 / INR 3,999",
  },
];

export const sampleOutcomeStats = [
  { label: "Rows reviewed", value: "1,284" },
  { label: "Duplicates removed", value: "143" },
  { label: "Missing values flagged", value: "27" },
  { label: "Turnaround example", value: "36 hrs" },
];

export const sampleOutcomeDeliverables = [
  "Cleaned spreadsheet with standardized columns",
  "Duplicates or removed rows tab for review",
  "Flagged issues list for blanks and inconsistent values",
  "Optional import-ready CSV or Excel handoff",
];

export const outputItems = [
  "Cleaned spreadsheet or contact export",
  "Duplicates / removed rows tab when useful",
  "Reviewed handoff summary with notes",
  "Optional import-ready file",
];

export const processIntro =
  "The workflow stays small and operational: sample first, scope confirmed, then reviewed delivery.";

export const steps: Step[] = [
  {
    number: "01",
    title: "Send a file or sample",
    detail:
      "Share the spreadsheet, CRM export, or sample task so the cleanup scope can be reviewed realistically.",
    note: "Small sample files are welcome.",
  },
  {
    number: "02",
    title: "Scope, timing, and price confirmed",
    detail:
      "You receive a clear reply covering what will be cleaned, the expected turnaround, and the price before work begins.",
    note: "Typical reply within 2-6 business hours.",
  },
  {
    number: "03",
    title: "Receive cleaned output with notes",
    detail:
      "The final delivery includes the cleaned file, reviewed notes, and one revision within the agreed scope if needed.",
    note: "Reviewed delivery, not a blind export.",
  },
];

export const plans: Plan[] = [
  {
    name: "Starter Cleanup",
    price: "$15 / INR 999",
    note: "For small spreadsheet cleanup or a quick contact export review.",
    items: [
      "Up to 500 rows or one compact spreadsheet tab",
      "Basic duplicate cleanup and column standardization",
      "1 revision included within agreed scope",
      "Typical delivery in 24-48 hours depending on scope",
    ],
  },
  {
    name: "Standard Cleanup",
    price: "$39 / INR 2,999",
    note: "For larger spreadsheets, CRM cleanup, or multi-file cleanup support.",
    featured: true,
    items: [
      "Up to 2,000 rows or a larger CRM/contact export",
      "Duplicate review, formatting cleanup, and issue flags",
      "Reviewed handoff summary plus 1 revision included",
      "Typical delivery in 24-72 hours depending on scope",
    ],
  },
  {
    name: "Monthly Support",
    price: "$199 / INR 14,999",
    note: "For recurring cleanup, admin support, and ongoing spreadsheet maintenance.",
    items: [
      "Recurring spreadsheet and CRM cleanup support",
      "Lightweight admin help and repeated cleanup tasks",
      "Priority scheduling across the month",
      "Best for lean teams with steady weekly volume",
    ],
  },
];

export const pricingNote =
  "Final pricing depends on row count, file condition, turnaround, and whether the handoff needs CSV, Excel, or Google Sheets compatibility.";

export const faqs: FAQ[] = [
  {
    question: "What file types can I send?",
    answer:
      "CSV, XLSX, XLS, Google Sheets exports, CRM/contact exports, PDFs, documents, and common audio or video files are all fine. If you are unsure, start with a sample.",
  },
  {
    question: "Is the work AI-only or reviewed?",
    answer:
      "The workflow is AI-assisted for speed, but the final output is reviewed before delivery so the file is easier to trust and use.",
  },
  {
    question: "How fast is turnaround?",
    answer:
      "Typical reply time is 2-6 business hours. Delivery depends on scope, but many spreadsheet and CRM cleanup jobs land within 24-72 hours after scope confirmation.",
  },
  {
    question: "How do you handle confidential files?",
    answer:
      "Files are reviewed privately and used only for the agreed task. Nothing is shared publicly, and scope is confirmed before work starts.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "You will receive a reply covering scope, timing, pricing, and any clarifying questions. Work begins only after that is confirmed.",
  },
  {
    question: "Do you return Excel, CSV, or Google Sheets files?",
    answer:
      "Yes. Cleaned files can be returned in Excel or CSV, and Google Sheets-compatible handoff is available when needed.",
  },
  {
    question: "Can I start with a small sample?",
    answer:
      "Yes. Small sample files are welcome, especially when you want to confirm fit before sending a larger cleanup task.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Monthly support is available for recurring spreadsheet cleanup, contact data upkeep, and related back-office tasks.",
  },
];

export const contactIntro =
  "Share a spreadsheet, CRM export, or sample task for review. You will receive scope, timing, and pricing before any work begins.";

export const contactReassurance = [
  "Typical reply within 2-6 business hours",
  "Small sample files are welcome",
  "Files are reviewed privately and never shared publicly",
  "Scope, timing, and pricing are confirmed before work starts",
];

export const footerLinks = [
  "Spreadsheet cleanup",
  "CRM and contact data cleanup",
  "Reviewed transcripts and notes",
  "Recurring cleanup support",
];

export const footerNote =
  "A practical cleanup service for teams that need cleaner spreadsheets, better contact data, and quieter back-office operations.";

export const footerTrust =
  "Reviewed delivery, private file handling, and clear scope before work begins.";

export const emailAddress = process.env.CONTACT_TO;

export const whatsappLink =
  `https://wa.me/${process.env.PHONE_NUMBER}?text=Hi%20RowMend%20Studio%2C%20I%20want%20a%20cleanup%20estimate%20for%20a%20spreadsheet%20or%20CRM%20export.`;
