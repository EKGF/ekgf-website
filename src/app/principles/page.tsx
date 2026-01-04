import { redirect } from "next/navigation";

export const metadata = {
  title: "Principles & Manifesto | EKGF",
  description:
    "Core principles and manifesto for Enterprise Knowledge Graphs, guiding strategic implementation.",
};

export default function PrinciplesRedirectPage() {
  redirect("https://principles.ekgf.org");
}
