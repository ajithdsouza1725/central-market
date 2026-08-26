interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-10 w-10", color = "#009688" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer oval/leaf shape */}
      <path
        d="M100 8C52 8 16 56 16 120C16 184 52 232 100 232C148 232 184 184 184 120C184 56 148 8 100 8Z"
        stroke={color}
        strokeWidth="12"
        fill="none"
      />
      {/* Left tower */}
      <path
        d="M58 170V95L72 82V170H58Z"
        fill={color}
      />
      {/* Center tower (tallest) */}
      <path
        d="M84 170V72L100 55L116 72V170H84Z"
        fill={color}
      />
      {/* Right tower */}
      <path
        d="M128 170V95L142 82V170H128Z"
        fill={color}
      />
      {/* Small vertical line accents between towers */}
      <rect x="76" y="100" width="4" height="70" fill={color} />
      <rect x="120" y="100" width="4" height="70" fill={color} />
    </svg>
  );
}
