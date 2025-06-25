
"use client";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
   <>
     <HeroSection />
   </>
  );
}
