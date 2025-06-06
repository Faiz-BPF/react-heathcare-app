import { Outlet } from "react-router-dom";
import "../assets/tailwind.css";
import Header from "../components/Headbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <>
      <div id="app-container" className="min-h-screen bg-gray-100 ml-55">
        <Sidebar />
        <div>
          <Header />
          <div id="main-content" className="mt-16 p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
