import { redirect } from "next/navigation";

export const metadata = {
  title: "Use Case Tree Method | EKGF",
  description:
    "A business-owned method to deliver governed EKG capabilities—one use case at a time—and keep GenAI grounded in context.",
};

export default function MethodRedirectPage() {
  redirect("https://method.ekgf.org");
}
