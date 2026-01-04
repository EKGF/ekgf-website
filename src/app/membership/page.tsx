import Link from "next/link";
import {
  ExternalLink,
  Users,
  Building2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Membership | EKGF",
  description:
    "Join the Enterprise Knowledge Graph Forum (EKGF). Learn how membership works across the OMG Managed Community and the EKG Platform Task Force (EKGPTF).",
};

const omgManagedCommunityUrl =
  "https://www.omg.org/communities/enterprise-knowledge-graph-forum.htm";
const ekgptfUrl = "https://www.omg.org/ekg/";
const omgMembershipUrl = "https://www.omg.org/memberservices/";
const omgCommunitiesUrl = "https://www.omg.org/communities/";
const managedCommunityMemberFormUrl =
  "https://www.omg.org/registration/communities-membership-sdo-members.htm";
const managedCommunityNonMemberFormUrl =
  "https://www.omg.org/registration/communities-membership-non-member.htm";

export default function MembershipPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Membership
          </h1>
          <p className="max-w-3xl text-xl text-muted-foreground">
            Become a member of the Enterprise Knowledge Graph Forum
            (EKGF) and participate through two complementary OMG
            groupings: the EKGF Managed Community and the Enterprise
            Knowledge Graph Platform Task Force (EKGPTF).
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full bg-background/60">
            <CardHeader>
              <Users className="h-10 w-10 text-[#4051b5] mb-4" />
              <CardTitle>EKGF Managed Community</CardTitle>
              <CardDescription className="text-base mt-2">
                The outward-facing home for members and
                practitioners—where most day-to-day EKGF collaboration
                happens and work products are developed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>
                  Open to individuals and organizations at a lower
                  cost point
                </li>
                <li>
                  Most EKGF initiatives live here (Principles, Method,
                  Maturity, Catalog, and DPROD)
                </li>
                <li>
                  OMG SDO members can join the Managed Community at no
                  extra cost (still requires signup)
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={omgManagedCommunityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View community at OMG{" "}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about">How EKGF works</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full bg-background/60">
            <CardHeader>
              <Building2 className="h-10 w-10 text-[#ff6f00] mb-4" />
              <CardTitle>EKG Platform Task Force (EKGPTF)</CardTitle>
              <CardDescription className="text-base mt-2">
                A formal OMG Standards Development Organization (SDO)
                Task Force focused on standardization—turning
                community best practices into OMG specifications and
                reference materials.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Participation requires OMG SDO membership</li>
                <li>
                  SDO membership is enterprise-wide and includes
                  wholly-owned subsidiaries
                </li>
                <li>
                  Platform or Contributing level memberships include
                  voting rights in the standards process (per OMG
                  rules)
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={ekgptfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn about EKGPTF{" "}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={omgMembershipUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    OMG membership{" "}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-14">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            How to join
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            For Managed Community membership, choose the form that
            matches your current OMG status. For EKGPTF participation,
            apply for OMG SDO membership.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">
                  Managed Community (OMG SDO)
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  If your organization is already an OMG SDO member,
                  join the Managed Community at no additional cost.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a
                    href={managedCommunityMemberFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    OMG member form{" "}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">
                  Managed Community (non-member)
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  If you’re not an OMG SDO member, you can still join
                  the Managed Community through the non-member
                  membership form.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a
                    href={managedCommunityNonMemberFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Non-member form{" "}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">
                  OMG membership
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  To participate in EKGPTF, become an OMG member (SDO
                  membership required for the standards track).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full">
                  <a
                    href={omgMembershipUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Apply / learn more{" "}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <a
                  href={omgCommunitiesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:underline text-center"
                >
                  Learn about OMG Managed Communities
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            Who should join?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-[#4051b5] mb-4" />
                <CardTitle>Executives</CardTitle>
                <CardDescription className="text-base mt-2">
                  Leaders looking to realize the benefits (and
                  minimize the risks) of semantic standards and EKG
                  adoption, backed by proven methods and best
                  practices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Building2 className="h-10 w-10 text-[#ff6f00] mb-4" />
                <CardTitle>Vendors</CardTitle>
                <CardDescription className="text-base mt-2">
                  Vendors who want to make EKG adoption easier for
                  customers and improve interoperability across
                  products and platforms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Users className="h-10 w-10 text-[#4051b5] mb-4" />
                <CardTitle>Architects &amp; modelers</CardTitle>
                <CardDescription className="text-base mt-2">
                  Practitioners who want access to reusable
                  components, models, ontologies, and interfaces to
                  deploy in real environments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-[#ff6f00] mb-4" />
                <CardTitle>Consultants</CardTitle>
                <CardDescription className="text-base mt-2">
                  Advisors looking for best practices, reusable
                  assets, and a network of experienced practitioners
                  and potential clients.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-[#4051b5] mb-4" />
                <CardTitle>Academics</CardTitle>
                <CardDescription className="text-base mt-2">
                  Researchers contributing recognized work that builds
                  on existing frameworks to address real business
                  needs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="mt-14 rounded-lg bg-muted p-8">
          <h2 className="mb-2 text-2xl font-bold">Questions?</h2>
          <p className="mb-6 text-muted-foreground">
            If you’re unsure which path is right for you, we can help
            you find the best way to participate.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href={omgManagedCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                EKGF at OMG <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
