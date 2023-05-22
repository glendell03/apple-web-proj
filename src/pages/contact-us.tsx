import Logo from "@/assets/images/logo.png";
import Input from "@/components/input";
import ContactUsBG from "@/assets/images/contact-us-bg.png";
import { Button, Container } from "react-bootstrap";

export default function ContactUs (){
  return (
    <Container>
      <img src={ContactUsBG} alt="Contact Us Hero" />
      <div className="m-5" />

      <h1 className="text-3xl">Contact with Us</h1>
      <div className="m-5" />

      <div className="d-flex gap-5">
        <span className="h-40 w-40" style={{ height: "15rem", width: "15rem" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "100%", width: "100%" }}
          />
        </span>
        <div style={{ width: "34rem" }}>
          <p>Contact Form</p>

          <Input label="Name" required htmlFor="name" />
          <Input label="Email" required htmlFor="email" />
          <Input label="Subject" required htmlFor="subject" />
          <label style={{ width: "100%" }}>
            <p className="mb-2">Message</p>
            <textarea style={{ height: "10rem", width: "100%" }} />
          </label>

          <div className="m-5" />
          <Button variant="primary" size="lg" style={{ width: "100%" }}>
            Send
          </Button>
        </div>
      </div>
      <div className="m-20" />
    </Container>
  );
};

