interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}

const CustomButton = ({
  label,
  onClick,
  disabled = false,
  className = "",
  icon,
  iconPosition = "left",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center ${className}`}
      type={type}
    >
      {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
      <span>{label}</span>
      {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
    </button>
  );
};

export default CustomButton;
