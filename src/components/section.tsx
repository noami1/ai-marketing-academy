import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  id,
  wide,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  wide?: boolean;
}) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      <div className={cn("mx-auto w-full px-6", wide ? "max-w-7xl" : "max-w-6xl")}>
        {children}
      </div>
    </section>
  );
}
