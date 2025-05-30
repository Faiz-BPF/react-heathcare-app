import { useState } from "react";
import doctorData from "./doctor.json";

export default function ShowDoctor() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    selectedClinic: "",
  });

  const _searchTerm = dataForm.searchTerm.toLowerCase();

  const filteredDoctors = doctorData.filter((doctor) => {
    const matchesSearch =
      doctor.doctorName.toLowerCase().includes(_searchTerm) ||
      doctor.specialization.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? doctor.services.includes(dataForm.selectedTag)
      : true;

    const matchesClinic = dataForm.selectedClinic
      ? doctor.clinic.name === dataForm.selectedClinic
      : true;

    return matchesSearch && matchesTag && matchesClinic;
  });

  const allTags = [...new Set(doctorData.flatMap((doctor) => doctor.services))];
  const allClinics = [
    ...new Set(doctorData.map((doctor) => doctor.clinic.name)),
  ];

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search doctor or specialization..."
          className="w-full p-2 border border-gray-300 rounded"
          value={dataForm.searchTerm}
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          className="w-full p-2 border border-gray-300 rounded"
          value={dataForm.selectedTag}
          onChange={handleChange}
        >
          <option value="">All Services</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <select
          name="selectedClinic"
          className="w-full p-2 border border-gray-300 rounded"
          value={dataForm.selectedClinic}
          onChange={handleChange}
        >
          <option value="">All Clinics</option>
          {allClinics.map((clinic, index) => (
            <option key={index} value={clinic}>
              {clinic}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border">Doctor Name</th>
              <th className="text-left p-3 border">Photo</th>
              <th className="text-left p-3 border">Specialization</th>
              <th className="text-left p-3 border">Clinic</th>
              <th className="text-left p-3 border">Available</th>
              <th className="text-left p-3 border">Rating</th>
              <th className="text-left p-3 border">Services</th>
              <th className="text-left p-3 border">Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="p-3 border font-medium text-gray-800">
                  {doc.doctorName}
                </td>
                <td className="p-3 border">
                  <img
                    src={doc.image}
                    alt={doc.doctorName}
                    className="w-16 h-16 object-cover rounded-full border"
                  />
                </td>
                <td className="p-3 border text-gray-600">
                  {doc.specialization}
                </td>
                <td className="p-3 border text-gray-600">{doc.clinic.name}</td>
                <td className="p-3 border text-sm">
                  {doc.availability.days.join(", ")} <br />
                  {doc.availability.time.start} - {doc.availability.time.end}
                </td>
                <td className="p-3 border">
                  ⭐ {doc.ratings.average} ({doc.ratings.reviewsCount})
                </td>
                <td className="p-3 border">
                  {doc.services.map((srv, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2 mb-1"
                    >
                      {srv}
                    </span>
                  ))}
                </td>
                <td className="p-3 border text-sm">
                  {doc.clinic.address}
                  <br />
                  Lat: {doc.clinic.location.latitude}, Lng:{" "}
                  {doc.clinic.location.longitude}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
