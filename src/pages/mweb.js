import React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "../styles/mweb/main.scss";

import DynamicText from "../components/DynamicText";
import SummaryCard from "../components/SummaryCard.mweb";
import DesignationCard from "../components/DesignationCard";
import ProjectCard from "../components/ProjectCard";

import photo from "../images/keshav.jpeg";

import thirdPhoto from "../images/1_cropped.jpeg";
import secondPhoto from "../images/2_cropped.jpeg";
import firstPhoto from "../images/3_cropped.jpeg";

const Mweb = () => {
  return (
    <div className="mweb">
      <section className="hero">
        <div className="card">
          <div className="photo-container">
            <LazyLoadImage
              alt="Keshav Kumar, @rnmkeshav photo"
              src={photo}
              className="photo"
            />
          </div>
          <div className="display-text">
            <div className="static">
              Hey There! I am
            </div>
            <DynamicText />
          </div>
        </div>
      </section>
      <section className="summary">
        <div className="card-list">
          <SummaryCard 
            image_url={firstPhoto} 
            text="I mostly work on tech related to javascript like node, react, Gatsby etc. and have been working on frontend technologies since 5 years." 
          />
          <SummaryCard 
            image_url={secondPhoto} 
            image_styles={{"objectPosition": "100%"}}
            text="Graduated from IIT Jodhpur with Computer Science & Technologies. After which i started my career as backend developer working on PHP." 
          />
          <SummaryCard 
            image_url={thirdPhoto} 
            image_styles={{"objectPosition": "70%"}}
            text="I like tech gadgets so reading and exploring them has become my hobby. I play table tennis, like cricket and watch marvel movies." 
          />
        </div>
      </section>
      <section className="experience">
        <div className="designation-wrapper">
          <div className="card-list">
            <DesignationCard 
              designation="Lead Software Engineer"
              company="Practo Technologies, Bangalore"
              time="Jan 2021 – Present"
              description="I am responsible for the end to end consumer facing Practo’s UI and middle layer products. Actively involved
              in product roadmap contribution, engineering design and solutioning. Leading and guiding marketplace-ui-ux
              engineering team."
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
              designation="Software Engineer"
              company="Practo Technologies, Bangalore"
              time="Aug 2015 – Sept 2017"
              description="Was responsible for internal tools used by sales team. Worked on backend technologies like PHP, MySQL
              initially and then switched to JavaScript full time."
            />          
            <DesignationCard 
              designation="Software Engineer"
              company="Fuziosparc Pvt. Ltd, Bangalore"
              time="August 2014 - August 2015"
              description="It was an early stage digital marketing startup. Developed a complete product from scratch using PHP, MySQL, JavaScript etc."
            />          
         
          </div>
          
        </div>
        <div className="project-wrapper">
            {/* <div className="card-list"> */}
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
            {/* </div> */}
          
        </div>
      </section>
    </div>
  );
}

export default Mweb;