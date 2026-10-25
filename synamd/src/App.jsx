import { useState, useEffect } from "react";
import texts from "./texts.js";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";

export default function App() {
  const [lang, setLang] = useState("en");   // "en" or "ar"
  const [page, setPage] = useState("home"); // "home" or "contact"
  const language = texts[lang];

  // left-to-right for English, right-to-left for Arabic
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className={lang === "ar" ? "app arabic" : "app"}>
      <Navbar language ={language} page={page} setPage={setPage} lang={lang} setLang={setLang} />
      {/* Hero: shown on both pages */}
      <header className="hero">
        <img src="/logo.png" alt="SynaMD logo" className="logo" />
        <h1 className="brand">
          SYNA<span>MD</span>
        </h1>
        <p className="tagline">
          {language.taglineTop}
          <br />
          <strong>{language.taglineBottom}</strong>
        </p>
      </header>
      {page === "home" ? <Home language={language} /> : <Contact language={language} />}
    </div>
  );
}