import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Network,
  FileJson,
  GitBranch,
  Shield,
  ExternalLink,
  Users,
  BookOpen,
  Megaphone,
} from "lucide-react";

export const metadata = {
  title: "Data Product Ontology (DPROD) | EKGF",
  description:
    "An OMG standardization effort for describing Data Products using W3C technologies (especially DCAT), enabling interoperability and discoverability across platforms.",
};

export default function DProdPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Data Product Ontology (DPROD)
          </h1>
          <p className="text-xl text-muted-foreground">
            An OMG standard for describing Data Products using W3C
            Linked Data technologies, enabling interoperability and
            discoverability in decentralized data ecosystems
          </p>
        </div>

        <section className="mb-16">
          <div className="rounded-lg border p-8 bg-linear-to-br from-[#4051b5]/5 to-[#303f9f]/5">
            <h2 className="mb-4 text-2xl font-bold">
              What is DPROD?
            </h2>
            <p className="mb-4 text-lg">
              The Data Product Ontology (DPROD) is an{" "}
              <a
                href="https://www.omg.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
              >
                Object Management Group (OMG)
              </a>{" "}
              standard that profiles the W3C Data Catalog Vocabulary
              (DCAT) to specifically describe Data Products. As
              organizations increasingly adopt decentralized data
              architectures like Data Mesh, DPROD provides the
              standardization needed to ensure interoperability and
              unlock the full potential of distributed data
              ecosystems.
            </p>
            <p className="text-lg">
              Built on established W3C technologies including DCAT,
              RDF, OWL, SHACL, and PROV, DPROD offers a clear schema
              for describing data products, ensuring they are
              discoverable, interoperable, and treated with the same
              level of accountability as traditional products.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">
            Origins &amp; Standardization
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-[#4051b5] mb-4" />
                <CardTitle>Working Group Leadership</CardTitle>
                <CardDescription className="text-base mt-2">
                  DPROD is developed in the EKGF community and edited
                  by{" "}
                  <a
                    href="https://www.linkedin.com/in/tonyseale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                  >
                    Tony Seale (Chair)
                  </a>{" "}
                  together with editors including Natasa Varytimou,
                  Pete Rivett, and Marcel Fröhlich. Setting up the
                  DPROD working group was an initiative by{" "}
                  <a
                    href="https://www.linkedin.com/in/jgeluk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                  >
                    Jacobus Geluk
                  </a>
                  .
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Megaphone className="h-10 w-10 text-[#ff6f00] mb-4" />
                <CardTitle>OMG “Request for Comments”</CardTitle>
                <CardDescription className="text-base mt-2">
                  OMG published the DPROD proposed specification for
                  public comment as part of its standardization
                  process, focused on improving discoverability,
                  interoperability, and reducing vendor lock-in across
                  data marketplaces.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Key Benefits</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Network className="h-10 w-10 text-[#4051b5] mb-4" />
                <CardTitle>Decentralized Architecture</CardTitle>
                <CardDescription className="text-base mt-2">
                  Enable Data Mesh and other decentralized data
                  architectures by providing standard methods to
                  describe data products consistently across platforms
                  and domains.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <FileJson className="h-10 w-10 text-[#ff6f00] mb-4" />
                <CardTitle>Standardized Metadata</CardTitle>
                <CardDescription className="text-base mt-2">
                  Eliminate inconsistent metadata across data products
                  with an OMG standard framework that leverages W3C
                  technologies for machine-readable descriptions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <GitBranch className="h-10 w-10 text-[#4051b5] mb-4" />
                <CardTitle>Input & Output Ports</CardTitle>
                <CardDescription className="text-base mt-2">
                  Clearly define how data enters and leaves data
                  products through standardized input and output
                  ports, supporting various formats and protocols.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-[#ff6f00] mb-4" />
                <CardTitle>Data Governance</CardTitle>
                <CardDescription className="text-base mt-2">
                  Integrate with ODRL for rights management, PROV for
                  lineage, and DQV for quality metrics, ensuring
                  comprehensive data governance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">
            Articles &amp; Talks
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="mt-1 h-6 w-6 text-[#4051b5]" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Tony Seale: Data Products &amp; Ontologies (DPROD)
                  </h3>
                  <p className="text-muted-foreground">
                    A practical introduction to DPROD as a “first
                    step” towards a distributed knowledge
                    graph—covering JSON-LD contexts, linkable product
                    identifiers, and connecting outputs to shared
                    semantic schemas.
                  </p>
                  <a
                    href="https://www.knowledge-graph-guys.com/blog/data-products-ontologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                  >
                    Read the article{" "}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="mt-1 h-6 w-6 text-[#ff6f00]" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    OMG announcement: DPROD published for public
                    comment
                  </h3>
                  <p className="text-muted-foreground">
                    The official OMG news release explains the
                    motivation for DPROD, the Request for Comments
                    process, and the problems it targets (inconsistent
                    metadata, limited discoverability, and
                    interoperability).
                  </p>
                  <a
                    href="https://www.omg.org/news/releases/pr2024/09-24-24.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                  >
                    Read the OMG release{" "}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="mt-1 h-6 w-6 text-[#4051b5]" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Workshop video: AI agents with reusable Data
                    Products (DPROD)
                  </h3>
                  <p className="text-muted-foreground">
                    A practical session on building reusable semantic
                    data products with DPROD and connecting them into
                    a decentralized knowledge graph for AI/agent use
                    cases.
                  </p>
                  <a
                    href="https://watch.knowledgegraph.tech/videos/day-2-classroom-225-build-your-neuro-symbolic-ai-agent-720p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                  >
                    Watch the video{" "}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="mt-1 h-6 w-6 text-[#ff6f00]" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    agnos.ai: Beyond Data Mesh—how Virtual Knowledge
                    Graphs prevent “Data Mess”
                  </h3>
                  <p className="text-muted-foreground">
                    A perspective on why “data products” alone are not
                    enough—without a semantic foundation,
                    decentralized ownership tends to create
                    fragmentation. Links Data Mesh concepts to
                    operational knowledge graphs and governance.
                  </p>
                  <a
                    href="https://agnos.ai/insights/article/beyond-data-mesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                  >
                    Read the article{" "}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="mt-1 h-6 w-6 text-[#4051b5]" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Podcast: Knowledge-first Data Products &amp; the
                    Data Economy (Jacobus Geluk)
                  </h3>
                  <p className="text-muted-foreground">
                    A discussion of use case-driven approaches and
                    semantic coordination as foundations for scalable
                    data product marketplaces—useful context for why
                    standards like DPROD matter.
                  </p>
                  <a
                    href="https://agnos.ai/insights/podcast/knowledge-graph-data-economy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                  >
                    Open the podcast page{" "}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="mt-1 h-6 w-6 text-[#4051b5]" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Ontologies &amp; LLMs (Tony Seale)
                  </h3>
                  <p className="text-muted-foreground">
                    Background reading on why formal semantics matter
                    for AI—and why linking data products to shared
                    concepts helps make data more
                    machine-understandable.
                  </p>
                  <a
                    href="https://hyperight.com/beyond-the-hype-how-ontologies-unlock-the-potential-of-large-language-models-tony-seale-the-knowledge-graph-guy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                  >
                    Read the article{" "}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Core Concepts</h2>
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Data Product
              </h3>
              <p className="text-muted-foreground">
                A rational, managed, and governed collection of data
                with purpose, value, and ownership, meeting consumer
                needs over a planned lifecycle. Data products have
                input and output ports, code, and metadata.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Ports (Data Services)
              </h3>
              <p className="text-muted-foreground">
                Digital interfaces that provide access to datasets.
                Input ports bring data into the product, while output
                ports share generated data. Ports specify connection
                details, formats, and link to datasets with shared
                schemas.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Distributions & Datasets
              </h3>
              <p className="text-muted-foreground">
                Distributions specify physical representations (CSV,
                JSON, Parquet) and access methods. Datasets provide
                logical models and can conform to shared standards
                like FIBO, CDM, or custom ontologies using SHACL or
                OWL.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Use Cases</h2>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-[#4051b5] bg-muted/50 p-4">
              <h4 className="mb-1 font-semibold">
                Data Mesh Implementation
              </h4>
              <p className="text-sm text-muted-foreground">
                Enable domain-oriented decentralized data ownership
                with standardized product descriptions
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[#ff6f00] bg-muted/50 p-4">
              <h4 className="mb-1 font-semibold">
                Data Marketplaces
              </h4>
              <p className="text-sm text-muted-foreground">
                Build internal or external data marketplaces with
                discoverable, well-described data products
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[#4051b5] bg-muted/50 p-4">
              <h4 className="mb-1 font-semibold">
                Multi-Cloud Integration
              </h4>
              <p className="text-sm text-muted-foreground">
                Integrate data products across different cloud
                platforms and vendors with vendor-neutral descriptions
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[#ff6f00] bg-muted/50 p-4">
              <h4 className="mb-1 font-semibold">
                Data Governance & Compliance
              </h4>
              <p className="text-sm text-muted-foreground">
                Track lineage, enforce policies, and maintain quality
                metrics across all data products
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-linear-to-br from-[#4051b5] to-[#303f9f] text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-white mb-4">
                OMG Standard with W3C Technologies
              </CardTitle>
              <CardDescription className="text-white/90 text-base">
                DPROD is an OMG (Object Management Group) standard
                built on established W3C technologies including DCAT,
                RDF, OWL, SHACL, and PROV. The specification includes:
              </CardDescription>
              <ul className="mt-4 space-y-2 text-white/90">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Complete ontology with classes and properties
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>SHACL shapes for validation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    JSON-LD context for easy JSON integration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Worked examples and best practices</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-[#4051b5] hover:bg-white/90"
                >
                  <a
                    href="https://ekgf.github.io/dprod/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Specification
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white/90 text-[#4051b5] hover:bg-white"
                >
                  <a
                    href="https://www.omg.org/news/releases/pr2024/09-24-24.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    OMG Public Comment Notice
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <a
                    href="https://github.com/EKGF/dprod"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>

        <section>
          <div className="rounded-lg border p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Get Started with DPROD
            </h2>
            <p className="mb-6 text-muted-foreground">
              Ready to standardize your data products? Explore the
              documentation or reach out to the EKGF community for
              support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="/resources">View Resources</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
