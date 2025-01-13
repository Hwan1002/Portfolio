import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ittrip from "../css/img/pdf/ItTrip.pdf";
import iwc from "../css/img/pdf/iwc.pdf"
const Project = () => {
  const openPdfFile = (type) => {
    const urlMap = {
      ittrip: ittrip,
      iwc: iwc
    };
    const pdfUrl = urlMap[type];
    window.open(pdfUrl, '_blank')
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [readmeContent, setReadmeContent] = useState("");



  const loadReadme = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/README.md`); // public 폴더 기준 경로
      const text = await response.text();
      setReadmeContent(text);
    } catch (error) {
      console.error("Error loading README file:", error);
    }
  };

  const openModal = () => {
    loadReadme(); // README 파일 로드
    setModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <section id="project" className="project section">
      <div className="project_content content">
        <div className="section_title">
          <h3>PROJECTS</h3>
        </div>
        <div className="project_list content">
          <div className="project_detail">
            <h4>IT Trip (반응형웹)</h4>
            <div className="project_period">팀 프로젝트</div>
            <div className="project_summary">
              <h5>React, Spring Boot 를 활용하여 개발한 반응형 웹사이트 AWS 배포</h5>
              <ul className="projectSum_ul">
                <li>여행계획을 할 수 있는 사이트 개발</li>
                <li>여행내 일정마다 출발지, 도착지, 경유지들을 저장하고 맵에 띄울 수 있도록 개발</li>
                <li>소요시간, 키로수 확인 기능 구현</li>
                <li>여행에 필요한 물품이나 준비물등을 체크할 수 있는 체크리스트 구현</li>
              </ul>
            </div>
            <div className="project_skills">
              HTML, CSS, React, Java, Spring boot,AWS,EC2,RDS
            </div>
            <div className="project_pdf project_button">
              <button onClick={() => openPdfFile('ittrip')}>기획서</button>
            </div>
            <div className="project_url project_button">
              <a href="http://ittrip.site">보러가기</a>
            </div>
            <div className="project_readMe project_button">
              <button onClick={openModal}>README</button>
            </div>
          </div>
          <div className="project_detail">
            <h4>Movie (순수 자바스크립트)</h4>
            <div className="project_period">개인 프로젝트</div>
            <div className="project_summary">
              <h5>Vanilla JS 활용하여 영화 검색 및 즐겨찾기 개발</h5>
              <ul className="projectSum_ul">
                <li>OTT 감성으로 영화 리스트 확인 가능</li>
                <li>무한 스크롤 기능 구현</li>
                <li>즐겨찾기를 하여 내가 즐겨찾기한 영화를 관리</li>
              </ul>
            </div>
            <div className="project_skills">
              Vanilla JavaScript
            </div>
            <div className="project_pdf project_button">
              <button onClick={() => openPdfFile('')}>기획서</button>
            </div>
            <div className="project_url project_button">
              <a href="https://hwan1002.github.io/movie/movie.html">보러가기</a>
            </div>
            <div className="project_readMe project_button">
              <button onClick={openModal}>README</button>
            </div>
          </div>
          <div className="project_detail">
            <h4>IWC 리뉴얼(반응형 웹)</h4>
            <div className="project_period">개인 프로젝트</div>
            <div className="project_summary">
              <h5>HTML, CSS, JavaScript, Jquery를 활용한 반응형 웹사이트</h5>
              <ul className="projectSum_ul">
                <li>기존의 IWC 브랜드 사이트의 리뉴얼</li>
                <li>반응형 웹사이트로 PC,Table,Mobile 의 UI/UX 디자인 구현</li>
                <li>스크롤 하면서 컨텐츠가 소개되어 보는재미 UP!</li>
              </ul>
            </div>
            <div className="project_skills">
              HTML, CSS, React, JavaScript, Jquery
            </div>
            <div className="project_pdf project_button">
              <button onClick={() => openPdfFile('iwc')}>기획서</button>
            </div>
            <div className="project_url project_button">
              <a href="http://ghkstjr12.dothome.co.kr/iwc/index.html">보러가기</a>
            </div>
            <div className="project_readMe project_button">
              <button onClick={openModal}>README</button>
            </div>
          </div>
          {modalOpen && (
          <div className="modal-backdrop" onClick={(e) => {
            // 배경(Backdrop)을 클릭했을 때만 모달 닫기
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}>
            <div className="modal">
              {/* 닫기 버튼 */}
              <div className = "modal-closeBt">
                README.md
              <button className="close-btn" onClick={closeModal} aria-label="Close">
                &times;     
              </button>
              </div>
              {/* README 내용 표시 */}
              {readmeContent ? (
                <div className="modalContent">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]} // HTML 태그 허용
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
    
  )
}

export default Project;