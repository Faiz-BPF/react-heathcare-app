import { Outlet } from "react-router-dom";
import "../assets/tailwind.css";
import Header from "../components/Headbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <>
      <div id="app-container" className="bg-gray-100 min-h-screen flex ml-55 p-5">
        {/*className="flex justify-between items-center px-6 py-3 bg-white shadow-sm"*/}
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4">
          <div id="app-container" className="bg-gray-100 min-h-screen flex">
            <div id="layout-wrapper" className="flex flex-row flex-1">
              <Sidebar />
              <div id="main-content" className="flex-1 p-4">
                <Header />

                <Outlet />
              </div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
