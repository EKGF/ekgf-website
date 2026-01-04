import { redirect } from "next/navigation";

export const metadata = {
  title: "Maturity Model | EKGF",
  description:
    "Assess and improve your EKG implementation with our comprehensive maturity assessment framework.",
};

export default function MaturityRedirectPage() {
  redirect("https://maturity.ekgf.org");
}
