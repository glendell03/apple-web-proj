import Logo from "@/assets/images/logo.png";
import Button from "@/components/button";
import Input from "@/components/input";
import ContactUsBG from "@/assets/images/contact-us-bg.png";

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <img src={ContactUsBG} alt="Contact Us Hero" />
      <div className="m-10" />

      <h1 className="text-3xl">Contact with Us</h1>
      <div className="m-8" />

      <div className="flex gap-10">
        <span className="h-40 w-40">
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </span>
        <div className="w-[34rem]">
          <p>Contact Form</p>
          <div className="m-5" />

          <Input label="Name" required />
          <Input label="Email" required />
          <Input label="Subject" required />
          <label>
            <p className="mb-2">Message</p>
            <textarea className="bg-zinc-300 w-full h-40" />
          </label>

          <div className="m-5" />
          <Button primary>Send</Button>
        </div>
      </div>
      <div className="m-20" />
    </div>
  );
};

export default ContactUs;
