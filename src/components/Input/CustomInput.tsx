import s from "./CustomInput.module.css";
interface CustomInputProps {
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}

const CustomInput = ({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  required,
  autoComplete,
  className = "",
}: CustomInputProps) => {
  return (
    <div className="w-full">
      {/* el label se oculta visualmente si solo se usa placeholder, pero queda para lectores de pantalla */}
      <label htmlFor={id} className={label ? "" : "sr-only"}>
        {label ?? placeholder}
      </label>
      {type !== "text-area" && (
        <input
          id={id}
          name={name ?? id}
          type={type}
          value={value}
          onChange={onChange && ((e) => onChange(e.target.value))}
          className={`${s.custom_input} ${className}`}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
        />
      )}
      {type === "text-area" && (
        <textarea
          id={id}
          name={name ?? id}
          value={value}
          onChange={onChange && ((e) => onChange(e.target.value))}
          className={`${s.custom_input} ${s.area} ${className}`}
          placeholder={placeholder}
          required={required}
          rows={4}
        />
      )}
    </div>
  );
};

export default CustomInput;
