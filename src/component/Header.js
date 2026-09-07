import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // 히어로 영역을 벗어나면 헤더에 배경을 깔아 흰 글자가 묻히지 않게 함
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Hwan's Portfolio
        </button>
        <nav className="navBar">
          <button onClick={() => scrollToSection("about")}>About Me</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("archiving")}>Archiving</button>
          <button onClick={() => scrollToSection("project")}>Projects</button>
          <button onClick={() => scrollToSection("career")}>Career</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
