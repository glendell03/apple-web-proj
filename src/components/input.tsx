import { Form, Stack } from "react-bootstrap";

interface InputProps {
  label: string;
  className?: string;
  required?: boolean;
  htmlFor: string;
  type?: "password";
}

const Input = ({ label, type, required = false, htmlFor }: InputProps) => {
  return (
    <div className="mb-1">
      <Form.Label htmlFor={htmlFor}>
        <Stack direction="horizontal" gap={1} className="m-0 p-0">
          <span>{label}</span>
          {required && <span className="text-danger">*</span>}
        </Stack>
      </Form.Label>
      <Form.Control type={type} id={htmlFor} style={{ width: "100%" }} />
    </div>
  );
};

export default Input;
