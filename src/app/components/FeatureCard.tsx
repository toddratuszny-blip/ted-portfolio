import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-primary hover:bg-[#7a162a] cursor-pointer p-4 flex gap-4 transition-colors duration-300 ${className}`}
    >
      <div className="shrink-0">{icon}</div>

      <div>
        <h2 className="text-white text-base md:text-lg font-bold">{title}</h2>

        <p className="text-sm md:text-base text-white font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
