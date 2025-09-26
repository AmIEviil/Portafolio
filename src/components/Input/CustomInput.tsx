import s from "./CustomInput.module.css";
interface CustomInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

const CustomInput = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  className = "",
}: CustomInputProps) => {
  return (
    <div className="w-full">
      <span>
        <label htmlFor="custom-input">{label}</label>
      </span>
      {type !== "text-area" && (
        <input
          id="custom-input"
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${s.custom_input} ${className}`}
          placeholder={placeholder}
        />
      )}
      {type === "text-area" && (
        <textarea
          id="custom-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${s.custom_input} ${s.area} ${className}`}
          placeholder={placeholder}
          rows={4}
        />
      )}
    </div>
  );
};

export default CustomInput;
