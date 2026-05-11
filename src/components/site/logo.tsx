import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Touray Kunda Enterprise home">
      <span className="grid size-14 place-items-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-sky-900/20 ring-1 ring-sky-100">
        <Image src="/tke-logo.png" alt="B.S.T Building Materials Plumbing & Electricals logo" width={56} height={56} className="size-full object-contain p-1" priority />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-black tracking-tight text-primary">Touray Kunda</span>
        <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-sky-600">Enterprise</span>
      </span>
    </Link>
  );
}
