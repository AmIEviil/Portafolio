import "./CustomButton.css";
interface ButtonProps {
  label?: string;
  onClick?: () => void;
  // si viene href se renderiza como enlace (<a>) con el mismo estilo
  href?: string;
  download?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const CustomButton = ({
  label,
  onClick,
  href,
  download,
  disabled = false,
  className = "",
  icon,
  iconPosition = "left",
  type = "button",
  ariaLabel,
}: ButtonProps) => {
  const handleClassByType = () => {
    switch (type) {
      // submit reutiliza el estilo base (btn-submit queda para ajustes puntuales)
      case "submit":
        return "btn-default btn-submit";
      case "reset":
        return "btn-reset";
      case "button":
      default:
        return "btn-default";
    }
  };
  const buttonClass = handleClassByType();

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
      {label && <span>{label}</span>}
      {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`flex items-center btn-default ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`flex items-center ${buttonClass} ${className}`}
      type={type}
    >
      {content}
    </button>
  );
};

export default CustomButton;
