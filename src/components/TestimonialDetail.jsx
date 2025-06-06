import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import testimonials from "../data/testimonials.json";
import PageHeader from "../components/PageHeader";

export default function TestimonialDetail() {
  const { id } = useParams();
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const found = testimonials.find((item) => item.id === parseInt(id));
    if (!found) {
      setError("Testimoni tidak ditemukan.");
    } else {
      setSelectedTestimonial(found);
    }
  }, [id]);

  if (error) return <div className="text-red-600 p-4">{error}</div>;
  if (!selectedTestimonial) return <div className="p-4">Loading...</div>;

  return (
    <>
      <PageHeader title="Testimonials" breadcrumb={["Testimonials", "Testimonial Detail"]} />
      <div className="p-6 bg-white rounded-xl shadow-lg max-w-xl mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4">{selectedTestimonial.nama}</h2>
        <h4 className="text-xl font-semibold mb-2">Ulasan</h4>
        <p className="text-gray-700">{selectedTestimonial.pesan}</p>
        <h4 className="text-xl font-semibold mt-4">Rating: {selectedTestimonial.rating} / 5</h4>
      </div>
    </>
  );
}
