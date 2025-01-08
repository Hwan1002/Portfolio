import "./css/style.css"
import person from "./css/img/icon/person.svg"
import calender from "./css/img/icon/calender.svg"
import location from "./css/img/icon/location.svg"
import telephone from "./css/img/icon/telephone.svg"
import message from "./css/img/icon/message.svg"
import pencil from "./css/img/icon/pencil.svg"
import java from "./css/img/icon/Java-Light.svg"
import spring from "./css/img/icon/Spring-Light.svg"
import mysql from "./css/img/icon/MySQL-Light.svg"
import gradle from "./css/img/icon/Gradle-Light.svg"
import html from "./css/img/icon/HTML.svg"
import css from "./css/img/icon/CSS.svg"
import javaScript from "./css/img/icon/JavaScript.svg"
import react from "./css/img/icon/React-Light.svg"
import node from "./css/img/icon/NodeJS-Light.svg"
import github from "./css/img/icon/Github-Light.svg"
import githubText from "./css/img/icon/githubText.jpg"
import git from "./css/img/icon/Git.svg"
import nginx from "./css/img/icon/Nginx.svg"
import aws from "./css/img/icon/AWS-Light.svg"
import ittrip from "./css/img/pdf/ItTrip.pdf"
import iwc from "./css/img/pdf/iwc.pdf"

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPdfFile = (type) => {
    const urlMap = {
      ittrip: ittrip,
      iwc: iwc
    };
    const pdfUrl = urlMap[type];
    window.open(pdfUrl, '_blank')
  }
  return (
    <>
      <div className="App">
        <header className='header'>
          <div className='container'>
            <button className='logo'>Portfolio</button>
            <nav className='navBar'>
              <button onClick={() => scrollToSection('about')}>About Me</button>
              <button onClick={() => scrollToSection('skills')}>Skills</button>
              <button onClick={() => scrollToSection('archiving')}>Archiving</button>
              <button onClick={() => scrollToSection('project')}>Projects</button>
              <button onClick={() => scrollToSection('career')}>Career</button>
            </nav>
          </div>
        </header>
        <div className='mastHead'>
          <div className='mastHead_contents'>
            <h1 className='mastHead_Title'>환석이의 뽀트폴리오</h1>
            <hr className="mastHead_divider"></hr>
            <h2 className='mastHead_Descript'>
              안녕하세요
              <br />
              개발자 장환석입니다.
            </h2>
            <button className="mastHead_button">더 알아보던가</button>
          </div>
        </div>
        {/* <div className='contents'>
        <p>내용들어갈것</p>
      </div> */}
        <section id="about" className="aboutMe section">
          <div className="aboutMe_content content">
            <div className="section_title">
              <h3>ABOUT ME</h3>
            </div>
            <div className="section_content aboutMe_content">
              <div className="wrapper">
                <div className="wrapper-item">
                  <div className="icon">
                    <img src={person} alt="icon" />
                  </div>
                  <div className="info">
                    <label>이름</label>
                    <p>장환석</p>
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="wrapper-item">
                  <div className="icon">
                    <img src={calender} alt="icon" />
                  </div>
                  <div className="info">
                    <label>생년월일</label>
                    <p>95.10.02</p>
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="wrapper-item">
                  <div className="icon">
                    <img src={location} alt="icon" />
                  </div>
                  <div className="info">
                    <label>위치</label>
                    <p>인천광역시 서구</p>
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="wrapper-item">
                  <div className="icon">
                    <img src={telephone} alt="icon" />
                  </div>
                  <div className="info">
                    <label>연락처</label>
                    <p>010-5617-****</p>
                  </div>
                </div>

              </div>
              <div className="wrapper">
                <div className="wrapper-item">
                  <div className="icon">
                    <img src={message} alt="icon" />
                  </div>
                  <div className="info">
                    <label>이메일</label>
                    <p>ladudae112@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="wrapper-item">
                  <div className="icon">
                    <img src={pencil} alt="icon" />
                  </div>
                  <div className="info">
                    <label>학력</label>
                    <p>검정고시</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills section">
          <div className="skills_all">
            <div className="section_title">
                <h3>SKILLS</h3>
            </div>
            <div className="skills_content content">
              <div className="section_content skills_icon">
                <img src={html} alt="skills"/>
                <img src={css} alt="skills"/>
                <img src={javaScript} alt="skills"/>
                <img src={react} alt="skills"/>
                <img src={node} alt="skills"/>
                <img src={java} alt="skills"/>
                <img src={spring} alt="skills"/>
                <img src={mysql} alt="skills"/>
                <img src={gradle} alt="skills"/>
                <img src={nginx} alt="skills"/>
                <img src={git} alt="skills"/>
                <img src={github} alt="skills"/>
                <img src={aws} alt="skills"/>
              </div>
            </div>
          </div>
        </section>
        <section id="archiving" className="archiving section">
          <div className="archiving_content content">
            <div className="section_title">
              <h3>ARCHIVING</h3>
            </div>
            <div className="section_content">
              <a href="#" className="archiving_box">
                <div className="githubImg">
                  <img src={githubText} alt="github"/>
                </div>
                <div className="githubAddress">https://github.com/Hwan1002</div>
                <div className="btns">
                  <p>소스 코드 저장소</p>
                </div>
              </a>
            </div>
          </div>
        </section>
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
                <div className="project_url">
                  <button onClick={() => openPdfFile('ittrip')}>기획서</button>
                </div>
                <div className="project_url">
                  <a href="http://ittrip.shop">보러가기</a>
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
                  HTML, CSS, React, Java, Spring boot,AWS,EC2,RDS
                </div>
                <div className="project_url">
                  <button onClick={() => openPdfFile('')}>기획서</button>
                </div>
                <div className="project_url">
                  <a href="https://hwan1002.github.io/movie/movie.html">보러가기</a>
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
                <div className="project_url">
                  <button onClick={() => openPdfFile('iwc')}>기획서</button>
                </div>
                <div className="project_url">
                  <a href="http://ghkstjr12.dothome.co.kr/iwc/index.html">보러가기</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="career" className="career section">
          <div className="career_content content">
            <div className="section_title">
              <h3>CAREER</h3>
            </div>
            <div className="section_content">
              <div className="career_company">
                <h4>엔포트버스 주식회사</h4>
                <div>
                  <p>웹사이트의 전반적인 프론트엔드 개발 구현을 하였습니다.</p>
                  <p>2022.12 ~ 2024.03</p>
                </div>
              </div>
              <div className="career_company">
                <h4>램마운트코리아</h4>
                <div>
                  <p>웹사이트의 기획,디자인,퍼블리싱 작업을 하였습니다.</p>
                  <p>2022.02 ~ 2022.11</p>
                </div>
              </div>
              <div className="career_company">
                <h4>비에이치</h4>
                <div>
                  <p>핸드폰과 태블릿 디스플레이 내부 제품을 다루고 생산하는 업무를 하였습니다.</p>
                  <p>2020.09 ~ 2021.04</p>
                </div>
              </div>
              <div className="career_company">
                <h4>플레이위더스</h4>
                <div>
                  <p>공항 면세점 명품관에서 외국인들에게 서비스를 제공하며 판매하는 업무를 하였습니다.</p>
                  <p>2019.03 ~ 2020.04</p>
                </div>
              </div>
              <div className="career_company">
                <h4>자라리테일코리아</h4>
                <div>
                  <p>고객에게 트랜드컬러 , 유행하는 스타일 ,코디 방법등을 설명 드리며 판매하는 업무 입니다.</p>
                  <p>2017.09 ~ 2018.09</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  );
}

export default App;
