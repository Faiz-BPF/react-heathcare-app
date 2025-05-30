export default function ShowProduct() {
  const dataProduct = [
    { id: 1, nama: "Paracetamol", kategori: "Obat", harga: 10000 },
    { id: 2, nama: "Vitamin C", kategori: "Suplemen", harga: 25000 },
  ];

  const handleClick = () => {
    alert("Berhasil");
  };

  return (
    <div className="container">
      <h1>Daftar Produk</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataProduct.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.kategori}</td>
              <td>Rp {item.harga.toLocaleString()}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" onClick={handleClick}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
