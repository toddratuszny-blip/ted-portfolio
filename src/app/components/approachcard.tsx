interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
}

export default function ApproachCard({
  stepNumber,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="w-full rounded-2xl border border-white/15 bg-white/5 px-8 py-7 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-white/8">
      <div className="mb-5 flex items-center gap-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <span className="font-sora text-sm font-semibold tracking-[0.15em] text-primary">
            {stepNumber}
          </span>
        </div>

        <h4 className="text-2xl font-semibold leading-tight tracking-tight text-white md:text-[30px]">
          {title}
        </h4>
      </div>

      <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
        {description}
      </p>
    </div>
  );
}