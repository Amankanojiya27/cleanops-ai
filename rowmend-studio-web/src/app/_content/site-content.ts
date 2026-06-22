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
};

export type Step = {
  number: string;
  title: string;
  detail: string;
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
  "AI-assisted data cleanup and back-office support for small businesses.";

export const navigation: NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const heroTitle =
  "Turn messy files and repetitive admin work into cleaner business output.";

export const heroSubheadline =
  "RowMend Studio helps small businesses clean spreadsheets, repair contact data, summarize documents, and handle recurring back-office support.";

export const heroLead =
  "For founders, agencies, consultants, and lean teams that need usable handoffs without adding more software.";

export const trustItems = [
  "Reviewed delivery",
  "Clear scope before work starts",
  "One-off tasks or monthly support",
  "CSV, CRM, docs, audio, and notes",
];

export const servicesLead =
  "A compact set of services built for the cleanup and support work that quietly slows small teams down.";

export const serviceOptions: Service[] = [
  {
    icon: "spreadsheet",
    title: "Spreadsheet cleanup",
    description: "Standardize columns, remove duplicates, and return a file that is ready to use.",
    price: "From $15 / INR 999",
  },
  {
    icon: "crm",
    title: "CRM and contact cleanup",
    description: "Repair exports, clean records, and organize contact data for import or follow-up.",
    price: "From $25 / INR 1,999",
  },
  {
    icon: "transcription",
    title: "Transcription and summaries",
    description: "Turn meetings, calls, or recordings into concise transcripts and useful notes.",
    price: "From $39 / INR 2,999",
  },
  {
    icon: "automation",
    title: "Recurring support",
    description: "Handle recurring admin work and lightweight workflow help without building a bigger system.",
    price: "From $49 / INR 3,999",
  },
];

export const beforeItems = [
  "Duplicate rows and broken formatting",
  "Inconsistent names, emails, or status labels",
  "Loose notes and unclear ownership",
];

export const afterItems = [
  "Structured columns and cleaner formatting",
  "Deduplicated records and standardized fields",
  "Short delivery note with what changed",
];

export const outputItems = [
  "Clean working file",
  "Reviewed handoff notes",
  "Optional next-step suggestion",
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Send a sample or task",
    detail: "Share the file, recording, or recurring task that needs attention.",
  },
  {
    number: "02",
    title: "Review scope and price",
    detail: "You get a clear reply on timing, cost, and what the handoff will include.",
  },
  {
    number: "03",
    title: "Receive the cleaned output",
    detail: "The work is completed, reviewed, and returned in a format your team can use right away.",
  },
];

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$15 / INR 999",
    note: "For quick cleanup and one-off admin tasks.",
    items: [
      "Small spreadsheet or export cleanup",
      "Short summary or simple admin task",
      "Delivered with a brief handoff note",
    ],
  },
  {
    name: "Standard",
    price: "$39 / INR 2,999",
    note: "For larger files, transcription, or structured support work.",
    featured: true,
    items: [
      "CRM cleanup or larger spreadsheet work",
      "Meeting transcript with concise summary",
      "More time for detail and review",
    ],
  },
  {
    name: "Monthly",
    price: "$199 / INR 14,999",
    note: "For recurring back-office support across the month.",
    items: [
      "Ongoing cleanup and admin support",
      "Lightweight workflow help for repeat tasks",
      "Best for lean teams with steady volume",
    ],
  },
];

export const pricingNote =
  "Final pricing depends on file size, complexity, and turnaround.";

export const faqs: FAQ[] = [
  {
    question: "What can I send?",
    answer:
      "Spreadsheets, CSV exports, CRM lists, documents, audio, video, and clear task notes are all fine. If you are unsure, send a sample first.",
  },
  {
    question: "Is the work AI-only?",
    answer:
      "No. The process is AI-assisted for speed, but the final handoff is reviewed before delivery.",
  },
  {
    question: "How fast is turnaround?",
    answer:
      "Smaller tasks can move quickly. Larger files or recordings may need more time, and that is confirmed before work starts.",
  },
  {
    question: "Do you offer ongoing help?",
    answer:
      "Yes. Monthly support is available for recurring cleanup, summaries, and back-office assistance.",
  },
];

export const contactIntro =
  "Send a file, a task description, or a recurring support request. A sample is enough to start the conversation.";

export const footerLinks = [
  "Spreadsheet cleanup",
  "CRM cleanup",
  "Transcription",
  "Recurring support",
];

export const footerNote =
  "A service business for teams that need cleaner files and calmer back-office operations.";

export const emailAddress = "hello@rowmend.studio";

export const whatsappLink =
  "https://wa.me/919999999999?text=Hi%20RowMend%20Studio%2C%20I%20need%20help%20with%20a%20file%2C%20cleanup%20task%2C%20or%20recurring%20admin%20workflow.";
