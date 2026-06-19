import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Booking from "./pages/Booking";
import CarDetails from "./pages/CarDetails";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Mount button controller

export default function App() {
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    const syncTimer = setTimeout(() => {
      setIsSyncing(false);
    }, 1800);

    return () => clearTimeout(syncTimer);
  }, []);

  if (isSyncing) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton /> 
      
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/fleet/:id" element={<CarDetails />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </>
  );
}