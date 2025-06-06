import { Link } from "react-router-dom";
import testimonials from "../data/testimonials.json";
import Table from "../components/Table";
import PageHeader from "../components/PageHeader";

export default function Teams() {
  const theadData = ["ID", "Nama", "Pesan"];

  const tbodyData = testimonials.map((member) => [
    member.id,
    <Link
      to={`/testimonials/${member.id}`}
      className="text-blue-600 font-semibold hover:underline"
    >
      {member.nama}
    </Link>,
    member.pesan,
  ]);

  return (
    <div className="p-5">
      <PageHeader title="Testimoni"
          breadcrumb={["Testimoni", "Testimoni List"]}/>
      <Table theadData={theadData} tbodyData={tbodyData} />
    </div>
  );
}
