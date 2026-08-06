interface LongArrowProps {
  className?: string;
}

export default function LongArrow({
  className = "text-black",
}: LongArrowProps) {
  return (
    <svg
      width="141"
      height="15"
      viewBox="0 0 141 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M140.707 8.07088C141.098 7.68035 141.098 7.04719 140.707 6.65666L134.343 0.292702C133.953 -0.0978227 133.319 -0.0978227 132.929 0.292702C132.538 0.683226 132.538 1.31639 132.929 1.70692L138.586 7.36377L132.929 13.0206C132.538 13.4111 132.538 14.0443 132.929 14.4348C133.319 14.8254 133.953 14.8254 134.343 14.4348L140.707 8.07088ZM0 7.36377V8.36377H140V7.36377V6.36377H0V7.36377Z"
        fill="currentColor"
      />
    </svg>
  );
}