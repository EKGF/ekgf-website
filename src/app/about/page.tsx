import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Users, Target, Handshake } from "lucide-react";

export const metadata = {
  title: "About | EKGF",
  description:
    "Learn about the Enterprise Knowledge Graph Foundation and our mission to promote semantic standards and best practices.",
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
          About EKGF
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            The Enterprise Knowledge Graph Foundation (EKGF) is a
            non-profit organization dedicated to promoting semantic
            standards and best practices to support the growing
            enterprise knowledge graph marketplace.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 my-12 not-prose">
            <div className="rounded-lg border p-6">
              <Building2 className="h-10 w-10 text-[#4051b5] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Our Organization
              </h3>
              <p className="text-muted-foreground">
                A partnership with the Object Management Group (OMG),
                establishing standards for enterprise knowledge
                graphs.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <Target className="h-10 w-10 text-[#ff6f00] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To advance semantic technology adoption and provide
                shared infrastructure for evaluating data quality.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <Users className="h-10 w-10 text-[#4051b5] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Community
              </h3>
              <p className="text-muted-foreground">
                Bringing together experts, practitioners, and
                organizations to share knowledge and best practices.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <Handshake className="h-10 w-10 text-[#ff6f00] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Collaboration
              </h3>
              <p className="text-muted-foreground">
                Working with industry leaders to develop comprehensive
                frameworks and methodologies.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            What We Do
          </h2>

          <p>
            EKGF focuses on three core areas to advance the enterprise
            knowledge graph ecosystem:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            1. Semantic Technology Growth
          </h3>
          <p>
            We promote the adoption and advancement of semantic
            technologies that enable organizations to create, manage,
            and leverage enterprise knowledge graphs effectively.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            2. Best Practices Development
          </h3>
          <p>
            Through our comprehensive documentation and frameworks,
            including the Use Case Tree Method and Maturity Model, we
            provide practical guidance for implementing knowledge
            graphs at enterprise scale.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            3. Quality Standards
          </h3>
          <p>
            We develop shared infrastructure and standards for
            evaluating data quality, ensuring that enterprise
            knowledge graphs meet the highest standards of accuracy,
            completeness, and reliability.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            Partnership with OMG
          </h2>

          <p>
            EKGF operates in partnership with the{" "}
            <a
              href="https://omg.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4051b5] hover:text-[#5c6bc0] font-semibold"
            >
              Object Management Group (OMG)
            </a>
            , a leading international consortium that develops
            enterprise integration standards. This partnership ensures
            that our work aligns with established industry standards
            and reaches a global audience of practitioners.
          </p>

          <div className="mt-12 rounded-lg bg-muted p-8 not-prose">
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <p className="text-muted-foreground mb-6">
              Join our community and contribute to the advancement of
              enterprise knowledge graphs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/EKGF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
