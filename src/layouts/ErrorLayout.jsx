import { Outlet } from "react-router-dom";
import "../assets/tailwind.css";

export default function ErrorLayout() {
  return (
    <>
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <div id="error-content" className="flex-1">
            
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
