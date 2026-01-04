import Link from "next/link";
import { ExternalLink, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Team | EKGF",
  description:
    "Meet the EKGF leadership team: the co-chairs guiding the EKGF Managed Community and standards work within OMG.",
};

type Leader = {
  name: string;
  organization: string;
  organizationUrl?: string;
  roles: readonly string[];
};

const leadershipTeam: readonly Leader[] = [
  {
    name: "Jacobus Geluk",
    organization: "agnos.ai",
    organizationUrl: "https://agnos.ai",
    roles: ["Co-chair, EKGF Managed Community", "Co-chair, EKGPTF"],
  },
  {
    name: "Pete Rivett",
    organization: "Intuitive.ai",
    organizationUrl: "https://intuitive.ai",
    roles: ["Co-chair, EKGF Managed Community", "Co-chair, EKGPTF"],
  },
  {
    name: "Marcel Fröhlich",
    organization: "eccenca",
    organizationUrl: "https://eccenca.com",
    roles: ["Co-chair, EKGF Managed Community", "Co-chair, EKGPTF"],
  },
];

const workgroupChairs: readonly Leader[] = [
  {
    name: "Tony Seale",
    organization: "DPROD Workgroup",
    roles: ["Chair, DPROD Workgroup"],
  },
];

export default function TeamPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Leadership Team
          </h1>
          <p className="max-w-3xl text-xl text-muted-foreground">
            The EKGF Managed Community is guided by a small leadership
            team that also co-chairs the standards track within OMG
            (EKGPTF).
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {leadershipTeam.map((person) => (
            <Card key={person.name} className="h-full">
              <CardHeader>
                <Users className="h-10 w-10 text-[#4051b5] mb-4" />
                <CardTitle>{person.name}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {person.organizationUrl ? (
                    <a
                      href={person.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                    >
                      {person.organization}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    person.organization
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {person.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Currently active workgroups
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            Specific initiatives are supported by focused workgroups.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {workgroupChairs.map((person) => (
            <Card key={person.name} className="h-full">
              <CardHeader>
                <Users className="h-10 w-10 text-[#ff6f00] mb-4" />
                <CardTitle>{person.name}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {person.organizationUrl ? (
                    <a
                      href={person.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-[#4051b5] hover:text-[#5c6bc0] transition-colors"
                    >
                      {person.organization}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    person.organization
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {person.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8">
          <h2 className="mb-2 text-2xl font-bold">Get involved</h2>
          <p className="mb-6 text-muted-foreground">
            Want to participate in the EKGF community or contribute to
            the work products?
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">How EKGF works</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
