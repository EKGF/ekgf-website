import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background/50">
      <div className="container py-12 md:py-24 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About EKGF</h3>
            <p className="text-sm text-muted-foreground">
              Keep GenAI grounded in context for secure, high-quality
              decisions. EKGF is the Enterprise Knowledge Graph Forum
              at OMG.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Documentation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/quadrants"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  The EKG Quadrants
                </Link>
              </li>
              <li>
                <a
                  href="https://method.ekgf.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Method
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.ekgf.org/use-case/client-360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Catalog
                </a>
              </li>
              <li>
                <a
                  href="https://maturity.ekgf.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Maturity Model
                </a>
              </li>
              <li>
                <a
                  href="https://principles.ekgf.org/principle/#10-principles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Principles
                </a>
              </li>
              <li>
                <Link
                  href="/dprod"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  DPROD
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/EKGF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/EKG_Foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/EKGF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/EKGF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            Copyright © {new Date().getFullYear()} Object Management
            Group®, OMG® | All Rights Reserved
          </p>
          <p className="mt-2">
            An initiative under{" "}
            <a
              href="https://omg.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Object Management Group (OMG)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
