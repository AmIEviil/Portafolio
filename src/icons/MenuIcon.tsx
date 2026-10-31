interface MenuIconProps {
  size?: number | string;
  color?: string;
  className?: string;
  // true muestra una "X" (menú abierto)
  open?: boolean;
}

const MenuIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  open = false,
}: MenuIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7H20M4 12H20M4 17H20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};

export default MenuIcon;
