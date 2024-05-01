import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
export default function BasicLayout() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
