import { redirect } from "next/navigation";

export const metadata = {
  title: "Principles & Manifesto | EKGF",
  description:
    "Core principles for Enterprise Knowledge Graphs—guiding governed implementation and keeping GenAI grounded in context.",
};

export default function PrinciplesRedirectPage() {
  redirect("https://principles.ekgf.org/principle/#10-principles");
}
