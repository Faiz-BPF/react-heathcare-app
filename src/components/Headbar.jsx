import { Bell } from "lucide-react";
import { FaBars, FaFlag } from "react-icons/fa";
import profileAdmin from "../assets/img/profileAdmin.jpg";

export default function Headbar() {
  return (
    <div className="fixed w-328 top-0 flex justify-between items-center px-6 py-5 bg-white shadow-sm z-50">
      <input
        type="text"
        placeholder="Search"
        className="w-1/3 p-2 border rounded-full bg-gray-50 text-sm"
      />
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            6
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={profileAdmin}
            alt="Admin"
            className="w-10 h-10 rounded-full border"
          />
          <div className="text-sm flex flex-col">
            <p className="font-semibold">Muhammad Faiz</p>
            <p className="text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
