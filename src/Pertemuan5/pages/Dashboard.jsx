import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import CardCount from "../components/CardCount";

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" breadcrumb={["Dashboard", "Order List"]} />

      <CardCount/>
    </div>
  );
}
