// src/App.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Info from "./components/Info";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // تغيير اتجاه الصفحة
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    // تغيير اتجاه النصوص في الجسم كله (اختياري)
    document.body.style.textAlign = i18n.language === "ar" ? "right" : "left";
  }, [i18n.language]);

  return (
    <>
      <Header />
      <Banner />
      <Hero />
      <Info />
      <Footer />
    </>
  );
};

export default App;
