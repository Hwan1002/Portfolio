import person from "../css/img/icon/person.svg";
import calender from "../css/img/icon/calender.svg";
import location from "../css/img/icon/location.svg";
import telephone from "../css/img/icon/telephone.svg";
import message from "../css/img/icon/message.svg";

const aboutItems = [
  { icon: person, label: "이름", value: "장환석" },
  { icon: calender, label: "생년월일", value: "95.10.02" },
  { icon: location, label: "위치", value: "인천광역시 서구" },
  { icon: telephone, label: "연락처", value: "010-5617-0668" },
  { icon: message, label: "이메일", value: "ladudae112@gmail.com" },
];

const About = () => {
  return (
    <section id="about" className="aboutMe section">
      <div className="aboutMe_content content">
        <div className="section_title">
          <h3>ABOUT ME</h3>
        </div>
        <p className="aboutMe_intro">
          안녕하세요, 사용자 경험을 먼저 생각하는 프론트엔드 개발자 <strong>장환석</strong>입니다.
          <br />
          퍼블리싱으로 시작해 React와 Spring Boot로 기획부터 배포까지 서비스 개발을 경험했고,
          화면 너머의 사용자를 상상하며 만드는 일에 즐거움을 느낍니다.
        </p>
        <div className="section_content aboutMe_content">
          {aboutItems.map((item) => (
            <div className="wrapper" key={item.label}>
              <div className="wrapper-item">
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="info">
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </div>
              </div>
            </div>
          ))}
          {/* 3열 정렬 유지를 위한 빈 칸 */}
          <div className="wrapper" />
        </div>
      </div>
    </section>
  );
};

export default About;
