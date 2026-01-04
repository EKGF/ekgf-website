import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Quadrant = {
  title: string;
  axisHint: string;
  description: string;
  href: string;
};

const quadrants: Quadrant[] = [
  {
    title: "Method",
    axisHint: "How",
    description: "A practical method to develop an EKG using the Use Case Tree.",
    href: "https://method.ekgf.org",
  },
  {
    title: "Capability Components",
    axisHint: "What",
    description: "Reusable capability components and patterns for your EKG.",
    href: "https://catalog.ekgf.org",
  },
  {
    title: "Principles",
    axisHint: "Why",
    description: "Guiding principles and manifesto for enterprise knowledge graphs.",
    href: "https://principles.ekgf.org",
  },
  {
    title: "Maturity",
    axisHint: "Improve",
    description: "Assess your current state and plan pragmatic next steps.",
    href: "https://maturity.ekgf.org",
  },
];

export function QuadrantsDiagram() {
  return (
    <section aria-labelledby="quadrants-diagram-title" className="w-full">
      <h2 id="quadrants-diagram-title" className="sr-only">
        The EKG quadrants diagram
      </h2>

      <div className="relative">
        {/* Axis labels (desktop) */}
        <div className="pointer-events-none absolute -top-8 left-0 right-0 hidden md:flex items-center justify-between text-sm font-semibold text-muted-foreground">
          <span>How</span>
          <span>What</span>
        </div>
        <div className="pointer-events-none absolute -left-10 top-0 hidden md:flex h-full flex-col justify-between text-sm font-semibold text-muted-foreground">
          <span className="-rotate-90 origin-left">How</span>
          <span className="-rotate-90 origin-left">Why</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {quadrants.map((q) => (
            <a
              key={q.title}
              href={q.href}
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="h-full border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#4051b5]">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <CardTitle className="text-2xl group-hover:text-[#4051b5] transition-colors">
                      {q.title}
                    </CardTitle>
                    <span className="inline-flex items-center rounded-full border bg-background px-2 py-1 text-xs font-semibold text-muted-foreground">
                      {q.axisHint}
                    </span>
                  </div>
                  <CardDescription className="text-base">
                    {q.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>

        {/* Center connector */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="rounded-2xl border bg-background px-4 py-3 shadow-sm">
            <div className="text-center text-sm font-semibold leading-tight">
              Use Case
              <br />
              Tree
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Want a quick overview? Start at{" "}
        <Link href="/method" className="font-semibold text-[#4051b5] hover:underline">
          the Method
        </Link>{" "}
        and use the other quadrants to enrich (Catalog), guide (Principles), and
        improve (Maturity) your implementation.
      </p>
    </section>
  );
}

