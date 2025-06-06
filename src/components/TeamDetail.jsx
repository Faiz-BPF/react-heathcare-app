import { useParams } from "react-router-dom";
import teamData from "../data/teams.json";
import PageHeader from "../components/PageHeader";

export default function TeamDetail() {
  const { id } = useParams();
  const member = teamData.find((item) => item.id.toString() === id);

  if (!member) return <div className="text-red-600 p-4">Data tim tidak ditemukan.</div>;

  return (
    <>
      <PageHeader title="Team" breadcrumb={["Team", "Team Detail"]} />
      <div className="p-6 bg-white rounded-xl shadow-lg max-w-xl mx-auto mt-6 text-center">
        <img
          src={member.foto}
          alt={member.nama}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{member.nama}</h2>
        <p className="text-gray-700 text-lg">{member.jabatan}</p>
      </div>
    </>
  );
}
