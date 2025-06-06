import {
  Home,
  Users,
  BarChart2,
  MessageCircle,
  Settings,
  HelpCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import ListMenu from "./ListMenu";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bg-white text-gray-800 w-55 h-screen p-3 flex flex-col justify-between z-75 shadow-md">

      <div>
        <span className="text-biru text-3xl font-poppins mb-6">Health</span>
        <b className="text-3xl font-poppins mb-6">Care</b>
        <nav className=" space-y-4">
          <ListMenu />
        </nav>
      </div>
      <div className="ml-6 space-y-4">
        <NavLink className="flex items-center space-x-3 hover:text-blue-500">
          <MessageCircle size={20} /> <span>Messages</span>
        </NavLink>
        <NavLink className="flex items-center space-x-3 hover:text-blue-500">
          <Settings size={20} /> <span>Settings</span>
        </NavLink>
        <NavLink className="flex items-center space-x-3 hover:text-blue-500">
          <HelpCircle size={20} /> <span>Help</span>
        </NavLink>
      </div>
    </div>
  );
}
