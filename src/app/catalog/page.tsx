import { redirect } from "next/navigation";

export const metadata = {
  title: "EKG Catalog | EKGF",
  description:
    "Browse the catalog of EKG components, patterns, and best practices for building knowledge graphs.",
};

export default function CatalogRedirectPage() {
  redirect("https://catalog.ekgf.org");
}
