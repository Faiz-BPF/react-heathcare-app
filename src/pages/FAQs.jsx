import { Link } from "react-router-dom";
import faqData from "../data/faqs.json";
import Table from "../components/Table";
import PageHeader from "../components/PageHeader";

export default function Teams() {
  const theadData = ["ID", "Pertanyaan", "Jawaban"];

  const tbodyData = faqData.map((member) => [
    member.id,
    <Link
      to={`/faq/${member.id}`}
      className="text-blue-600 font-semibold hover:underline"
    >
      {member.pertanyaan}
    </Link>,
    member.jawaban,
  ]);

  return (
    <div className="p-5">
      <PageHeader title="FAQ"
          breadcrumb={["FAQ", "FAQ List"]}/>
      <Table theadData={theadData} tbodyData={tbodyData} />
    </div>
  );
}
