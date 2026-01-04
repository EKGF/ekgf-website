import { Hero } from "@/components/Hero";
import { DocumentationGrid } from "@/components/DocumentationGrid";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DocumentationGrid />
      <Testimonials />
      <section className="py-16 bg-muted/30">
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              What is an Enterprise Knowledge Graph (EKG)?
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              An EKG is a semantics-first foundation for an
              enterprise: it defines context (concepts, relationships,
              rules) and connects that meaning to high-quality,
              reusable facts and data products—so systems can
              interpret data consistently. In practice, it acts as a
              governed semantic layer in front of your internal and
              relevant external systems.
            </p>
            <p className="text-lg text-muted-foreground">
              The Enterprise Knowledge Graph Forum (EKGF) is an
              initiative under the{" "}
              <a
                href="https://omg.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Object Management Group (OMG)
              </a>
              , publishing principles, methods, and work products that
              help teams build trustworthy EKGs—and pair them with
              GenAI safely.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
