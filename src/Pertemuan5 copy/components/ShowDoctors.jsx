export default function ShowDoctors() {
  const doctors = [
    {
      name: "dr. Rina Maharani",
      specialization: "Spesialis Anak",
      experience: "5 Tahun",
      status: "Aktif",
    },
    {
      name: "dr. Budi Santoso",
      specialization: "Spesialis Jantung",
      experience: "10 Tahun",
      status: "Aktif",
    },
    {
      name: "dr. Lisa Putri",
      specialization: "Spesialis Kulit",
      experience: "7 Tahun",
      status: "Cuti",
    },
    {
      name: "dr. Ahmad Zaki",
      specialization: "Spesialis Bedah",
      experience: "8 Tahun",
      status: "Aktif",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-5">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Data Dokter</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600">
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Spesialis</th>
            <th className="px-4 py-2">Pengalaman</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 text-sm text-gray-700"
            >
              <td className="px-4 py-2">{doc.name}</td>
              <td className="px-4 py-2">{doc.specialization}</td>
              <td className="px-4 py-2">{doc.experience}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    doc.status === "Aktif"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {doc.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
