import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Github,
  FileText,
  Download,
  ExternalLink,
  Network,
} from "lucide-react";

export const metadata = {
  title: "Resources | EKGF",
  description:
    "Access comprehensive resources, documentation, and tools for enterprise knowledge graph development.",
};

export default function ResourcesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground">
            Access our comprehensive documentation, tools, and
            community resources for building enterprise knowledge
            graphs.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Documentation</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/method" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-[#4051b5] mb-2" />
                  <CardTitle className="group-hover:text-[#4051b5]">
                    Use Case Tree Method
                  </CardTitle>
                  <CardDescription>
                    Complete methodology for EKG development
                  </CardDescription>
                  <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                </CardHeader>
              </Card>
            </a>

            <a href="/catalog" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <FileText className="h-8 w-8 text-[#ff6f00] mb-2" />
                  <CardTitle className="group-hover:text-[#4051b5]">
                    EKG Catalog
                  </CardTitle>
                  <CardDescription>
                    Components, patterns, and best practices
                  </CardDescription>
                  <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                </CardHeader>
              </Card>
            </a>

            <a href="/maturity" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <Download className="h-8 w-8 text-[#4051b5] mb-2" />
                  <CardTitle className="group-hover:text-[#4051b5]">
                    Maturity Model
                  </CardTitle>
                  <CardDescription>
                    Assessment framework for EKG implementations
                  </CardDescription>
                  <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                </CardHeader>
              </Card>
            </a>

            <a href="/principles" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-[#ff6f00] mb-2" />
                  <CardTitle className="group-hover:text-[#4051b5]">
                    Principles & Manifesto
                  </CardTitle>
                  <CardDescription>
                    Core principles for EKG development
                  </CardDescription>
                  <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                </CardHeader>
              </Card>
            </a>

            <a href="/dprod" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <Network className="h-8 w-8 text-[#4051b5] mb-2" />
                  <CardTitle className="group-hover:text-[#4051b5]">
                    Data Product Ontology
                  </CardTitle>
                  <CardDescription>
                    OMG standard for describing data products
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Community</h2>
          <Card>
            <CardHeader>
              <CardTitle>Connect with the Community</CardTitle>
              <CardDescription className="text-base mt-4">
                Join discussions, ask questions, and share knowledge
                with other EKG practitioners.
              </CardDescription>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button asChild>
                  <a
                    href="https://github.com/EKGF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://twitter.com/EKG_Foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://www.linkedin.com/company/EKGF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>

        <section>
          <Card className="bg-linear-to-br from-[#4051b5] to-[#303f9f] text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Need Help?
              </CardTitle>
              <CardDescription className="text-white/90 text-base mt-4">
                Our team is here to support your enterprise knowledge
                graph journey. Reach out with questions or feedback.
              </CardDescription>
              <div className="mt-6">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-[#4051b5] hover:bg-white/90"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </div>
    </div>
  );
}
