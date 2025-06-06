import { useState } from "react";
import { Link } from "react-router-dom";
import initialArticles from "../data/article.json";
import Table from "../components/Table";
import PageHeader from "../components/PageHeader";

export default function Artikel() {
  // State untuk simpan data artikel
  const [articles] = useState(initialArticles);

  const theadData = ["ID", "Judul", "ISi", "Link"];
  const tbodyData = articles.map((art) => [
    art.id,
    <Link
      key={art.id}
      to={`/news/${art.id}`}
      className="text-blue-600 font-semibold hover:text-blue-700"
    >
      {art.judul}
    </Link>,    
    art.isi,
    <Link className="text-blue-600 font-semibold hover:underline"> {art.link} </Link>
  ]);

  return (
    <div className="p-5">
      <PageHeader title="Manajemen Artikel" breadcrumb={["Home", "Artikel"]} />

      {/* Tabel Artikel */}
      <Table theadData={theadData} tbodyData={tbodyData} />
    </div>
  );
}
