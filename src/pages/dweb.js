import * as React from "react"
import { Helmet } from "react-helmet";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import photo from "../images/keshav.jpeg";

import schema from "../components/Schema";

import firstPhoto from "../images/1.jpeg";
import secondPhoto from "../images/2.jpeg";
import thirdPhoto from "../images/3.jpeg";
import hemaPhoto from "../images/hema.jpeg";
import gudduPhoto from "../images/guddu.jpeg";
import papaPhoto from "../images/papa.jpeg";
import momPhoto from "../images/mom.jpeg";
import contactKeshavPhoto from "../images/contact_keshav.jpeg";

import "../styles/dweb/main.scss";

import DynamicText from "../components/DynamicText";
import DesignationCard from "../components/DesignationCard";
import ProjectCard from "../components/ProjectCard";

const IndexPage = () => {
  return (
    <div className="dweb">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keshav Kumar | Javascript Developer</title>
        <meta name="description" content="Keshav Kumar is a Software Engineer works on Javascript and frontend tech. Graduated from IIT Jodhpur and currently working at Practo Technologoes" />
        <meta name="keywords" content="Keshav Kumar, rnmKeshav, Practo, IIT Jodhpur, Javascript Developer, Sitamarhi" />
        <meta name="author" content="Keshav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="canonical" href="https://rnmkeshav.in/mweb" />
        <script type="application/ld+json">
          {`${schema()}`}
        </script>
      </Helmet>
      
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
            <LazyLoadImage
              alt="Keshav Kumar, @rnmkeshav photo"
              src={photo}
              className="photo"
            />
            {/* <img src={photo} className="photo"></img> */}
          </div>
        </div>
      </section>
      <section className="summary center">
        <div className="background-gradiant"></div>
        <div className="board">
          <div className="text1 stack-container">
            <LazyLoadImage 
              src={firstPhoto} alt="Keshav Kumar @rnmKeshav" className="photo first"
            />
            <LazyLoadImage 
              src={secondPhoto} className="photo second" alt="Keshav Kumar"
            />
            <LazyLoadImage 
              src={thirdPhoto} className="photo third" alt="Keshav Kumar"
            />
            {/* <img src={firstPhoto} alt="Keshav Kumar @rnmKeshav" className="photo first"></img>
            <img src={secondPhoto} className="photo second" alt="Keshav Kumar"></img>
            <img src={thirdPhoto} className="photo third" alt="Keshav Kumar"></img> */}
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
      <section className="experience center">
        <div className="background-gradiant"></div>

          <div className="designation-wrapper">
            <DesignationCard 
              designation="Software Engineer"
              company="Fuziosparc Pvt. Ltd, Bangalore"
              time="August 2014 - August 2015"
              description="It was an early stage digital marketing startup. Developed a complete product from scratch using PHP, MySQL, JavaScript etc."
            />
            <DesignationCard 
              designation="Software Engineer"
              company="Practo Technologies, Bangalore"
              time="Aug 2015 – Sept 2017"
              description="Was responsible for internal tools used by sales team. Worked on backend technologies like PHP, MySQL
              initially and then switched to JavaScript full time."
            />
            <DesignationCard 
              designation="Senior Software Engineer"
              company="Practo Technologies, Bangalore"
              time="Oct 2017 – Dec 2020"
              description="I took care of frontend products like homepage, search/listing, public profiles, appointment booking, provider
              profiles, BFF layer along with aggregator layer service. Was involved in designing, developing and
              performance evaluation of complete product."
            />
            
            <DesignationCard 
              designation="Lead Software Engineer"
              company="Practo Technologies, Bangalore"
              time="Jan 2021 – Present"
              description="I am responsible for the end to end consumer facing Practo’s UI and middle layer products. Actively involved
              in product roadmap contribution, engineering design and solutioning. Leading and guiding marketplace-ui-ux
              engineering team."
            />
          </div>
          <div className="project-wrapper">
            <div className="card-list">
            <ProjectCard 
              title="Provider onboarding flow"
              description="A product to cater demands of different types of providers from their signup, profile details,
              multi doctor, multi clinic and its various attribute capturing for taking user live on practo.com"
              skills={["Application design", "React", "Redux", "SASS"]}
            />
            <ProjectCard 
              title="Listing performance and design improvement"
              description="Aim was to improve overall look and feel of the product with better UX and scalable design.
              Devised an optimised listing architecture for scalable and performant design."
              skills={["Frontend architecture", "React", "Engineering Design", "JavaScript"]}
            />
            <ProjectCard 
              title="Online Consult Flow"
              description="Developed a user flow starting at doctor listing and profiles with available / unavailable slots,
              payment details to book a video consult appointment for marketplace doctors"
              skills={["Javascript", "React", "Fluxible", "Express", "Routing"]}
            />
            
            <ProjectCard 
              title="Core Web Vitals Improvement"
              description="Improvement in LCP, CLS for all marketplace products which includes Practo’s
              doctor/clinic/hospital search, profile and all other transaction pages."
              skills={["Node", "Express", "Webpack", "Loadable Components", "Redux"]}
            />
            </div>
          
          </div>
      </section>
      <section className="family center">
        <div className="background-gradiant"></div>
        <div className="image-wrapper">
          <LazyLoadImage 
            src={papaPhoto} className="photo" alt="Ramnaresh Mandal, Father"
          />
          {/* <img src={papaPhoto} className="photo" alt="Ramnaresh Mandal, Father"></img> */}
          <div className="details">
            Father
          </div>
        </div>
        <div className="image-wrapper">
          <LazyLoadImage
            src={momPhoto} className="photo" alt="Chandramin Kumari, Mom"
          />
          {/* <img src={momPhoto} className="photo" alt="Chandramin Kumari, Mom"></img> */}
          <div className="details">
            Mom
          </div>
        </div>
        <div className="image-wrapper">
          <LazyLoadImage 
            src={gudduPhoto} className="photo guddu" alt="Alok Raj, Brother"
          />
          {/* <img src={gudduPhoto} className="photo guddu" alt="Alok Raj, Brother"></img> */}
          <div className="details">
            Brother
          </div>
        </div>
        <div className="image-wrapper">
          {/* <span className="photo hema"></span> */}
          <LazyLoadImage 
            src={hemaPhoto} className="photo hema" alt="Mahi Shree, Sister"
          />
          {/* <img src={hemaPhoto} className="photo hema" alt="Mahi Shree, Sister"></img> */}
          <div className="details">
            Sister
          </div>
        </div>
      </section>
      <section className="contact center">
        <div className="background-gradiant"></div>
        <div className="content">
          <div className="pure-u-1-2 u-t-align">
            <LazyLoadImage 
              src={contactKeshavPhoto} className="photo" alt="Keshav Kumar, @rnmkeshav Contact"
            />
            {/* <img src={contactKeshavPhoto} className="photo" alt="Keshav Kumar, @rnmkeshav Contact"></img> */}
          </div>
          <div className="pure-u-1-2">
            <div className="connect">
              <h5 className="header">Let's Connect</h5>
              <div className="stay">
                I stay in Arekere, Bangalore.
                <div>
                  We can always get in touch at Practo Technologies, Bannerghatta road office or <code>@rnmKeshav</code> online.
                </div>
              </div>
              
              <div className="email">rnmKeshav@gmail.com</div>
              <div className="cta">
                <a  href = "mailto: rnmkeshav@gmail.com" type="button" className="button">Click To Email</a>
                <a  href="tel:+919008001555" type="button" className="button">Click To Call</a>
              </div>
            </div>
            
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default IndexPage;
