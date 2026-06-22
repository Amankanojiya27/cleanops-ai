import Link from "next/link";
import { ArrowRight, Layers3, Sparkles, Wand2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import styles from "./test-ui.module.css";

const stackLayers = [
  {
    name: "ui-ux-pro-max",
    role: "Design brain",
    copy: "Sets typography, spacing, restraint, and premium SaaS hierarchy before any component work begins.",
  },
  {
    name: "shadcn-ui",
    role: "Structure system",
    copy: "Copies local components into the codebase so the UI stays inspectable, editable, and consistent.",
  },
  {
    name: "radix-ui",
    role: "Accessibility engine",
    copy: "Handles dialog semantics, keyboard navigation, focus management, and ARIA-safe interaction patterns.",
  },
  {
    name: "aceternity-ui",
    role: "Visual layer",
    copy: "Adds glow, beam, and gradient drama only where marketing surfaces need lift.",
  },
  {
    name: "magic-ui",
    role: "Motion engine",
    copy: "Introduces small, purposeful animation where feedback improves clarity and delight.",
  },
  {
    name: "hyperui",
    role: "Fast block layer",
    copy: "Speeds up pragmatic grids, cards, and layout sections without fragmenting the visual system.",
  },
];

const componentRules = [
  "Copy components into the repo instead of consuming opaque UI package abstractions.",
  "Treat Radix primitives as the accessibility foundation for overlays and interactive disclosure.",
  "Reserve glow, beam, and shimmer effects for hero and marketing surfaces, not dense application screens.",
];

export default function TestUiPage() {
  return (
    <main className="min-h-dvh bg-canvas px-5 py-6 text-ink sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-[linear-gradient(135deg,rgba(32,59,69,0.95),rgba(22,46,55,0.88))] px-6 py-8 text-white shadow-[0_32px_120px_rgba(23,33,38,0.18)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className={styles.heroBeam} aria-hidden />
          <div
            className={`${styles.heroAura} h-56 w-56 bg-[rgba(123,143,105,0.38)] top-[-4rem] right-[-2rem]`}
            aria-hidden
          />
          <div
            className={`${styles.heroAura} h-48 w-48 bg-[rgba(255,255,255,0.14)] bottom-[-3rem] left-[-1rem]`}
            aria-hidden
          />
          <div
            className={`${styles.heroGrid} absolute inset-0 opacity-20`}
            aria-hidden
          />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.8fr)] lg:items-end">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/84 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                UI intelligence layer demo
              </div>

              <div className="space-y-4">
                <h1 className="max-w-4xl font-serif text-4xl tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
                  Premium UI rules first, components second, effects only where
                  they earn their place.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/74 sm:text-lg">
                  This `/test-ui` route demonstrates the intended stack order:
                  design governance from `ui-ux-pro-max`, local shadcn-style
                  primitives, Radix-backed accessibility, one Aceternity-style
                  hero, and one Magic-style motion panel.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-white text-brand shadow-[0_18px_50px_rgba(0,0,0,0.18)] hover:bg-white/92"
                    >
                      Open accessible dialog
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Radix-backed shadcn dialog</DialogTitle>
                      <DialogDescription>
                        Focus is trapped, the overlay is dismissible, keyboard
                        navigation is preserved, and the trigger remains a local
                        copied-in component.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 rounded-[1.5rem] border border-line/80 bg-surface-soft p-5 text-sm leading-6 text-muted">
                      Use this pattern for confirmations, menu surfaces, and
                      structured modals when the product needs strong UX
                      guarantees without importing a black-box design system.
                    </div>
                    <DialogFooter>
                      <Button variant="secondary">Keep exploring</Button>
                      <Button>Ship the pattern</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button asChild size="lg" variant="ghost">
                  <Link href="/" className="text-white">
                    Back to homepage
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {stackLayers.slice(0, 3).map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <div className="text-xs font-medium uppercase tracking-[0.24em] text-white/56">
                    {layer.role}
                  </div>
                  <div className="mt-2 font-mono text-sm text-white/84">
                    {layer.name}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {layer.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
          <Card className="bg-surface/88">
            <CardHeader>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                <Layers3 className="h-4 w-4" />
                shadcn + hyperui block system
              </div>
              <CardTitle>Copied-in primitives and rapid layout sections</CardTitle>
              <CardDescription>
                The cards, button styles, and dialog on this page live inside
                the repo so the team can tune them like product code, not
                vendor code.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {stackLayers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-[1.45rem] border border-line/70 bg-white/78 p-5 dark:bg-surface-soft/70"
                >
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                    {layer.role}
                  </div>
                  <div className="mt-2 font-serif text-2xl tracking-[-0.03em]">
                    {layer.name}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {layer.copy}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className={`${styles.signalShell} bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,242,232,0.88))]`}>
            <CardHeader>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                <Wand2 className="h-4 w-4" />
                magic-ui motion sample
              </div>
              <CardTitle>Purposeful motion, not decorative noise</CardTitle>
              <CardDescription>
                The animated signal rail uses only transform and opacity so it
                feels alive without hurting input performance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-3">
                {componentRules.map((rule) => (
                  <div
                    key={rule}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-line/70 bg-white/76 px-4 py-3"
                  >
                    <span
                      className={`${styles.pulseDot} mt-1.5 h-2.5 w-2.5 rounded-full bg-brand`}
                      aria-hidden
                    />
                    <p className="text-sm leading-6 text-muted">{rule}</p>
                  </div>
                ))}
              </div>

              <div className="relative rounded-[1.6rem] border border-brand/12 bg-brand px-5 py-5 text-white shadow-[0_26px_70px_rgba(32,59,69,0.2)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-white/54">
                      release confidence
                    </div>
                    <div className="mt-2 font-serif text-3xl tracking-[-0.04em]">
                      98.4%
                    </div>
                  </div>
                  <div className="rounded-full border border-white/14 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/78">
                    motion-safe
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div
                    className={`${styles.floatChip} rounded-[1.25rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm`}
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-white/54">
                      loading feedback
                    </div>
                    <div className="mt-2 text-lg font-medium text-white/92">
                      180ms
                    </div>
                  </div>
                  <div
                    className={`${styles.floatChipDelayed} rounded-[1.25rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm`}
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-white/54">
                      reduced motion
                    </div>
                    <div className="mt-2 text-lg font-medium text-white/92">
                      respected
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Review motion rules</Button>
              <Button>Use this pattern</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  );
}
