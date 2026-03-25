import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="h-fit rounded-[28px] bg-[var(--card)] p-5 shadow-xl shadow-zinc-200/60 ring-1 ring-zinc-100 dark:shadow-black/40 dark:ring-zinc-800">
      <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-200/80 dark:ring-zinc-700">
        <Image
          src="/profile.jpg"
          alt="Marvin Barro — portrait at the waterfront at golden hour"
          width={480}
          height={560}
          className="aspect-[4/5] w-full object-cover object-[center_30%]"
          priority
        />
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-xs font-medium tracking-widest text-zinc-500 dark:text-zinc-400">
          CURRENTLY OPEN FOR
        </p>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Freelance collaborations
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Interfaces, design systems, and front-end audits.
        </p>
      </div>
    </div>
  );
}
