import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enterprise Knowledge Graph | EKGF",
  description:
    "Keep GenAI grounded in context for secure, high-quality decisions. Explore EKGF’s principles, methods, and work products for building governed Enterprise Knowledge Graphs.",
  keywords: [
    "Enterprise Knowledge Graph",
    "EKG",
    "Semantic Standards",
    "Knowledge Graph",
    "Ontology",
    "EKGF",
    "OMG",
  ],
  authors: [
    {
      name: "Object Management Group (OMG) Enterprise Knowledge Graph Forum",
    },
  ],
  openGraph: {
    title: "Enterprise Knowledge Graph",
    description:
      "Keep GenAI grounded in context for secure, high-quality decisions.",
    url: "https://ekgf.org",
    siteName: "EKGF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Knowledge Graph",
    description:
      "Keep GenAI grounded in context for secure, high-quality decisions.",
    site: "@EKG_Foundation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="Q_9d2He8XxoBrVAXrAXsEm2R_UrGZ6KcOCXkeNRQ058"
        />
        <script
          // Keep theme consistent across *.ekgf.org via shared cookie.
          // This runs before hydration to minimize "flash" on first paint.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=document.cookie.match(/(^|;\\s*)ekgf-theme=([^;]*)/);var t=m?decodeURIComponent(m[2]):"";if(t==="dark"||t==="light"){try{localStorage.setItem("theme",t)}catch(e){};if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}else{document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-9LCW4TSSRP" />
    </html>
  );
}
