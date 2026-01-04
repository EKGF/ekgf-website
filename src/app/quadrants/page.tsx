import type { Metadata } from "next";
import { QuadrantsDiagram } from "@/components/QuadrantsDiagram";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 md:mb-14">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            The EKG Quadrants
          </h1>
          <p className="text-xl text-muted-foreground">
            A compact way to understand how EKGF’s resources fit together.
          </p>
        </header>

        <div className="mb-12">
          <QuadrantsDiagram />
        </div>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Why “quadrants”?</CardTitle>
              <CardDescription className="text-base mt-2">
                The EKG body of work answers complementary questions:
                <span className="block mt-3">
                  <span className="font-semibold">How</span> do we build an EKG
                  consistently? <span className="font-semibold">What</span>{" "}
                  reusable components can we use? <span className="font-semibold">Why</span>{" "}
                  are we building it this way? And how do we{" "}
                  <span className="font-semibold">improve</span> over time?
                </span>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Use Case Tree at the center</CardTitle>
              <CardDescription className="text-base mt-2">
                The Use Case Tree connects strategy to implementation. It helps
                you derive capabilities, prioritize work, align stakeholders,
                and create a shared “source of truth” for what your EKG must
                support.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-3xl font-bold">How to use this map</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Start with the Method</CardTitle>
                <CardDescription className="text-base mt-2">
                  Use the method to structure discovery, planning, and delivery.
                  When you need concrete building blocks, jump to the Catalog.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Use Principles as guardrails</CardTitle>
                <CardDescription className="text-base mt-2">
                  The principles help you make good trade-offs—especially when
                  the “right” answer depends on context.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Assess with Maturity</CardTitle>
                <CardDescription className="text-base mt-2">
                  Measure where you are, identify gaps, and choose next steps
                  that match your ambition and constraints.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Keep it iterative</CardTitle>
                <CardDescription className="text-base mt-2">
                  The quadrants are not a linear process. Most teams cycle
                  through them as their EKG evolves.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

