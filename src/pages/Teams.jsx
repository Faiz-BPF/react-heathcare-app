import { Link } from "react-router-dom";
import teamData from "../data/teams.json";
import Table from "../components/Table";
import PageHeader from "../components/PageHeader";

export default function Teams() {
  const theadData = ["ID", "Nama", "Jabatan"];

  const tbodyData = teamData.map((member) => [
    member.id,
    <Link
      to={`/team/${member.id}`}
      className="text-blue-600 font-semibold hover:underline"
    >
      {member.nama}
    </Link>,
    member.jabatan,
  ]);

  return (
    <div className="p-5">
      <PageHeader title="Teams"
          breadcrumb={["Teams", "Team List"]}/>
      <Table theadData={theadData} tbodyData={tbodyData} />
    </div>
  );
}
