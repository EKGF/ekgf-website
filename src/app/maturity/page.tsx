import { redirect } from "next/navigation";

export const metadata = {
  title: "Maturity Model | EKGF",
  description:
    "Assess and improve your governed EKG implementation with our maturity assessment framework.",
};

export default function MaturityRedirectPage() {
  redirect("https://maturity.ekgf.org");
}
