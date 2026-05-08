import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  copy,
  align = "center",
  tone = "light",
  className
}: {
  title: string;
  copy?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-10 max-w-3xl", align === "center" ? "text-center" : "mx-0 text-left", className)}>
      <h2 className={cn("font-display text-3xl font-black tracking-[-0.04em] md:text-5xl", tone === "dark" ? "text-white" : "text-primary")}>
        {title}
      </h2>
      {copy ? (
        <p className={cn("mt-4 text-base leading-8 md:text-lg", tone === "dark" ? "text-sky-100" : "text-muted-foreground")}>{copy}</p>
      ) : null}
    </div>
  );
}
