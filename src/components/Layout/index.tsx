import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
export default function BasicLayout() {
  return (
    <div className="bg-white  ">
      <Navbar />
      <div className="  bg-white h-full w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
