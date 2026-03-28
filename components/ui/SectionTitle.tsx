import type { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  description?: ReactNode;
};

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="max-w-prose">
      <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-text/80">{description}</p> : null}
    </div>
  );
};
