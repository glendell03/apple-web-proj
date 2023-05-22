import LoginBG from "@/assets/images/login-bg.png";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${LoginBG})`,
        flex: "1 1 0%",
        width: "100%",
        objectFit: "cover",
        height: "100%",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <Row style={{ width: "60%" }}>
        <Col
          style={{ backgroundColor: "#03C03C", opacity: 0.95 }}
          className="d-flex justify-content-center align-items-center"
        >
          <span>
            <h1 className="text-7xl font-extralight mb-2">SYNERGY</h1>
            <p>HOMECARE</p>
          </span>
        </Col>
        <Col className="bg-white p-5">
          <h1 className="text-4xl text-c-text">Welcome Back</h1>
          <p className="text-c-text">Sign in to continue your progress</p>

          <div className="m-10" />

          <Input label="Email / Username" htmlFor="emailUsername" />

          <Input label="Password" type="password" htmlFor="password" />

          <span className="d-flex justify-content-between align-items-center my-2">
            <Checkbox label="Remember me" />
            <Link to="/forgot-pass" className="text-c-text">
              Forget password?
            </Link>
          </span>

          <div className="m-10" />

          <Button variant="primary" size="lg" style={{ width: "100%" }}>
            Sign In
          </Button>
          <div className="m-3" />
          <Link to="/register">
            <Button
              style={{
                backgroundColor: "#03C03C",
                outline: "none",
                border: "none",
                width: "100%",
              }}
              size="lg"
            >
              Create Account
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
