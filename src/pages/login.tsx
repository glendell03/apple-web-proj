import LoginBG from "@/assets/images/login-bg.png";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${LoginBG})` }}
      className="flex-1 w-full object-cover flex justify-center items-center"
    >
      <div className="flex h-5/6 w-3/5">
        <div className="bg-c-green/95 flex-1 flex flex-col justify-center items-center">
          <span>
            <h1 className="text-7xl font-extralight mb-2">SYNERGY</h1>
            <p>HOMECARE</p>
          </span>
        </div>
        <div className="bg-white flex-1 p-6">
          <h1 className="text-4xl text-c-text">Welcome Back</h1>
          <p className="text-c-text">Sign in to continue your progress</p>

          <div className="m-10" />

          <Input label="Email / Username" />
          <Input label="Password" />
          <span className="flex justify-between">
            <Checkbox label="Remember me" />
            <Link to="/forgot-pass" className="text-c-text">
              Forget password?
            </Link>
          </span>

          <div className="m-10" />

          <Button primary>Sign In</Button>
          <div className="m-3" />
          <Link to="/register">
            <Button secondary>Create Account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
