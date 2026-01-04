import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import {
  Mail,
  MapPin,
  Users,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export const metadata = {
  title: "Contact | EKGF",
  description:
    "Get in touch with the Enterprise Knowledge Graph Forum team. We are here to help with your EKG journey.",
};

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions about enterprise knowledge graphs? We are
            here to help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border p-8">
              <h2 className="mb-6 text-2xl font-bold">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#4051b5] mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:contact@ekgf.org"
                      className="text-sm text-muted-foreground hover:text-[#4051b5] transition-colors"
                    >
                      contact@ekgf.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#4051b5] mt-0.5" />
                  <div>
                    <p className="font-medium">
                      Initiative under OMG
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Object Management Group
                    </p>
                    <a
                      href="https://omg.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline transition-colors"
                    >
                      omg.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-[#4051b5] mt-0.5" />
                  <div>
                    <p className="font-medium">Leadership Team</p>
                    <Link
                      href="/team"
                      className="text-sm text-primary hover:underline transition-colors"
                    >
                      Meet the team
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Connect Online
              </h3>
              <div className="space-y-3">
                <a
                  href="https://twitter.com/EKG_Foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#4051b5] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span>@EKG_Foundation</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/EKGF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#4051b5] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>EKGF</span>
                </a>
                <a
                  href="https://github.com/EKGF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-linear-to-br from-[#4051b5] to-[#303f9f] p-6 text-white">
              <h3 className="mb-2 text-lg font-semibold">
                Looking for documentation?
              </h3>
              <p className="text-sm text-white/90 mb-4">
                Browse our comprehensive guides and resources.
              </p>
              <a
                href="/resources"
                className="inline-block rounded bg-white px-4 py-2 text-sm font-medium text-[#4051b5] hover:bg-white/90 transition-colors"
              >
                View Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
