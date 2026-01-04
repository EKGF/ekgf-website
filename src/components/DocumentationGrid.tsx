import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Database,
  TrendingUp,
  Lightbulb,
  Network,
} from "lucide-react";

const documentationSites = [
  {
    title: "Use Case Tree Method",
    description:
      "A comprehensive method to develop an Enterprise Knowledge Graph through use case trees and structured implementation.",
    url: "/method",
    externalUrl: "https://method.ekgf.org",
    icon: BookOpen,
  },
  {
    title: "EKG Catalog",
    description:
      "Browse the catalog of EKG components, patterns, and best practices for building knowledge graphs.",
    url: "/catalog",
    externalUrl: "https://catalog.ekgf.org/use-case/client-360/",
    icon: Database,
  },
  {
    title: "Maturity Model",
    description:
      "Assess and improve your EKG implementation with our comprehensive maturity assessment framework.",
    url: "/maturity",
    externalUrl: "https://maturity.ekgf.org",
    icon: TrendingUp,
  },
  {
    title: "Principles & Manifesto",
    description:
      "Core principles and manifesto for Enterprise Knowledge Graphs, guiding strategic implementation.",
    url: "/principles",
    externalUrl:
      "https://principles.ekgf.org/principle/#10-principles",
    icon: Lightbulb,
  },
  {
    title: "Data Product Ontology",
    description:
      "OMG standard for describing Data Products using W3C technologies, enabling decentralized data architectures.",
    url: "/dprod",
    externalUrl: "https://ekgf.github.io/dprod/",
    icon: Network,
  },
];

export function DocumentationGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-screen-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Documentation & Resources
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore principles, methods, and work products to build
            governed enterprise knowledge graphs and keep GenAI
            grounded in context
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {documentationSites.map((site) => {
            const Icon = site.icon;
            return (
              <a key={site.url} href={site.url} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-[#4051b5]">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-[#4051b5] to-[#303f9f] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-[#4051b5] transition-colors">
                      {site.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {site.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
