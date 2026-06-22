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

export type ContactCard = {
  channel: string;
  title: string;
  detail: string;
  href: string;
};

export const brandName = "RowMend Studio";

export const tagline =
  "AI-assisted data cleanup and back-office support for small businesses.";

export const navigation: NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const heroTitle =
  "Turn messy files, scattered records, and repetitive admin work into clean, usable outputs.";

export const heroSubheadline =
  "RowMend Studio helps small businesses, agencies, consultants, and lean teams clean spreadsheets, repair contact data, summarize documents, and offload repetitive back-office work with AI-assisted, human-reviewed delivery.";

export const heroLead =
  "Send the file or task, confirm the scope, and receive a cleaner handoff without adding a complicated new system.";

export const heroHighlights: Highlight[] = [
  {
    title: "Human-reviewed delivery",
    detail: "Work is checked before it comes back to your team, not sent as a raw draft.",
  },
  {
    title: "Common business file types",
    detail: "CSV, XLSX, PDF, DOC, MP3, MP4, and exported CRM lists are all familiar territory.",
  },
  {
    title: "Straightforward starting price",
    detail: "Small cleanup tasks start from $15 / INR 999, with scope confirmed before work begins.",
  },
];

export const audienceChips = [
  "Small businesses",
  "Agencies",
  "Founders",
  "Consultants",
  "Recruiters",
  "Creators",
];

export const trustChips = ["CSV / XLSX", "CRM exports", "PDF / DOC", "Audio / video"];

export const proofItems: Highlight[] = [
  {
    title: "Scope confirmed first",
    detail: "You get clarity on the work, pricing, and delivery before the task starts.",
  },
  {
    title: "Suitable for small teams",
    detail: "Built for businesses that need help without hiring full-time ops support.",
  },
  {
    title: "Reviewed handoff notes",
    detail: "Delivered files come with a short summary of what changed and what to know next.",
  },
  {
    title: "Monthly support available",
    detail: "Recurring back-office help is available when cleanup and admin work keeps coming back.",
  },
];

export const problems: Problem[] = [
  {
    title: "Messy spreadsheets",
    detail: "Exports arrive with inconsistent columns, broken formatting, and too much manual cleanup left to do.",
  },
  {
    title: "Duplicate contacts",
    detail: "Repeated names, stale records, and mixed formatting make contact data unreliable.",
  },
  {
    title: "Unorganized lead data",
    detail: "Lead research ends up scattered across tabs, loose notes, and half-finished sheets.",
  },
  {
    title: "Long recordings",
    detail: "Calls, meetings, podcasts, and interviews still need transcripts and usable takeaways.",
  },
  {
    title: "Too much copy-paste work",
    detail: "Simple admin tasks keep eating time that should be spent on delivery, sales, or clients.",
  },
  {
    title: "Wasted admin hours",
    detail: "Small teams end up fixing the back office late at night or between more important work.",
  },
];

export const serviceOptions: Service[] = [
  {
    icon: "spreadsheet",
    title: "Spreadsheet cleanup",
    description:
      "Fix formatting, standardize columns, remove duplicates, and turn messy exports into usable working files.",
    audience: "Ideal for small businesses, operations teams, and agencies.",
    price: "From $15 / INR 999",
  },
  {
    icon: "research",
    title: "Lead research",
    description:
      "Build structured lead sheets with the right fields, categories, and notes for outreach or qualification.",
    audience: "Ideal for consultants, recruiters, and outbound-focused teams.",
    price: "From $29 / INR 2,199",
  },
  {
    icon: "transcription",
    title: "Transcription and summaries",
    description:
      "Turn calls, meetings, podcasts, or videos into readable transcripts and action-ready notes.",
    audience: "Ideal for creators, coaches, recruiters, and founders.",
    price: "From $39 / INR 2,999",
  },
  {
    icon: "crm",
    title: "CRM and contact cleanup",
    description:
      "Repair contact exports, clean records, and prepare customer data for import, follow-up, or review.",
    audience: "Ideal for sales teams, agencies, and service businesses.",
    price: "From $25 / INR 1,999",
  },
  {
    icon: "summary",
    title: "Document summarization",
    description:
      "Condense reports, SOPs, proposals, and research files into concise business notes.",
    audience: "Ideal for consultants, course creators, and busy decision-makers.",
    price: "From $19 / INR 1,499",
  },
  {
    icon: "automation",
    title: "Recurring support and simple automation",
    description:
      "Set up simple AI-assisted workflows and support recurring tasks that keep pulling your team back into admin work.",
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
  "Short delivery note on what changed",
  "Optional next-step recommendations",
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Send your file or task",
    detail: "Share the spreadsheet, document, recording, or admin task that needs attention.",
  },
  {
    number: "02",
    title: "We review and confirm scope",
    detail: "You get a clear reply on what will be done, the expected timing, and the price.",
  },
  {
    number: "03",
    title: "We clean, organize, and review",
    detail: "The work is completed with AI-assisted speed and a final human review before handoff.",
  },
  {
    number: "04",
    title: "You receive the final output",
    detail: "Receive a cleaner file, transcript, summary, or organized deliverable with short delivery notes.",
  },
];

export const plans: Plan[] = [
  {
    name: "Starter Task",
    price: "$15 / INR 999",
    audience: "For small cleanup jobs and quick admin tasks",
    items: [
      "Single cleanup, summary, or small admin task",
      "Good for short spreadsheets, exports, and one-off fixes",
      "Delivered with a clean output and handoff note",
    ],
  },
  {
    name: "Standard Task",
    price: "$39 / INR 2,999",
    audience: "For larger files, transcription, or structured research work",
    featured: true,
    items: [
      "Larger spreadsheet, CRM, or contact cleanup jobs",
      "Meeting, podcast, or interview transcript plus summary",
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
  "Turn a podcast recording into a transcript plus summary",
  "Build a lead research sheet for outreach or sourcing",
  "Prepare an ecommerce product CSV for upload",
  "Summarize long business documents into action notes",
  "Set up a simple recurring workflow for repetitive admin",
];

export const benefits = [
  "Human-reviewed output, not raw AI-generated drafts.",
  "Clear scope, timing, and pricing before work begins.",
  "Files delivered with notes, not just processed and returned.",
  "Privacy-conscious handling for business files and recordings.",
  "Useful for small teams that do not need more software complexity.",
  "Monthly support available when back-office work keeps returning.",
];

export const faqs: FAQ[] = [
  {
    question: "What type of files can I send?",
    answer:
      "You can send spreadsheets, CSV exports, PDFs, documents, audio files, video files, and task notes. If you are not sure, send a sample first and the fit can be confirmed.",
  },
  {
    question: "Do you use AI only or human review too?",
    answer:
      "The workflow is AI-assisted for speed, but the final output is reviewed before delivery so the result is more reliable and easier to use.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Turnaround depends on file size and scope. Smaller tasks can move quickly, while larger files, research, or transcription work may need more time. You will get an estimate before work starts.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. The process is designed to be privacy-conscious and focused only on the task you send over.",
  },
  {
    question: "Can you handle large files?",
    answer:
      "Yes. Larger spreadsheets, exports, and longer recordings can be handled after a quick scope review and pricing confirmation.",
  },
  {
    question: "Do you offer monthly support?",
    answer:
      "Yes. Monthly support is available for recurring spreadsheet cleanup, summaries, admin assistance, and simple workflow help.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Yes. The pricing and contact flow work for both local and international clients.",
  },
  {
    question: "What if I am not satisfied?",
    answer:
      "If something in the agreed scope needs adjustment, reply with the issue and it can be reviewed against the original task and delivery notes.",
  },
];

export const sectionCopy = {
  problem: {
    title: "When the back office is messy, everything else slows down.",
    description:
      "Old exports, duplicate contacts, scattered notes, long recordings, and manual copy-paste work create friction for teams that should be focused on clients, sales, and delivery.",
  },
  services: {
    title: "Practical support for the work that keeps getting pushed back.",
    description:
      "From one-off cleanup tasks to recurring back-office support, each service is meant to save time and return something your team can use immediately.",
  },
  transformation: {
    title: "From raw exports to a cleaner, more confident handoff.",
    description:
      "The goal is not just to process information. It is to return something clearer, more organized, and easier for your team to work with.",
  },
  process: {
    title: "Simple from first file to final delivery.",
    description:
      "The process stays lightweight so you can hand off the work quickly and know what to expect.",
  },
  useCases: {
    title: `Examples of the work ${brandName} is built to handle.`,
    description:
      "These are the kinds of practical tasks small businesses, agencies, consultants, and creators usually send first.",
  },
  pricing: {
    title: "Straightforward pricing for one-off tasks and recurring support.",
    description:
      "Choose the level that matches the amount of cleanup, summarization, or admin support you need to hand off.",
  },
  why: {
    title: `Why teams choose ${brandName}.`,
    description:
      "The service is designed to feel dependable, clear, and useful from the first message to the final file.",
  },
  faq: {
    title: "Questions people usually ask before sending a task.",
    description:
      "Clear answers help reduce hesitation and make the next step easier.",
  },
  contact: {
    title: "Have a messy file or recurring admin task? Send it over.",
    description:
      "Use WhatsApp, email, or the short form below. A sample file or a clear task description is enough to get started.",
  },
};

export const pricingNote =
  "Final price depends on file size, deadline, and complexity.";

export const footerLinks = [
  "Spreadsheet cleanup",
  "CRM and contact cleanup",
  "Lead research",
  "Transcription and summaries",
  "Recurring support",
];

export const contactSupportText =
  "The business model is simple: send the task, confirm the scope, and receive cleaned, organized, summarized, or supported output without turning it into a much bigger project.";

export const emailAddress = "hello@rowmend.studio";

export const whatsappLink =
  "https://wa.me/919999999999?text=Hi%20RowMend%20Studio%2C%20I%20need%20help%20with%20a%20file%2C%20cleanup%20task%2C%20or%20recurring%20admin%20workflow.";

export const contactCards: ContactCard[] = [
  {
    channel: "WhatsApp",
    title: "Start on WhatsApp",
    detail:
      "Best for quick scope checks, urgent cleanup jobs, and simple task handoff.",
    href: whatsappLink,
  },
  {
    channel: "Email",
    title: "Send a task by email",
    detail:
      "Better for longer descriptions, file samples, and recurring support requests.",
    href: `mailto:${emailAddress}`,
  },
];
