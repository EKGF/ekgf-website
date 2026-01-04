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
              About EKGF
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
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
              , established to define best practices and mature the
              marketplace for Enterprise Knowledge Graph (EKG)
              adoption.
            </p>
            <p className="text-lg text-muted-foreground">
              Our work spans standards, methods, reusable artifacts,
              community engagement, and advocacy—helping teams design,
              build, and improve enterprise knowledge graphs over
              time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
