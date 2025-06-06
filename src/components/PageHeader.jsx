import { AiFillDelete } from "react-icons/ai";
import { BiPlusCircle } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex flex-col">
        <span className="text-3xl font-semibold">{title}</span>
        <div className="flex items-center font-medium space-x-2 mt-2">
          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((item, index) => (
              <span key={index} className="text-gray-500">
                {index !== 0 && <span className="mx-1">/</span>}
                {item}
              </span>
            ))
          ) : (
            <span className="text-gray-500">{breadcrumb}</span>
          )}
        </div>
      </div>
      <div>{children}</div>
      <div className="flex space-x-2">
        <NavLink className="flex items-center px-4 py-2 bg-biru text-white rounded-full hover:bg-blue-700">
          <BiPencil size={16}/>
        </NavLink>
        <NavLink className="flex items-center px-4 py-2 bg-hijau text-white rounded-full hover:bg-green-700">
          <BiPlusCircle size={16}/>
        </NavLink>
        <NavLink className="flex items-center px-4 py-2 bg-merah text-white rounded-full hover:bg-yellow-600">
          <AiFillDelete size={16} />
        </NavLink>
      </div>
    </div>
  );
}
