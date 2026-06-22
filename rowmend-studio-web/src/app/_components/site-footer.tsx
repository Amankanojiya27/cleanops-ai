import {
  brandName,
  emailAddress,
  footerNote,
  footerLinks,
  tagline,
  whatsappLink,
} from "../_content/site-content";
import { ActionLink, BrandMark } from "./landing-primitives";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <h2 className="text-lg font-semibold tracking-[-0.03em] text-ink">
                {brandName}
              </h2>
              <p className="text-sm text-muted">Small-team back-office support</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">{tagline}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted/90">{footerNote}</p>
          <div className="mt-5">
            <ActionLink href="#contact">Start a task</ActionLink>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-brand">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {footerLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-brand">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a className="transition hover:text-ink" href={`mailto:${emailAddress}`}>
                {emailAddress}
              </a>
            </li>
            <li>
              <a className="transition hover:text-ink" href={whatsappLink}>
                WhatsApp chat
              </a>
            </li>
            <li>Copyright {new Date().getFullYear()} {brandName}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
