import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import ShowDoctor from "../../pages/Doctor";

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" breadcrumb={["Dashboard", "Order List"]} />

      <ShowDoctor/>
    </div>
  );
}
