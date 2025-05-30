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

export default function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Doctors" element={<Doctor />} />
          <Route path="/Products" element={<Products />} />
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
