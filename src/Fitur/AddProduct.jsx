export default function AddProduct() {
  return (
    <div>
      <h1>Tambah Data Produk</h1>
      <form>
        <label>
          Nama Produk:
          <input type="text" className="inputProduct" />
        </label>
        <label>
          Kategori Produk:
          <select className="selectProduct">
            <option value="obat">Obat</option>
            <option value="suplemen">Suplemen</option>
            <option value="alat_kesehatan">Alat Kesehatan</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </label>
        <label>
          Harga Produk:
          <input type="number" className="inputProduct" min="0" />
        </label>
        <button type="submit" className="button">
          Simpan
        </button>
      </form>
    </div>
  );
}
