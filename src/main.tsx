import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Login from "@/pages/login";
import ErrorPage from "@/404";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Register from "@/pages/register";
import ContactUs from "@/pages/contact-us";
import AboutUs from "@/pages/about-us";

const pages = new Map<string, React.ReactNode>();
pages.set("/", <Home />);
pages.set("/login", <Login />);
pages.set("/register", <Register />);
pages.set("/contact-us", <ContactUs />);
pages.set("/about-us", <AboutUs />);

const pagesMap = Array.from(pages).map(([path, element]) => ({
  path,
  element: <Layout>{element}</Layout>,
  errorElement: ErrorPage,
})) as unknown as RouteObject[];

const router = createBrowserRouter(pagesMap);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
