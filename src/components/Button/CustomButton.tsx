import "./CustomButton.css";
interface ButtonProps {
  label?: string;
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
  const handleClassByType = () => {
    switch (type) {
      case "submit":
        return "btn-submit";
      case "reset":
        return "btn-reset";
      case "button":
      default:
        return "btn-default";
    }
  };
  const buttonClass = handleClassByType();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center ${buttonClass} ${className}`}
      type={type}
    >
      {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
      {label && <span>{label}</span>}
      {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
    </button>
  );
};

export default CustomButton;
