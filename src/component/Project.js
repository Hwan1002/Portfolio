import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ittrip from "../css/img/pdf/ItTrip.pdf";
import iwc from "../css/img/pdf/iwc.pdf";
import ittripThumb from "../css/img/project/ittrip.jpg";
import movieThumb from "../css/img/project/movie.jpg";
import iwcThumb from "../css/img/project/iwc.jpg";
import masilThumb from "../css/img/project/masil.jpg";

const projects = [
  {
    title: "Masil (렌탈 마켓 플랫폼)",
    period: "팀 프로젝트",
    summary: "React, Spring Boot로 개발한 이웃 간 물품 렌탈 플랫폼",
    details: [
      "렌탈 물품을 업로드하고 개인 간에 물건을 빌리고 빌려줄 수 있는 서비스",
      "WebSocket 기반 실시간 1:1 채팅 (읽음 처리, 미읽음 뱃지)",
      "JWT + OAuth2(구글·네이버·카카오) 소셜 로그인 구현",
      "위치 기반으로 근처 5km 이내의 렌탈 물품 조회 기능",
    ],
    skills: "React, Zustand, Java, Spring Boot, Spring Security, JWT, OAuth2, WebSocket, MySQL",
    thumb: masilThumb,
    pdf: null,
    url: null,
    github: "https://github.com/Hwan1002/masil",
    readme: "masil-README.md",
  },
  {
    title: "IT Trip (반응형웹)",
    period: "팀 프로젝트",
    summary: "React, Spring Boot 를 활용하여 개발한 반응형 웹사이트 AWS 배포",
    details: [
      "여행계획을 할 수 있는 사이트 개발",
      "여행내 일정마다 출발지, 도착지, 경유지들을 저장하고 맵에 띄울 수 있도록 개발",
      "소요시간, 키로수 확인 기능 구현",
      "여행에 필요한 물품이나 준비물등을 체크할 수 있는 체크리스트 구현",
    ],
    skills: "HTML, CSS, React, Java, Spring boot, AWS, EC2, RDS",
    thumb: ittripThumb,
    pdf: ittrip,
    url: null, // ittrip.site 도메인 만료로 링크 제거 (복구 시 URL 다시 넣기)
    github: "https://github.com/Hwan1002/ittrip-project",
    readme: "README.md",
  },
  {
    title: "Movie (순수 자바스크립트)",
    period: "개인 프로젝트",
    summary: "Vanilla JS 활용하여 영화 검색 및 즐겨찾기 개발",
    details: [
      "OTT 감성의 UI로 영화 검색, 첫 화면 '오늘의 추천' 자동 표시",
      "IntersectionObserver 기반 무한 스크롤 & 카드 등장 애니메이션",
      "카드 클릭 시 줄거리·평점·감독·출연진을 보여주는 상세 모달",
      "localStorage 기반 즐겨찾기 관리 및 최근 검색어 저장",
      "로딩 스피너, 토스트 알림, 맨 위로 버튼 등 UX 디테일 구현",
    ],
    skills: "Vanilla JavaScript, OMDb API, localStorage",
    thumb: movieThumb,
    pdf: null,
    url: "https://hwan1002.github.io/movie/",
    github: "https://github.com/Hwan1002/movie",
    readme: "https://raw.githubusercontent.com/Hwan1002/movie/main/README.md",
  },
  {
    title: "IWC 리뉴얼(반응형 웹)",
    period: "개인 프로젝트",
    summary: "HTML, CSS, JavaScript, Jquery를 활용한 반응형 웹사이트",
    details: [
      "기존의 IWC 브랜드 사이트의 리뉴얼",
      "반응형 웹사이트로 PC,Table,Mobile 의 UI/UX 디자인 구현",
      "스크롤 하면서 컨텐츠가 소개되어 보는재미 UP!",
    ],
    skills: "HTML, CSS, JavaScript, Jquery",
    thumb: iwcThumb,
    pdf: iwc,
    url: null, // dothome 호스팅 만료로 링크 제거
    github: null,
    readme: "iwc-README.md",
  },
];

// README 안의 상대경로(readme-img/... 등)를 배포 경로(/Portfolio/) 기준으로 변환
// (dev 서버도 homepage 설정 때문에 /Portfolio 하위에서 자원을 서빙함)
const resolveReadmeAsset = (src) => {
  if (!src || /^(https?:|data:|\/)/.test(src)) return src;
  return `${process.env.PUBLIC_URL}/${src}`;
};

const readmeComponents = {
  img: ({ node, src, alt, ...props }) => (
    <img {...props} src={resolveReadmeAsset(src)} alt={alt || ""} />
  ),
  video: ({ node, src, ...props }) => <video {...props} src={resolveReadmeAsset(src)} />,
};

const Project = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalClosing, setModalClosing] = useState(false);
  const [readmeContent, setReadmeContent] = useState("");

  const openPdfFile = (pdfUrl) => {
    if (!pdfUrl) return;
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const loadReadme = async (fileName) => {
    try {
      // 절대 URL(GitHub raw 등)이면 그대로, 아니면 public 폴더에서 로드
      const url = /^https?:\/\//.test(fileName)
        ? fileName
        : `${process.env.PUBLIC_URL}/${fileName}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`README 로드 실패 (${response.status})`);
      }
      const text = await response.text();
      setReadmeContent(text);
    } catch (error) {
      console.error("Error loading README file:", error);
      setReadmeContent("README 파일을 불러오지 못했습니다.");
    }
  };

  const openModal = (fileName) => {
    setReadmeContent("");
    loadReadme(fileName);
    setModalOpen(true);
  };

  // 닫힘 애니메이션이 끝난 뒤 언마운트
  const closeModal = () => {
    setModalClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setModalClosing(false);
    }, 250);
  };

  // 모달이 열려 있는 동안 배경 스크롤 잠금 + ESC 로 닫기
  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalOpen]);

  return (
    <section id="project" className="project section">
      <div className="project_content content">
        <div className="section_title">
          <h3>PROJECTS</h3>
        </div>
        <div className="project_list content">
          {projects.map((project) => (
            <div className="project_detail" key={project.title}>
              <img className="project_thumb" src={project.thumb} alt={`${project.title} 미리보기`} />
              <h4>{project.title}</h4>
              <div className="project_period">{project.period}</div>
              <div className="project_summary">
                <h5>{project.summary}</h5>
                <ul className="projectSum_ul">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="project_skills">{project.skills}</div>
              <div className="project_buttons">
                {project.github && (
                  <div className="project_github project_button">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                )}
                {project.readme && (
                  <div className="project_readMe project_button">
                    <button onClick={() => openModal(project.readme)}>README</button>
                  </div>
                )}
                {project.pdf && (
                  <div className="project_pdf project_button">
                    <button onClick={() => openPdfFile(project.pdf)}>기획서</button>
                  </div>
                )}
                {project.url && (
                  <div className="project_url project_button">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      보러가기
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
          {modalOpen && (
            <div
              className={`modal-backdrop${modalClosing ? " closing" : ""}`}
              onClick={(e) => {
                // 배경(Backdrop)을 클릭했을 때만 모달 닫기
                if (e.target === e.currentTarget) {
                  closeModal();
                }
              }}
            >
              <div className="modal">
                <div className="modal-closeBt">
                  README.md
                  <button className="close-btn" onClick={closeModal} aria-label="Close">
                    &times;
                  </button>
                </div>
                {readmeContent ? (
                  <div className="modalContent">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={readmeComponents}
                    >
                      {readmeContent}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
