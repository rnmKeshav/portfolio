import * as React from "react"
import wave from "../images/wave.jpg";
import photo from "../images/keshav.webp";

import "../styles/main.scss";

import DynamicText from "../components/DynamicText";

const IndexPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="background-gradiant"></div>
        <div className="content">
          <div className="pure-u-3-5 center">
            <div className="board">
              <div className="social">
                <a className="card linkedin" href="https://www.linkedin.com/in/rnmkeshav/">
                  <i className="icon-linkedin"></i>
                  <i className="icon-linkedin-squared"></i>
                </a>
                <a className="card github" href="https://github.com/rnmKeshav">
                  <i className="icon-github-circled"></i>
                  <i className="icon-github-squared"></i>
                  {/* <span className="github"></span> */}
                </a>
                <a className="card facebook" href="https://www.facebook.com/rnmKeshav/">
                  <i className="icon-facebook"></i>
                  <i className="icon-facebook-squared"></i>
                </a>
                <a className="card instagram" href="https://www.instagram.com/rnmkeshav/">
                  <i className="icon-instagram"></i>
                  <i className="icon-instagram-1"></i>
                </a>
              </div>
              <div className="display-text">
                <div className="static">
                  Hey There! I am
                </div>
                <DynamicText />
              </div>
            </div>
          </div>
          <div className="pure-u-2-5 center">

            <img src={photo} className="photo"></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage;
