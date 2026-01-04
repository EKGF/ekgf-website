import { Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export type Testimonial = {
  quote: string;
  name: string;
  title?: string;
  organization?: string;
  metaLines?: readonly string[];
};

const defaultTestimonials: readonly Testimonial[] = [
  {
    quote:
      "The development of a collaborative environment is one of the principle operational goals of the EKG Foundation.",
    name: "Dennis E. Wisnosky",
    title: "CO-FOUNDER, EKG FOUNDATION",
    metaLines: [
      "FORMER CTO U.S. DEPARTMENT OF DEFENSE",
      "FIBO PROCESS OWNER",
    ],
  },
  {
    quote:
      "Data fragmentation has become a significant liability for firms who wind up spending countless hours and significant money moving data from one plane to another and reconciling data meaning. The more cost-effective approach is to adopt semantic standards that are designed to resolve and map data in a uniform way across all data pipelines.",
    name: "Jacobus Geluk",
    title: "FOUNDER, EKGF",
    metaLines: [
      "CTO AT AGNOS.AI",
      "FORMER FELLOW ARCHITECT AT BNY MELLON",
    ],
  },
  {
    quote:
      "The Foundation is defining a set of standard criteria for evaluating capability readiness in EKG environments. We are working on the construction of a master portal of published ontologies, use cases, and other resources needed for sustainable knowledge graph operations.",
    name: "Michael Atkin",
    title: "CO-FOUNDER, EKGF",
    metaLines: ["CO-FOUNDER AND FORMER CEO OF EDM COUNCIL"],
  },
  {
    quote:
      "EKG methods and reusable artifacts help teams move from experiments to repeatable knowledge-powered delivery.",
    name: "Community member",
    organization: "EKGF",
  },
  {
    quote:
      "Standards-first collaboration creates shared meaning across organizations—and makes knowledge graphs sustainable.",
    name: "Working group participant",
    organization: "EKGF",
  },
];

export const Testimonials = ({
  className,
  testimonials = defaultTestimonials,
}: {
  className?: string;
  testimonials?: readonly Testimonial[];
}) => {
  return (
    <section className={cn("py-16 md:py-24 bg-muted/30", className)}>
      <div className="container max-w-screen-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            What community leaders and practitioners say about EKGF
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Card
              // eslint-disable-next-line react/no-array-index-key
              key={`${t.name}-${idx}`}
              className="h-full border-2 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#4051b5]"
            >
              <CardContent className="pt-6">
                <figure className="flex h-full flex-col">
                  <blockquote className="relative flex-1 text-base leading-relaxed text-foreground/90">
                    <Quote className="mb-4 h-6 w-6 text-primary/70" />
                    <p className="text-pretty">“{t.quote}”</p>
                  </blockquote>
                  <CardFooter className="mt-6 border-t pt-6 px-0">
                    <figcaption className="text-sm">
                      <div className="font-semibold text-foreground">
                        {t.name === "Dennis E. Wisnosky" ? (
                          <a
                            href="https://en.wikipedia.org/wiki/Dennis_E._Wisnosky"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {t.name}
                          </a>
                        ) : (
                          t.name
                        )}
                      </div>
                      {(t.title ?? t.organization) ? (
                        <div className="text-muted-foreground">
                          {[t.title, t.organization]
                            .filter(Boolean)
                            .join(" · ")}
                        </div>
                      ) : null}
                      {t.metaLines ? (
                        <div className="mt-1 space-y-1 text-muted-foreground">
                          {t.metaLines.map((line) => (
                            <div key={line}>{line}</div>
                          ))}
                        </div>
                      ) : null}
                    </figcaption>
                  </CardFooter>
                </figure>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
