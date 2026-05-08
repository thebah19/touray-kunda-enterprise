import { Bath, Blocks, Cable, Drill, Lightbulb, Plug, ShowerHead, Toilet, Wrench } from "lucide-react";
import Image from "next/image";
import { cn, getOptimizedImageUrl } from "@/lib/utils";

const iconMap = {
  "building-materials": Blocks,
  "plumbing-supplies": Wrench,
  "toilets-sanitary-ware": Toilet,
  "pipes-fittings": ShowerHead,
  "electrical-supplies": Plug,
  "lighting-solutions": Lightbulb,
  "tiles-finishing": Bath,
  "tools-accessories": Drill,
  cable: Cable
};

export function ProductArt({
  category,
  label,
  className,
  imageUrl,
  large = false
}: {
  category: string;
  label: string;
  className?: string;
  imageUrl?: string;
  large?: boolean;
}) {
  const Icon = iconMap[category as keyof typeof iconMap] ?? Blocks;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.3rem] bg-gradient-to-br from-sky-50 via-white to-blue-100",
        large ? "min-h-96" : "aspect-[4/3]",
        className
      )}
    >
      {imageUrl ? (
        <Image
          src={getOptimizedImageUrl(imageUrl, large ? 1200 : 760)}
          alt={label}
          fill
          sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-[#041528]/70 via-primary/10 to-white/10" />
      <div className="absolute -right-12 -top-12 size-40 rounded-full bg-sky-300/25" />
      <div className="absolute -bottom-14 -left-14 size-44 rounded-full bg-primary/15" />
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <div>
          <div className="mb-3 grid size-12 place-items-center rounded-2xl bg-white text-primary shadow-xl">
            <Icon className="size-6" strokeWidth={1.8} />
          </div>
          <p className="max-w-[16rem] text-sm font-black uppercase tracking-[0.16em] text-white drop-shadow">{label}</p>
        </div>
        <div className="h-2 w-20 shrink-0 rounded-full bg-destructive" />
      </div>
    </div>
  );
}
