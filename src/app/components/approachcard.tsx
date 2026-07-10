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
    <div className="w-full py-8 px-7 flex flex-col gap-4.5 border border-white/32 bg-white/6 backdrop-blur-[7px] text-white ">
      <div className="w-fit px-4 font-sora py-2 rounded-full border border-white/33 bg-white/12 flex items-center justify-center">
        <span className="text-xl font-normal tracking-wide text-[#EAEAEA]">
          {stepNumber}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-bold tracking-tight leading-tight">
          {title}
        </h4>
        <p className="text-xl text-neutral-300 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
