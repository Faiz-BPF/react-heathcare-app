import { useParams, Link } from "react-router-dom";
import initialArticles from "../data/article.json";
import PageHeader from "../components/PageHeader";

export default function ArtikelDetail() {
  const { id } = useParams();
  const article = initialArticles.find((item) => item.id.toString() === id);

  if (!article) {
    return (
      <div className="text-red-600 p-4">
        Artikel tidak ditemukan.
        <br />
        <Link to="/artikel" className="text-blue-600 hover:underline">
          Kembali ke daftar artikel
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHeader title="Artikel" breadcrumb={["Artikel", "Detail Artikel"]} />
      <div className="p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-4">{article.judul}</h1>
        <p className="text-gray-700 whitespace-pre-line">{article.isi}</p>
        <Link
          to="/news"
          className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
        >
          ← Kembali ke daftar artikel
        </Link>
      </div>
    </>
  );
}
