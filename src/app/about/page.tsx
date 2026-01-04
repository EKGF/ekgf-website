import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building2,
  Users,
  Target,
  Handshake,
  Github,
} from "lucide-react";

export const metadata = {
  title: "About | EKGF",
  description:
    "Learn about the Enterprise Knowledge Graph Forum and our mission to promote semantic standards and best practices.",
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
          About EKGF
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            The Enterprise Knowledge Graph Forum (EKGF) is an
            initiative under the Object Management Group® (OMG®),
            established to define best practices and mature the
            marketplace for Enterprise Knowledge Graph (EKG) adoption.
          </p>

          <p>
            We were founded by industry practitioners who wanted a
            simple outcome: make Enterprise Knowledge Graph work
            easier in the real world. Inside OMG, we deliver that
            through a two-track model—so you can participate at the
            level that fits your organization.
          </p>

          <div className="my-10 grid gap-6 md:grid-cols-2 not-prose">
            <div className="rounded-lg border bg-background/60 p-6">
              <h3 className="text-xl font-semibold mb-2">
                EKGF Managed Community (the main community)
              </h3>
              <p className="text-muted-foreground">
                This is the outward-facing home for members and
                practitioners. It’s where most collaboration happens
                and where the bulk of EKGF work products are
                developed.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                For the authoritative definition and guidance on EKG,
                start with{" "}
                <Link
                  href="/principles"
                  className="text-primary hover:underline"
                >
                  EKG Principles
                </Link>
                .
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="https://www.omg.org/communities/enterprise-knowledge-graph-forum.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View the EKGF Managed Community listing at OMG
                </a>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Practical guidance and best practices</li>
                <li>Reusable artifacts and reference materials</li>
                <li>
                  Work products like the{" "}
                  <Link
                    href="/principles"
                    className="text-primary hover:underline"
                  >
                    Principles
                  </Link>
                  ,{" "}
                  <Link
                    href="/method"
                    className="text-primary hover:underline"
                  >
                    Method
                  </Link>
                  ,{" "}
                  <Link
                    href="/maturity"
                    className="text-primary hover:underline"
                  >
                    Maturity Model
                  </Link>
                  ,{" "}
                  <Link
                    href="/catalog"
                    className="text-primary hover:underline"
                  >
                    Catalog
                  </Link>
                  , and{" "}
                  <Link
                    href="/dprod"
                    className="text-primary hover:underline"
                  >
                    DPROD
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-background/60 p-6">
              <h3 className="text-xl font-semibold mb-2">
                EKG Platform Task Force (EKGPTF) (standards track)
              </h3>
              <p className="text-muted-foreground">
                A small OMG Standards Development Organization (SDO)
                task force focused on formal standardization—turning
                community best practices into OMG specifications,
                reference models, and discussion papers.
              </p>
              <p className="mt-3 text-sm">
                <a
                  href="https://www.omg.org/ekg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Learn more about EKGPTF at OMG
                </a>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Formal standardization track inside OMG</li>
                <li>Works closely with the EKGF Managed Community</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                If you’re new here, start with the EKGF Managed
                Community and its initiatives.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 my-12 not-prose">
            <div className="rounded-lg border p-6">
              <Building2 className="h-10 w-10 text-[#4051b5] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Our Organization
              </h3>
              <p className="text-muted-foreground">
                EKGF is part of OMG’s standards ecosystem—bringing
                practitioners together to advance EKG standards,
                guidance, and adoption.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <Target className="h-10 w-10 text-[#ff6f00] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To make Enterprise Knowledge Graph adoption practical
                and sustainable—by publishing community-driven
                guidance (Principles, Method, Maturity Model, Catalog,
                DPROD), promoting semantic interoperability, and
                shaping standards with OMG where it matters.
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
            EKGF within OMG
          </h2>

          <p>
            EKGF is an initiative under the{" "}
            <a
              href="https://omg.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Object Management Group (OMG)
            </a>
            . EKGF is an OMG Managed Community, and we work closely
            with the Enterprise Knowledge Graph Platform Task Force
            (EKGPTF) on formal standardization matters—while the bulk
            of day-to-day collaboration continues within the EKGF
            community.
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
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
