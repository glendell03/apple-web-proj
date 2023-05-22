import RegisterBG from "@/assets/images/register-bg.png";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div
      style={{
        backgroundImage: `url(${RegisterBG})`,
        flex: "1 1 0%",
        width: "100%",
        objectFit: "cover",
        height: "100%",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="bg-white h-5/6 w-1/3 p-5">
        <h1 className="text-4xl">Register</h1>
        <p>Begin your journey with us today</p>

        <div className="m-8" />

        <span className="d-flex gap-4">
          <Input label="First Name" htmlFor="firstName" />
          <Input label="Last Name" htmlFor="lastName" />
        </span>
        <Input label="Username" htmlFor="userName" required />
        <Input label="Email" htmlFor="email" />
        <Input label="Password" type="password" htmlFor="password" />

        <div className="m-3" />

        <Checkbox label="I accept the Terms & Conditions" />

        <div className="m-3" />

        <Button size="lg" variant="primary" style={{ width: "100%" }}>
          Sign Up
        </Button>

        <div className="m-4" />

        <Link to="/login">Already signed up ?</Link>
      </div>
    </div>
  );
}
