import { redirect } from "next/navigation";

export const metadata = {
  title: "Use Case Tree Method | EKGF",
  description:
    "A comprehensive method to develop an Enterprise Knowledge Graph through use case trees and structured implementation.",
};

export default function MethodRedirectPage() {
  redirect("https://method.ekgf.org");
}
