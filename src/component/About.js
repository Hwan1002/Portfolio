import person from "../css/img/icon/person.svg";
import location from "../css/img/icon/location.svg";
import message from "../css/img/icon/message.svg";

const aboutItems = [
  { icon: person, label: "이름", value: "장환석" },
  { icon: location, label: "위치", value: "인천광역시 서구" },
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
          안녕하세요, 프론트엔드부터 백엔드까지 서비스 전반을 다루는 풀스택 개발자{" "}
          <strong>장환석</strong>입니다.
          <br />
          React로 사용자 화면을 만들고 Spring Boot와 AWS로 서버 구축과 배포까지, 기획부터 운영까지
          서비스의 전 과정을 경험했습니다.
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
        </div>
      </div>
    </section>
  );
};

export default About;
