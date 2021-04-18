import * as React from "react"
import wave from "../images/wave.jpg";

import "../styles/main.scss";

const IndexPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="background-gradiant"></div>
        <div className="content">
          <div className="pure-u-2-3 center">
            <div className="board">
              <div className="display-text">
                <div className="static">
                  Hey There! I am
                </div>
                <div className="dynamic">
                  <ul>
                    <li><span className="effect name">Keshav Kumar</span></li>
                    <li><span className="effect designation">Software Engineer</span></li>
                    <li><span className="effect profile">Javascript Developer</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="pure-u-1-3">

            {/* <img className="wave" src={wave} /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage;
