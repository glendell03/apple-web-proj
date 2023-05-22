import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Stack } from "react-bootstrap";

const Layout = ({ children }: PropsWithChildren) => {
  return (
      <Stack style={{ height: "100vh" }}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer/> */}
      </Stack>
  );
};

export default Layout;
