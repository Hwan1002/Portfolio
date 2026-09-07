const careers = [
  {
    name: "(주)마음사랑",
    role: "풀스택 개발",
    period: "2025.02 ~ 현재",
    desc: "React, TypeScript, Node.js, Docker 등을 활용해 ASP·Angular 기반의 레거시 사이트들을 리뉴얼하고 있습니다.",
    current: true,
  },
  {
    name: "엔포트버스 주식회사",
    role: "프론트엔드 개발",
    period: "2022.12 ~ 2024.03",
    desc: "웹사이트의 전반적인 프론트엔드 개발 구현을 하였습니다.",
  },
  {
    name: "램마운트코리아",
    role: "기획 · 디자인 · 퍼블리싱",
    period: "2022.02 ~ 2022.11",
    desc: "웹사이트의 기획, 디자인, 퍼블리싱 작업을 하였습니다.",
  },
];

const educations = [
  {
    name: "코리아IT아카데미",
    role: "공공데이터 융합 AWS 클라우드 활용 풀스택",
    period: "2024.07 ~ 2025.01",
    desc: "Java, Spring Boot, JavaScript, React, React Native 등을 활용해 애플리케이션을 만들고 AWS Console을 활용하여 배포하는 방법을 배웠습니다.",
  },
  {
    name: "팀스파르타 주식회사",
    role: "DB 엔지니어링",
    period: "2023.01 ~ 2023.02",
    desc: "SQL 활용 방법과 조회, 수정, 삭제, 등록 문법 등을 배웠습니다.",
  },
  {
    name: "그린아카데미",
    role: "웹퍼블리셔(UI/UX)",
    period: "2021.06 ~ 2021.11",
    desc: "포토샵, HTML5, CSS3, 웹표준, JavaScript, jQuery, UI/UX 콘텐츠 기획서 작성법, OA 등의 기술을 배웠습니다.",
  },
];

const CareerCard = ({ item }) => (
  <div className="career_company">
    <div className="career_company_head">
      <h5>{item.name}</h5>
      {item.current && <span className="career_badge">재직 중</span>}
    </div>
    <p className="career_role">{item.role}</p>
    <p className="career_desc">{item.desc}</p>
    <p className="career_period">{item.period}</p>
  </div>
);

const Career = () => {
  return (
    <section id="career" className="career section">
      <div className="career_content content">
        <div className="section_title">
          <h3>CAREER</h3>
        </div>
        <div className="career_group">
          <h4 className="career_group_title">Work Experience</h4>
          <div className="career_grid">
            {careers.map((item) => (
              <CareerCard item={item} key={item.name} />
            ))}
          </div>
        </div>
        <div className="career_group">
          <h4 className="career_group_title">Education</h4>
          <div className="career_grid">
            {educations.map((item) => (
              <CareerCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
