import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#303f9f] via-[#4051b5] to-[#5c6bc0] py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Enterprise Knowledge Graph
          </h1>
          <div className="mb-8 space-y-3">
            <p className="text-xl font-semibold text-white md:text-2xl">
              Keep GenAI grounded in context for secure, high-quality
              decisions.
            </p>
            <p className="text-lg text-white/90 md:text-xl">
              Put an EKG in front of your enterprise: a virtual
              semantic and operational layer, composed on demand at
              query/execution time, that governs access to trusted
              facts and data products across all internal and relevant
              external systems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#ff6f00] hover:bg-[#ff9800] text-white font-bold"
            >
              <a
                href="https://method.ekgf.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the Method
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/20 border-white/80 text-white hover:bg-white/30 font-bold"
            >
              <Link href="/membership">Join the Community</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px]" />
      <div className="absolute left-0 top-0 h-full w-full bg-linear-to-b from-transparent via-transparent to-background/50" />
    </section>
  );
}
