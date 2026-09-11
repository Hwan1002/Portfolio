import "./css/style.css";
import "./css/readmeStyle.css";
import ProfilePhoto from "./component/ProfilePhoto";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import Archiving from "./component/Archiving";
import Project from "./component/Project";
import Career from "./component/Career";
import Footer from "./component/Footer";
import ScrollTopButton from "./component/ScrollTopButton";
import { scrollToSection } from "./utils/scroll";

const FULL_TITLE = "장환석 포트폴리오";
//1111111111111111
function App() {
  const [typedTitle, setTypedTitle] = useState("");

  // 히어로 타이틀 타이핑 효과
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTypedTitle(FULL_TITLE.slice(0, i));
      if (i >= FULL_TITLE.length) clearInterval(timer);
    }, 110);
    return () => clearInterval(timer);
  }, []);

  // 섹션이 뷰포트에 들어오면 서서히 나타나는 효과
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sections.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="mastHead">
        <div className="mastHead_contents">
          <ProfilePhoto />
          <div className="profileText">
            <h1 className="mastHead_Title">
              <span className="typing_caret">{typedTitle || " "}</span>
            </h1>
            <p className="mastHead_sub">사용자 경험을 생각하는 풀스택 개발자입니다</p>
            <button className="mastHead_button" onClick={() => scrollToSection("about")}>
              더 알아보기 ↓
            </button>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Archiving />
      <Project />
      <Career />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
