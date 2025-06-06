import { HiOutlineNewspaper } from "react-icons/hi"; 
import { GiMedicines } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
  `flex items-center space-x-2 px-5 py-3 rounded-md transition-colors duration-200 relative overflow-hidden
   ${
     isActive
       ? "text-white bg-biru"
       : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
   }`;


  const menu = (to, Icon, label, id) => (
    <NavLink to={to} id={id} className={menuClass}>
      {({ isActive }) => (
        <div className="flex items-center w-full relative">
          {isActive && <span className="absolute left-0 top-1/2"></span>}
          <Icon className="mr-4 text-xl" />
          <span>{label}</span>
        </div>
      )}
    </NavLink>
  );

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-1">
        <li>
          {menu("/", MdOutlineDashboard, "Dashboard", "menu-dashboard")}
        </li>
        <li>{menu("/Doctors", FiUsers, "Doctors", "menu-doctors")}</li>
        <li>
          {menu("/Products", GiMedicines, "Products", "menu-products")}
        </li>
        <li>{menu("/Sales", BsCart3, "Sales", "menu-sales")}</li>
        <li>{menu("/faq", RiListUnordered, "FAQ", "menu-faq")}</li>
        <li>
          {menu("/team", HiOutlineUserGroup, "Tim/Karyawan", "menu-team")}
        </li>
        <li>{menu("/jobs", MdWorkOutline, "Job", "menu-jobs")}</li>
        <li>
          {menu(
            "/testimoni",
            BiMessageDetail,
            "Testimoni",
            "menu-testimoni"
          )}
        </li>
        <li>
          {menu(
            "/news",
            HiOutlineNewspaper,
            "Artikel",
            "menu-news"
          )}
        </li>
      </ul>
    </div>
  );
}
