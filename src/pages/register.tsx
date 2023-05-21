import RegisterBG from "@/assets/images/register-bg.png";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      style={{ backgroundImage: `url(${RegisterBG})` }}
      className="flex-1 w-full object-cover flex justify-center items-center"
    >
      <div className="bg-white h-5/6 w-1/3 p-8">
        <h1 className="text-4xl">Register</h1>
        <p>Begin your journey with us today</p>

        <div className="m-8" />

        <span className="flex justify-between gap-4">
          <Input label="First Name" className="flex-1" />
          <Input label="Last Name" className="flex-1" />
        </span>
        <Input label="Username" />
        <Input label="Email" />
        <Input label="Password" />

        <div className="m-3" />

        <Checkbox label="I accept the Terms & Conditions" />

        <div className="m-4" />

        <Button primary>Sign Up</Button>

        <div className="m-8" />

        <Link to="/login">Already signed up ?</Link>
      </div>
    </div>
  );
};

export default Register;
