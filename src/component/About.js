import person from "../css/img/icon/person.svg"
import calender from "../css/img/icon/calender.svg"
import location from "../css/img/icon/location.svg"
import telephone from "../css/img/icon/telephone.svg"
import message from "../css/img/icon/message.svg"
import pencil from "../css/img/icon/pencil.svg"
const About = () => {
    return (
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
                                <p>010-5617-0668</p>
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
                        {/* <div className="wrapper-item">
                            <div className="icon">
                                <img src={pencil} alt="icon" />
                            </div>
                            <div className="info">
                                <label>학력</label>
                                <p>검정고시</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;