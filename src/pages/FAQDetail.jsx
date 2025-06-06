import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import faqs from "../data/faqs.json";
import PageHeader from "../components/PageHeader";

export default function FAQDetail() {
  const { id } = useParams();
  const [faq, setFaq] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const found = faqs.find((item) => item.id === parseInt(id));
    if (!found) {
      setError("FAQ tidak ditemukan.");
    } else {
      setFaq(found);
    }
  }, [id]);

  if (error) return <div className="text-red-600 p-4">{error}</div>;
  if (!faq) return <div className="p-4">Loading...</div>;

  return (<>
  <PageHeader title="FAQ" breadcrumb={["FAQ", "FAQ Detail"]}/>
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Pertanyaan</h2>
      <p className="text-gray-800 text-lg mb-6">{faq.pertanyaan}</p>

      <h3 className="text-xl font-semibold mb-2">Jawaban</h3>
      <p className="text-gray-700">{faq.jawaban}</p>
    </div></>
  );
}
