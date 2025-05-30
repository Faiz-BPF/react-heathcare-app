import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import productsData from "../assets/products.json";
import Headbar from "../components/Headbar";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <div className="p-5 space-y-6">
        <PageHeader
          title="Products"
          breadcrumb={["Products", "Product List"]}
        />

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm text-left border border-gray-200 bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nama Produk</th>
                <th className="px-6 py-3">Kategori</th>
                <th className="px-6 py-3">Harga</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{product.id}</td>
                  <td className="px-6 py-4">{product.nama}</td>
                  <td className="px-6 py-4">{product.kategori}</td>
                  <td className="px-6 py-4">
                    <span className="text-green-700 font-semibold">
                      Rp. {product.harga.toLocaleString("id-ID")}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
