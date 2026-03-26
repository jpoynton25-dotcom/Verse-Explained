import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFoundPage() {
  return (
    <Container className="py-16">
      <div className="max-w-prose rounded-soft border border-line bg-white p-8 shadow-card">
        <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-text/80">The page you requested could not be found.</p>
        <Link href="/" className="mt-5 inline-block rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white">
          Back to home
        </Link>
      </div>
    </Container>
  );
}
