import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import doctorsData from "../assets/doctor.json";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";
import Headbar from "../components/Headbar";

export default function Doctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const theadData = [
    "Doctors ID",
    "Doctors Name",
    "Photo",
    "Specialization",
    "Clinic",
    "Available",
    "Rating",
    "Services",
    "Location",
  ];

  const tbodyData = doctors.map((doc) => [
    <td className="px-6 py-4 font-medium">{doc.id}</td>,
    <td className="px-6 py-4">{doc.doctorName}</td>,
    <td className="px-6 py-4">
      <img
        src={doc.profileImage}
        alt={doc.doctorName}
        className="w-16 h-16 object-cover rounded-full border"
      />
    </td>,
    <td className="px-6 py-4">{doc.specialization}</td>,
    <td className="px-6 py-4">{doc.clinic.name}</td>,
    <td className="px-6 py-4">
      {doc.availability.days.join(", ")} <br />
      {doc.availability.time.start} - {doc.availability.time.end}
    </td>,
    <td className="px-6 py-4">
      <span className="text-yellow-600 font-semibold">
        ⭐ {doc.ratings.average}
      </span>{" "}
      <span className="text-xs text-gray-500">
        ({doc.ratings.reviewsCount})
      </span>
    </td>,
    <td className="px-6 py-4">
      <div className="flex flex-wrap gap-1">
        {doc.services.map((srv, i) => (
          <span
            key={i}
            className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full"
          >
            {srv}
          </span>
        ))}
      </div>
    </td>,
    <td className="px-6 py-4">
      {doc.clinic.address}
      <br />
      <span className="text-xs text-gray-500">
        Lat: {doc.clinic.location.latitude}, Lng:{" "}
        {doc.clinic.location.longitude}
      </span>
    </td>,
  ]);

  return (
    <>
      <div className="p-5 space-y-6">
        <PageHeader title="Doctors" breadcrumb={["Doctors", "Doctors List"]} />
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm text-left border border-gray-200 bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                {theadData.map((head, i) => (
                  <th key={i} className="px-6 py-3">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tbodyData.map((row, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  {row}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
