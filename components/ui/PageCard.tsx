import Link from "next/link";

type PageCardProps = {
  href: string;
  title: string;
  description: string;
};

export const PageCard = ({ href, title, description }: PageCardProps) => {
  return (
    <Link href={href} className="group block rounded-soft border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-accent">
      <h3 className="text-lg font-semibold text-text group-hover:text-accent">{title}</h3>
      <p className="mt-2 text-sm text-text/75">{description}</p>
    </Link>
  );
};
