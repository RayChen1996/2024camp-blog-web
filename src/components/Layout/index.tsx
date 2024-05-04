import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
export default function BasicLayout() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="content bg-white h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
