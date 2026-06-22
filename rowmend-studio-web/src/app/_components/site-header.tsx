import { brandName, navigation } from "../_content/site-content";
import { ActionLink, BrandLabel, BrandMark } from "./landing-primitives";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a
          href="#home"
          aria-label={`${brandName} homepage`}
          className="flex items-center gap-3"
        >
          <BrandMark />
          <BrandLabel />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ActionLink href="#contact" className="hidden sm:inline-flex">
          Send a File
        </ActionLink>
      </div>
    </header>
  );
}
