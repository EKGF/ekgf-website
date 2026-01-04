import { Hero } from "@/components/Hero";
import { DocumentationGrid } from "@/components/DocumentationGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DocumentationGrid />
      <section className="py-16 bg-muted/30">
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              About EKGF
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              The Enterprise Knowledge Graph Foundation (EKGF) is a
              non-profit organization dedicated to promoting semantic
              standards and best practices to support the growing
              enterprise knowledge graph marketplace.
            </p>
            <p className="text-lg text-muted-foreground">
              EKGF focuses on the growth of semantic technology, the
              adoption of best practices, and the implementation of a
              shared infrastructure for evaluating data quality. In
              partnership with the{" "}
              <a
                href="https://omg.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
              >
                Object Management Group (OMG)
              </a>
              , we provide comprehensive guidance for implementing
              enterprise knowledge graphs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
