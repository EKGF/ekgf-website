import { redirect } from "next/navigation";

export const metadata = {
  title: "EKG Catalog | EKGF",
  description:
    "Browse the catalog of reusable EKG components and implementation patterns for building governed knowledge graphs.",
};

export default function CatalogRedirectPage() {
  redirect("https://catalog.ekgf.org/use-case/client-360/");
}
