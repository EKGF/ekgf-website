import type { Metadata } from "next";
import { QuadrantsDiagram } from "@/components/QuadrantsDiagram";

export const metadata: Metadata = {
  title: "The EKG Quadrants | EKGF",
  description:
    "A simple map of the EKGF body of work: Method, Capability Components, Principles, and Maturity—connected by the Use Case Tree.",
  alternates: { canonical: "https://ekgf.org/quadrants" },
  openGraph: {
    title: "The EKG Quadrants",
    description:
      "Method, Capability Components, Principles, and Maturity—connected by the Use Case Tree.",
    url: "https://ekgf.org/quadrants",
  },
};

export default function QuadrantsPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <header className="mb-10 md:mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-foreground/90">
            The EKG Quadrants
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
            A compact way to understand how EKGF’s resources fit
            together.
          </p>
        </header>

        <div className="mb-12">
          <QuadrantsDiagram />
        </div>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Why “quadrants”?</h2>
            <p className="text-muted-foreground leading-relaxed">
              The EKG body of work answers complementary questions:
            </p>
            <ul className="space-y-3 opacity-80">
              <li className="flex gap-3">
                <span className="font-bold text-primary/70 min-w-[60px]">
                  How
                </span>
                <span>do we build an EKG consistently?</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary/70 min-w-[60px]">
                  What
                </span>
                <span>reusable components can we use?</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary/70 min-w-[60px]">
                  Why
                </span>
                <span>are we building it this way?</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary/70 min-w-[60px]">
                  Improve
                </span>
                <span>how do we get better over time?</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              The Use Case Tree at the center
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Use Case Tree connects strategy to implementation.
              It helps you derive capabilities, prioritize work, align
              stakeholders, and create a shared “source of truth” for
              what your EKG must support.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t pt-16">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-center">
            How to use this map
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Start with the Method",
                desc: "Use the method to structure discovery, planning, and delivery. When you need concrete building blocks, jump to the Catalog.",
              },
              {
                title: "Use Principles as guardrails",
                desc: "The principles help you make good trade-offs—especially when the “right” answer depends on context.",
              },
              {
                title: "Assess with Maturity",
                desc: "Measure where you are, identify gaps, and choose next steps that match your ambition and constraints.",
              },
              {
                title: "Keep it iterative",
                desc: "The quadrants are not a linear process. Most teams cycle through them as their EKG evolves.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-2 opacity-80">
                <h3 className="text-xl font-semibold text-primary/80">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
