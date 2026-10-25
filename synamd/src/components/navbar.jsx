import { useState, useEffect } from "react";

export default function Navbar({ language, page, setPage, lang, setLang }) {
  const [showNav, setShowNav] = useState(true);

  // hide on scroll down, show on scroll up or when scrolling stops
  useEffect(() => {
    let lastY = window.scrollY;
    let timer;

    function onScroll() {
      const y = window.scrollY;
      setShowNav(y < lastY || y < 50);
      lastY = y;

      clearTimeout(timer);
      timer = setTimeout(() => setShowNav(true), 600);
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className={showNav ? "navbar" : "navbar hide"}>
      <div className="links">
        <button className="logo-btn" onClick={() => setPage("home")}>
          <img src="/logo.png" alt="SynaMD logo" className="logo" />
        </button>
        <button className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>
          {language.home}
        </button>
        <button className={page === "contact" ? "active" : ""} onClick={() => setPage("contact")}>
          {language.contact}
        </button>
      </div>

      <div className="lang">
        <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
        <span>|</span>
        <button className={lang === "ar" ? "on" : ""} onClick={() => setLang("ar")}>AR</button>
      </div>
    </nav>
  );
}