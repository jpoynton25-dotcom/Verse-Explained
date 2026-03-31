import type { Metadata } from "next";
import "@/app/globals.css";
import { MainNav } from "@/components/navigation/MainNav";
import { Footer } from "@/components/layout/Footer";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Bible verses explained simply | Verse Explained",
    description:
      "Clear meanings, daily scripture, and verses for real life. Understand Bible verses in plain English with context and practical takeaways.",
    path: "/"
  }),
  metadataBase: new URL(siteConfig.url)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SchemaScript id="org-schema" data={organizationSchema()} />
        <SchemaScript id="website-schema" data={websiteSchema()} />
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
