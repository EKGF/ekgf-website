import Link from "next/link";
import { cn } from "@/lib/utils";

const quadrants = [
  {
    title: "Method",
    axisX: "How",
    axisY: "How",
    description:
      "A practical method to develop an EKG using the Use Case Tree.",
    href: "https://method.ekgf.org",
    position: "top-left",
  },
  {
    title: "Capability Components",
    axisX: "What",
    axisY: "How",
    description:
      "Reusable capability components and patterns for your EKG.",
    href: "https://catalog.ekgf.org",
    position: "top-right",
  },
  {
    title: "Principles",
    axisX: "How",
    axisY: "Why",
    description:
      "Guiding principles and manifesto for enterprise knowledge graphs.",
    href: "https://principles.ekgf.org",
    position: "bottom-left",
  },
  {
    title: "Maturity",
    axisX: "What",
    axisY: "Improve",
    description:
      "Assess your current state and plan pragmatic next steps.",
    href: "https://maturity.ekgf.org",
    position: "bottom-right",
  },
];

export function QuadrantsDiagram() {
  return (
    <section
      aria-labelledby="quadrants-diagram-title"
      className="w-full py-12"
    >
      <h2 id="quadrants-diagram-title" className="sr-only">
        The EKG quadrants diagram
      </h2>

      <div className="relative mx-auto max-w-screen-xl aspect-square md:aspect-[4/3] lg:aspect-[16/9]">
        {/* Main Grid Container */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border border-foreground/20 rounded-lg overflow-hidden bg-card/10 backdrop-blur-sm">
          {quadrants.map((q) => (
            <a
              key={q.title}
              href={q.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative flex flex-col items-center justify-center p-6 text-center transition-all hover:bg-primary/5 border-foreground/10",
                q.position === "top-left" && "border-r border-b",
                q.position === "top-right" && "border-b",
                q.position === "bottom-left" && "border-r",
                q.position === "bottom-right" && "",
              )}
            >
              <div className="space-y-2 group-hover:opacity-100 transition-opacity">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors text-foreground/90">
                  {q.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-[200px] mx-auto leading-tight">
                  {q.description}
                </p>
              </div>
            </a>
          ))}

          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-background border border-foreground/20 shadow-sm flex items-center justify-center text-center z-10 group/center transition-all hover:scale-105 hover:bg-background hover:shadow-xl backdrop-blur-md">
            <div className="p-2 group-hover/center:opacity-100 transition-opacity">
              <span className="block text-[10px] md:text-xs font-bold uppercase tracking-tighter text-primary">
                Use Case
              </span>
              <span className="block text-sm md:text-lg font-black leading-none text-foreground/80">
                TREE
              </span>
            </div>
          </div>
        </div>

        {/* Outer Labels */}
        {/* Top Labels */}
        <div className="absolute -top-10 left-0 w-1/2 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
          How
        </div>
        <div className="absolute -top-10 right-0 w-1/2 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
          What
        </div>

        {/* Left Labels */}
        <div className="absolute top-1/4 -left-16 -translate-y-1/2 w-8 flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 [writing-mode:vertical-lr] rotate-180">
          How
        </div>
        <div className="absolute top-3/4 -left-16 -translate-y-1/2 w-8 flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 [writing-mode:vertical-lr] rotate-180">
          Why
        </div>

        {/* Bottom Labels */}
        <div className="absolute -bottom-10 right-0 w-1/2 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
          Improve
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          Want a quick overview? Start at{" "}
          <Link
            href="/method"
            className="font-semibold text-primary hover:underline"
          >
            the Method
          </Link>{" "}
          and use the other quadrants to enrich (Catalog), guide
          (Principles), and improve (Maturity) your implementation.
        </p>
      </div>
    </section>
  );
}
