import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
