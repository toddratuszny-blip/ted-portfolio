import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  bgClassName?: string;
  hoverClassName?: string;
  resultsBgClassName?: string;
  resultsHoverClassName?: string;
  resultsTextClassName?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
  bgClassName = "bg-primary",
  hoverClassName = "hover:bg-[#7a162a]",
  resultsBgClassName,
  resultsHoverClassName,
  resultsTextClassName,
}: FeatureCardProps) {
  const isResults = title === "RESULTS & IMPACT";

  const backgroundClass = isResults
    ? resultsBgClassName || bgClassName
    : bgClassName;

  const hoverClass = isResults
    ? resultsHoverClassName || hoverClassName
    : hoverClassName;

  const textClass =
    isResults && resultsTextClassName
      ? resultsTextClassName
      : "text-white";

  const iconColorOverride =
    isResults && resultsTextClassName
      ? "[&_svg]:text-current [&_svg_*]:!stroke-current [&_svg_*]:!fill-current"
      : "";

  return (
    <div
      className={`${backgroundClass} ${hoverClass} cursor-pointer p-4 flex gap-4 transition-colors duration-300 ${className}`}
    >
      <div className={`shrink-0 ${textClass} ${iconColorOverride}`}>
        {icon}
      </div>

      <div>
        <h2 className={`${textClass} text-base md:text-lg font-bold`}>
          {title}
        </h2>

        <p className={`${textClass} text-sm md:text-base font-medium`}>
          {description}
        </p>
      </div>
    </div>
  );
}