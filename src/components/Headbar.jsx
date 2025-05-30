import { Bell } from "lucide-react";
import { FaBars, FaFlag } from "react-icons/fa";

export default function Headbar() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
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
        <FaFlag className="text-xl text-gray-700" />
        <div className="flex items-center gap-2">
          <img
            src="https://vectorified.com/images/admin-logo-icon-7.png"
            alt="Admin"
            className="w-8 h-8 rounded-full border"
          />
          <div className="text-sm">
            <p className="font-semibold">Moni Roy</p>
            <p className="text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
