import githubText from "../css/img/icon/githubText.jpg"

const Archiving = () => {
    return(
        <section id="archiving" className="archiving section">
          <div className="archiving_content content">
            <div className="section_title">
              <h3>ARCHIVING</h3>
            </div>
            <div className="section_content">
              <a href="https://github.com/Hwan1002" className="archiving_box">
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
    )
}

export default Archiving