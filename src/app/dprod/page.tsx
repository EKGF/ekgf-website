import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Github } from "lucide-react";

const DPROD_SITE = "https://dprod.ekgf.vercel.app";

export const metadata = {
  title: "Data Product Ontology (DPROD) | EKGF",
  description:
    "DPROD is an OMG standard for describing Data Products using W3C Linked Data technologies. The full site — including the normative specification, core concepts, and adoption guide — now lives at dprod.ekgf.vercel.app.",
};

export default function DProdPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4051b5]">
            OMG Standard
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Data Product Ontology (DPROD)
          </h1>
          <p className="text-xl text-muted-foreground">
            An OMG standard for describing Data Products using W3C Linked
            Data technologies, enabling interoperability and discoverability
            in decentralized data ecosystems.
          </p>
        </div>

        <div className="rounded-xl border p-8 bg-linear-to-br from-[#4051b5]/5 to-[#303f9f]/5">
          <h2 className="mb-3 text-2xl font-bold">
            DPROD has its own site now
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            The full explainer — vision, core concepts, adoption guide,
            roadmap, and the complete normative specification with every
            published version — has moved to a dedicated site maintained in
            the{" "}
            <a
              href="https://github.com/EKGF/dprod"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
            >
              EKGF/dprod
            </a>{" "}
            repository, alongside the OWL ontology and SHACL shapes.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#4051b5] text-white hover:bg-[#303f9f]"
            >
              <a
                href={DPROD_SITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the DPROD site
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={`${DPROD_SITE}/spec-versions`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Specification
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/EKGF/dprod"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Looking for other EKGF resources? See{" "}
          <Link
            href="/resources"
            className="font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
          >
            Resources
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
