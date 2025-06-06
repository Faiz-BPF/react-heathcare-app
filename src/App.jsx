import Sidebar from "./components/Sidebar.jsx";
import Products from "./pages/Products.jsx";
import Doctor from "./pages/Doctor.jsx";
import Error404 from "./pages/handling/Error404.jsx";
import "./assets/tailwind.css";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

import ErrorLayout from "./layouts/ErrorLayout.jsx";
import React, { Suspense } from "react";
import Loading from "./components/Loading.jsx";
import FAQ from "./pages/FAQs.jsx";
import FAQDetail from "./pages/FAQDetail.jsx";
import Teams from "./pages/Teams.jsx";
import TeamDetail from "./components/TeamDetail.jsx";
import Jobs from "./pages/Jobs.jsx";
import JobDetail from "./components/JobDetail.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import TestimonialDetail from "./components/TestimonialDetail.jsx";
import Artikel from "./pages/Artikel.jsx";
import ArtikelDetail from "./pages/ArtikelDetail.jsx";

export default function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Doctors" element={<Doctor />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/:id" element={<FAQDetail />} />
          <Route path="/team" element={<Teams/>} />
          <Route path="/team/:id" element={<TeamDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/testimoni" element={<Testimonials />} />
          <Route path="/testimonials/:id" element={<TestimonialDetail />} />
          <Route path="/news" element={<Artikel />} />
          <Route path="/news/:id" element={<ArtikelDetail />} />
        
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
