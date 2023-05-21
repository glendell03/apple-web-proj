interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <label className="flex gap-2 items-center mb-2">
      <input type="checkbox" className="h-4 w-4 accent-zinc-300" checked />
      <p className="text-c-text">{label}</p>
    </label>
  );
};

export default Checkbox;
