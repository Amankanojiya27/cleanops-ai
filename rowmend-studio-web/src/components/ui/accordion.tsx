import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-line/70 last:border-b-0", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold tracking-[-0.02em] text-ink outline-none transition hover:text-brand focus-visible:ring-2 focus-visible:ring-brand/20",
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-surface-soft text-brand transition duration-200 group-data-[state=open]:rotate-180">
          <ChevronDown className="h-4 w-4" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm leading-7 text-muted data-[state=closed]:animate-[accordion-up_180ms_ease-out] data-[state=open]:animate-[accordion-down_220ms_ease-out]",
        className,
      )}
      {...props}
    >
      <div className="pb-5 pr-10">{children}</div>
    </AccordionPrimitive.Content>
  );
}
