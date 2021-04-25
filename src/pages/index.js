import * as React from "react"
import wave from "../images/wave.jpg";
import photo from "../images/keshav.webp";

import firstPhoto from "../images/1.jpeg";
import secondPhoto from "../images/2.jpeg";
import thirdPhoto from "../images/3.jpeg";

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
      <section className="summary center">
        <div className="background-gradiant"></div>
        <div className="board">
          {/* <div className="text first">
            <span className="hello">Hello, </span> 
            <span className="para">
              I'm a lead software engineer at practo technologies pvt. ltd. I mostly work on tech related to javascript like node, react, Gatsby etc. I have been working on javascript since 5 years now so have seen its evolution from vanilla jQuery to advanced react and node with various build tools deployed to get it working.
            </span>
          </div>
          
          <div className="text second">
            <div className="para">

              After graduating from IIT Jodhpur in computer science and engineering understanding foundational software concepts I started my career as a backend engineer working on PHP. Later switched to frontend tech.
            </div>
            <div className="para">
            I like tech gadgets so reading and exploring them has become my hobby. I badly play table tennis, like following cricket and watch marvel movies. 
            </div>
          </div> */}
          <div className="text1 stack-container">
            <img src={firstPhoto} className="photo first"></img>
            <img src={secondPhoto} className="photo second"></img>
            <img src={thirdPhoto} className="photo third"></img>
          </div>
          <div className="text1">
            <div className="pure-u-2-5"></div>
            <div className="pure-u-3-5 center">
              <div className="padding-20 padding-right-70">
              <span className="hello">Hello, </span> 
              <span className="para">
                I'm Keshav, a lead software engineer at Practo. 
                <div className="margin-top-8">

                  I mostly work on tech related to javascript like node, react, Gatsby etc. and have been working on frontend technologies since 5 years.
                </div>
                <div className="margin-top-8">
                  Graduated from IIT Jodhpur with Computer Science and Technologies stream. After which i started my career as backend developer working on PHP.
                </div>
                <div className="margin-top-8">
                I like tech gadgets so reading and exploring them has become my hobby. I badly play table tennis, like following cricket and watch marvel movies.
                </div>
              </span>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage;
