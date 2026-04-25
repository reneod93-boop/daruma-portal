interface DarumaLogoProps {
  size?: number;
  className?: string;
}

export function DarumaLogo({ size = 56, className = '' }: DarumaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Daruma Studio"
    >
      <path
        d="M32 8c-9.4 0-17 8.5-17 19v6c0 13 7.6 23 17 23s17-10 17-23v-6C49 16.5 41.4 8 32 8z"
        fill="#E94256"
      />
      <ellipse cx="24" cy="30" rx="3.5" ry="4" fill="#1F2A33" />
      <ellipse cx="40" cy="30" rx="3.5" ry="4" fill="#1F2A33" />
      <path
        d="M22 42 Q32 50 42 42"
        stroke="#1F2A33"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
