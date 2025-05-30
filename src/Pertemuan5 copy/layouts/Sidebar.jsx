import {
  Home,
  Users,
  BarChart2,
  MessageCircle,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-gray-700 text-white w-64 h-screen p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-poppins mb-6">HealthCare</h1>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-blue-300"
          >
            <Home size={20} /> <span className="font-Barlow">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-blue-300"
          >
            <Users size={20} /> <span className="font-Barlow">Patients</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-blue-300"
          >
            <BarChart2 size={20} /> <span className="font-Barlow">Reports</span>
          </a>
        </nav>
      </div>
      <div className="space-y-4">
        <a href="#" className="flex items-center space-x-3 hover:text-blue-300">
          <MessageCircle size={20} /> <span>Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-300">
          <Settings size={20} /> <span>Settings</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-300">
          <HelpCircle size={20} /> <span>Help</span>
        </a>
      </div>
    </div>
  );
}
