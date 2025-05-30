import { PackageCheck, UserCheck, Clock4, ShoppingCart } from "lucide-react";
import Headbar from "../components/Headbar";

export default function Dashboard() {
  return (
    <>
      <div className="space-y-6 p-5">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>

          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <CardInfo
              icon={<UserCheck className="text-purple-500" />}
              label="Total User"
              value="40,689"
              growth="+8.5%"
              note="Up from yesterday"
            />
            <CardInfo
              icon={<ShoppingCart className="text-yellow-500" />}
              label="Total Order"
              value="10,293"
              growth="+1.3%"
              note="Up from past week"
            />
            <CardInfo
              icon={<PackageCheck className="text-green-500" />}
              label="Total Sales"
              value="$89,000"
              growth="-4.3%"
              note="Down from yesterday"
              negative
            />
            <CardInfo
              icon={<Clock4 className="text-orange-500" />}
              label="Total Pending"
              value="2,040"
              growth="+1.8%"
              note="Up from yesterday"
            />
          </div>

          {/* Placeholder Sales Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Sales Details
            </h2>
            <div className="h-48 bg-gradient-to-b from-blue-100 to-white rounded-lg flex items-center justify-center text-gray-500">
              (Chart placeholder)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CardInfo({ icon, label, value, growth, note, negative }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
      <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
        <p
          className={`text-sm ${negative ? "text-red-500" : "text-green-500"}`}
        >
          {growth} {note}
        </p>
      </div>
    </div>
  );
}
