interface ArrowIconProps {
  size?: number | string;
  color?: string;
  className?: string;
  rotate?: number;
  strokeWidth?: number;
}

const ArrowIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  rotate = 0,
  strokeWidth = 2,
}: ArrowIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M12 5V19M12 5L6 11M12 5L18 11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
