interface CustomInputProps {
  label: string;
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
    <div className="flex flex-col mb-4 ml-4">
      <span>
        <label htmlFor="custom-input">{label}</label>
      </span>
      <input
        id="custom-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`custom-input ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
