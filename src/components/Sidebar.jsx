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
    <div className="fixed top-0 left-0 bg-white text-gray-800 w-64 h-screen p-6 flex flex-col justify-between shadow-lg z-50">

      <div>
        <span className="text-blue-700 text-3xl font-poppins mb-6">Health</span>
        <b className="text-3xl font-poppins mb-6">Care</b>
        <nav className="space-y-4">
          <ListMenu />
        </nav>
      </div>
      <div className="space-y-4">
        <a href="#" className="flex items-center space-x-3 hover:text-blue-500">
          <MessageCircle size={20} /> <span>Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-500">
          <Settings size={20} /> <span>Settings</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-500">
          <HelpCircle size={20} /> <span>Help</span>
        </a>
      </div>
    </div>
  );
}
