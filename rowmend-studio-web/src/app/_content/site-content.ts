// File: src/app/_content/site-content.ts
export type NavItem = {
  href: string;
  label: string;
};

export type Highlight = {
  title: string;
  detail: string;
};

export type Problem = {
  title: string;
  detail: string;
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
  audience: string;
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
  audience: string;
  featured?: boolean;
  items: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export const navigation: NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const heroHighlights: Highlight[] = [
  {
    title: "Human-reviewed output",
    detail: "AI-assisted speed with a final human check before delivery.",
  },
  {
    title: "Works with common business files",
    detail: "CSV, XLSX, PDF, DOC, MP3, MP4, and exported CRM lists.",
  },
  {
    title: "Simple starting price",
    detail: "Small cleanup tasks start from $15 / INR 999.",
  },
];

export const trustChips = [
  "Spreadsheet cleanup",
  "CRM and lead list fixes",
  "Transcripts and summaries",
  "Monthly support for small teams",
];

export const problems: Problem[] = [
  {
    title: "Messy spreadsheets",
    detail: "Inconsistent columns, broken formatting, and hard-to-use exports.",
  },
  {
    title: "Duplicate contacts",
    detail: "Repeated names, outdated records, and unreliable CRM lists.",
  },
  {
    title: "Unorganized lead data",
    detail: "Research spread across tabs, notes, and half-finished sheets.",
  },
  {
    title: "Long recordings",
    detail: "Meetings, podcasts, and interviews that still need transcripts and takeaways.",
  },
  {
    title: "Too much copy-paste work",
    detail: "Manual admin tasks that steal time from client work and growth.",
  },
  {
    title: "Wasted admin hours",
    detail: "Small teams end up doing back-office cleanup after hours or between projects.",
  },
];

export const services: Service[] = [
  {
    icon: "spreadsheet",
    title: "Spreadsheet Cleanup",
    description:
      "Fix formatting, standardize columns, remove duplicates, and make files easier to use.",
    audience: "Ideal for small businesses, operations teams, and agencies.",
    price: "From $15 / INR 999",
  },
  {
    icon: "research",
    title: "Lead Research",
    description:
      "Build structured lead sheets with the right fields, categories, and notes for outreach.",
    audience: "Ideal for consultants, recruiters, and outbound-focused teams.",
    price: "From $29 / INR 2,199",
  },
  {
    icon: "transcription",
    title: "Transcription and Summaries",
    description:
      "Turn calls, meetings, podcasts, or videos into usable transcripts and action notes.",
    audience: "Ideal for creators, coaches, recruiters, and founders.",
    price: "From $39 / INR 2,999",
  },
  {
    icon: "crm",
    title: "CRM Cleanup",
    description:
      "Organize contact exports, clean records, and prepare customer data for follow-up.",
    audience: "Ideal for sales teams, agencies, and service businesses.",
    price: "From $25 / INR 1,999",
  },
  {
    icon: "summary",
    title: "Document Summaries",
    description:
      "Condense long SOPs, proposals, reports, and research files into clear business notes.",
    audience: "Ideal for consultants, course creators, and busy decision-makers.",
    price: "From $19 / INR 1,499",
  },
  {
    icon: "automation",
    title: "Workflow Automation",
    description:
      "Set up simple AI-assisted admin workflows for recurring tasks and repeatable cleanup.",
    audience: "Ideal for growing small teams that want less manual work.",
    price: "From $49 / INR 3,999",
  },
];

export const beforeItems = [
  "Duplicate rows",
  "Messy names and inconsistent formatting",
  "Broken emails and empty fields",
  "Unorganized columns and unclear labels",
];

export const afterItems = [
  "Clean formatting and structured columns",
  "Deduplicated contacts and records",
  "Clear categories and useful tags",
  "Client-ready file plus summary notes",
];

export const outputItems = [
  "Clean working file",
  "Summary report of what was fixed",
  "Optional notes on next-step automation",
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Send your file or task",
    detail: "Share the spreadsheet, document, recording, or admin task that needs help.",
  },
  {
    number: "02",
    title: "We review and confirm scope",
    detail: "You get a clear reply on what will be done, pricing, and expected delivery time.",
  },
  {
    number: "03",
    title: "We clean, organize, or summarize",
    detail: "The work is completed using AI-assisted tools with a practical human review.",
  },
  {
    number: "04",
    title: "You receive the final output",
    detail: "Get a clean file, transcript, summary, or organized deliverable ready to use.",
  },
];

export const plans: Plan[] = [
  {
    name: "Starter Task",
    price: "$15 / INR 999",
    audience: "For small cleanup jobs and quick admin tasks",
    items: [
      "Single spreadsheet cleanup or short summary task",
      "Good for small CSVs, sheets, and one-off fixes",
      "Delivered with a clean output and short handoff note",
    ],
  },
  {
    name: "Standard Task",
    price: "$39 / INR 2,999",
    audience: "For larger files, transcription, or structured research work",
    featured: true,
    items: [
      "Larger spreadsheet and CRM cleanup jobs",
      "Podcast, meeting, or interview transcript plus summary",
      "Lead research sheet with organized fields and categories",
    ],
  },
  {
    name: "Monthly Support",
    price: "$199 / INR 14,999",
    audience: "For recurring back-office work across the month",
    items: [
      "Ongoing spreadsheet, summary, and admin help",
      "Simple workflow support for repetitive tasks",
      "Best for agencies, consultants, and lean teams",
    ],
  },
];

export const useCases = [
  "Clean 1,000 messy contacts before a CRM import",
  "Turn a podcast into a transcript plus episode summary",
  "Build a lead research sheet for outreach",
  "Prepare an ecommerce product CSV for upload",
  "Summarize long business documents into action notes",
  "Create a simple AI-assisted admin workflow",
];

export const benefits = [
  "Human-reviewed output, not raw AI drafts.",
  "Faster delivery for repetitive and cleanup-heavy work.",
  "Clear pricing and scope before work begins.",
  "Simple delivery through WhatsApp or email.",
  "Privacy-conscious process for business files and recordings.",
  "No complex software setup required on your side.",
];

export const faqs: FAQ[] = [
  {
    question: "What type of files can I send?",
    answer:
      "You can send spreadsheets, CSV exports, PDFs, documents, audio files, video files, and task notes. If you are unsure, send a sample and we will confirm fit first.",
  },
  {
    question: "Do you use AI only or human review too?",
    answer:
      "The workflow is AI-assisted for speed, but the final output is reviewed before delivery so the result is practical and usable.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Turnaround depends on file size and scope. Small tasks can be fast, while larger files, research, or transcription work may need more time. You will get an estimate before work starts.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. The process is designed to be privacy-conscious, and we keep the workflow focused on the task you send us.",
  },
  {
    question: "Can you handle large files?",
    answer:
      "Yes. Larger spreadsheets, exports, and longer recordings can be handled after scope review and pricing confirmation.",
  },
  {
    question: "Do you offer monthly support?",
    answer:
      "Yes. Monthly support is available for recurring spreadsheet cleanup, summaries, admin assistance, and simple workflow help.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Yes. The pricing and contact flow are designed to work for both local and international clients.",
  },
  {
    question: "What if I am not satisfied?",
    answer:
      "If something in the agreed scope needs adjustment, reply with the issue and it can be reviewed against the original task and delivery notes.",
  },
];

export const serviceLinks = [
  "Spreadsheet Cleanup",
  "Lead Research",
  "Transcription and Summaries",
  "CRM Cleanup",
  "Workflow Automation",
];

export const emailAddress = "hello@cleanopsai.com";

export const whatsappLink =
  "https://wa.me/919999999999?text=Hi%20CleanOps%20AI%2C%20I%20need%20help%20with%20a%20file%20or%20admin%20task.";
