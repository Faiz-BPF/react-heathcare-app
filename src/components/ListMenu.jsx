import { GiMedicines } from "react-icons/gi"; 
import { FiUsers } from "react-icons/fi"; 
import { MdOutlineDashboard } from "react-icons/md"; 
import { RiListUnordered } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

import { NavLink } from "react-router-dom";
export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
      ${
        isActive
          ? "text-white bg-blue-500 font-bold"
          : "text-white-600 hover:text-blue hover:bg-blue-300 hover:font-bold"
      }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdOutlineDashboard className="mr-4 text-x1" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-2" to="/Doctors" className={menuClass}>
            <FiUsers className="mr-4 text-x1" />
            Doctors
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-3" to="/Products" className={menuClass}>
          <GiMedicines className="mr-4 text-x1" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/*" className={menuClass}>
          <GiMedicines className="mr-4 text-x1" />
            Sales
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
