import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import transition from "../transition";
import ProjectHeroImg from "../../assets/project-img-1.jpg"
import ProjectImg from "../../assets/project-img.jpg"
import ProjectPageImg2 from "../../assets/project-page-img-2.jpg"
import ProjectPageImg3 from "../../assets/project-img-2.jpg"

import "./Project.css"

const Project = () => {
  const containerRef = useRef(null);
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(utc + istOffset);

    const hours = String(istTime.getHours()).padStart(2, '0');
    const minutes = String(istTime.getMinutes()).padStart(2, '0');
    const seconds = String(istTime.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  }

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div className="project-wrapper" data-scroll-container ref={containerRef} id="scroll-container">
        <section className="project-type" data-scroll-section>
          <div className="project-type-copy">
            <span>Brand Identity Revamp</span>
            <span>Graphic Design</span>
            <span>Unusual Studio</span>
            <span>2026</span>
          </div>
        </section>

        <section className="project-hero" data-scroll-section>
          <div className="project-hero-img">
            <img src={ProjectHeroImg} alt="" />
          </div>
        </section>

        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>Our goal was to create a brand identity that stands out in a crowded market. We focused on clean lines, bold typography, and a vibrant color palette to convey energy and innovation.</p>
              <br />
              <p>The project involved extensive research and strategy sessions to align the design with the client's business objectives. The result is a cohesive visual system that spans across digital and physical touchpoints.</p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>Redefining brand identity through design.</h1>
            </div>

          </div>
        </section>

        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={ProjectImg} alt="" />
          </div>
        </section>

        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">
            <div className="project-overview-copy-p">
              <p>We approached the challenge with a user-centric mindset. By understanding the target audience, we were able to design an interface that is intuitive and engaging. Every interaction was carefully considered to ensure a seamless experience.</p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1>Crafting intuitive user experiences.</h1>
            </div>

          </div>
        </section>

        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={ProjectPageImg2} alt="" />
          </div>
        </section>

        <section className="project-info" data-scroll-section>
          <div className="project-info-copy">
            <p>The final deliverable was a comprehensive design system that the client's internal team could easily use and expand upon. This ensured consistency and scalability for the brand as it grows.</p>
            <br />
            <p>We are proud of the impact this project has had on the client's business, helping them attract new customers and increase engagement.</p>
          </div>
          <div className="project-info-img">
            <img src={ProjectPageImg3} alt="" />
          </div>
        </section>

        <section className="project-img-full" data-scroll-section>
          <div className="project-img-full-wrapper">
            <img src={ProjectImg} alt="" />
          </div>
        </section>

        <section className="project-overview" data-scroll-section>
          <div className="project-overview-copy">

            <div className="project-overview-copy-p">
              <p>Ready to start your own project? Contact us today to discuss how we can help you achieve your goals.</p>
            </div>
            <div className="project-overview-ws"></div>
            <div className="project-overview-copy-h1">
              <h1><a href="#"><u>studiodesign.com</u></a></h1>
            </div>
          </div>
        </section>

        <section className="projects discover" data-scroll-section>
          <div className="projects-copy">
            <div className="projects-copy-h1">
              <h1>Find more projects</h1>
            </div>
            <div className="projects-copy-ws"></div>
          </div>
          <div className="projects-list">
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-3"></div>
                <div className="project-name">
                  <p>Mobile App UI Kit &#8599;</p>
                </div>
                <div className="project-category">
                  <p>UI/UX Design</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-4"></div>
                <div className="project-name">
                  <p>E-commerce Website Redesign &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Web Design</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="footer" data-scroll-section>
          <div className="footer-copy">
            <div className="footer-copy-h1">
              <a href="#">
                <h1>Contact</h1>
              </a>
            </div>
            <div className="footer-copy-text">
              <p>Digital creative studio</p>
              <br />
              <p><a href="#">Twitter</a> • <a href="#">Instagram</a> • <a href="#">LinkedIn</a></p>
              <br />
              <p>Bangalore, IN {time}</p>
            </div>
          </div>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default transition(Project);