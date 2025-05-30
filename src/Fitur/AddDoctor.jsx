import { useState } from "react";

function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function AlertMessage({ message, type }) {
  const bgColor = type === "error" ? "bg-red-100 border-red-500 text-red-700" : "bg-green-100 border-green-500 text-green-700";
  return (
    message && (
      <div className={`mb-4 p-3 border-l-4 ${bgColor}`}>
        <p className="font-semibold">{message}</p>
      </div>
    )
  );
}

export default function AddDoctor() {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !specialization || !salary) {
      setError("Semua bidang wajib diisi.");
      return;
    }
    if (salary <= 0) {
      setError("Gaji harus lebih dari 0.");
      return;
    }
    setSuccess(`Dokter ${name} dengan spesialis ${specialization} berhasil ditambahkan.`);
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Tambah Dokter</h2>
        <AlertMessage message={error} type="error" />
        <AlertMessage message={success} type="success" />
        <form onSubmit={handleSubmit}>
          <InputField
            label="Nama Dokter"
            type="text"
            placeholder="Masukkan nama dokter"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Spesialis</label>
            <select
              className="w-full p-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            >
              <option value="">Pilih Spesialis</option>
              <option value="Umum">Umum</option>
              <option value="Bedah">Bedah</option>
              <option value="Anak">Anak</option>
              <option value="Kardiologi">Kardiologi</option>
            </select>
          </div>
          <InputField
            label="Gaji"
            type="number"
            placeholder="Masukkan gaji"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Tambah Dokter
          </button>
        </form>
      </div>
    </div>
  );
}