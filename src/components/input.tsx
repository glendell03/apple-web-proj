interface InputProps {
  label: string;
  className?: string;
  required?: boolean;
}

const Input = ({ label, className, required = false }: InputProps) => {
  return (
    <label className={`flex flex-col mb-2 ${className}`}>
      <p className="text-c-text mb-1.5 flex gap-1">
        {label} {required && <p className="text-red-500">*</p>}
      </p>
      <input className="bg-zinc-300 rounded-lg p-3" />
    </label>
  );
};

export default Input;
