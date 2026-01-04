import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#303f9f] via-[#4051b5] to-[#5c6bc0] py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Enterprise Knowledge Graph Foundation
          </h1>
          <p className="mb-8 text-xl text-white/95 md:text-2xl">
            Promoting semantic standards and best practices to support
            the growing enterprise knowledge graph marketplace
          </p>
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
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-background/50" />
    </section>
  );
}
