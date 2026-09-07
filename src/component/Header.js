import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scroll";

const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "archiving", label: "Archiving" },
  { id: "project", label: "Projects" },
  { id: "career", label: "Career" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // 히어로 영역을 벗어나면 헤더에 배경을 깔아 흰 글자가 묻히지 않게 함
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 화면 중앙에 걸린 섹션을 네비게이션에 하이라이트
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Hwan's Portfolio
        </button>
        <nav className="navBar">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              className={activeSection === id ? "active" : ""}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
