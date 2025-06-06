import { useParams } from "react-router-dom";
import jobsData from "../data/jobs.json";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobsData.find((item) => item.id.toString() === id);

  if (!job) return <p className="p-5 text-red-600">Lowongan tidak ditemukan.</p>;

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Detail Lowongan</h1>
      <p><strong>Posisi:</strong> {job.posisi}</p>
      <p><strong>Deskripsi:</strong> {job.deskripsi}</p>
      <p><strong>Lokasi:</strong> {job.lokasi}</p>
    </div>
  );
}
