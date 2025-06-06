import { Link } from "react-router-dom";
import jobsData from "../data/jobs.json";

export default function Jobs() {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Lowongan Kerja</h1>
      <ul className="space-y-2">
        {jobsData.map((job) => (
          <li key={job.id} className="border p-4 rounded shadow">
            <Link to={`/jobs/${job.id}`} className="text-blue-600 font-semibold hover:underline">
              {job.posisi}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
