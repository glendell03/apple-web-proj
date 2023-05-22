import { Form } from "react-bootstrap";

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <Form.Check
      type="checkbox"
      id={`checkbox-${label.split(" ").join("-")}`}
      label={label}
    />
  );
};

export default Checkbox;
