import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import transition from "../transition";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

const Projects = () => {
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
      <div className="projects-container" data-scroll-container ref={containerRef} id="scroll-container">
        <section className="projects" data-scroll-section>
          <div className="projects-copy">
            <div className="projects-copy-ws"></div>

            <div className="projects-copy-h1">
              <h1>We take pride in our work. Here are some of our selected projects that showcase our expertise and creativity.</h1>
            </div>
          </div>

          <div className="projects-list">
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-1"></div>
                <div className="project-name">
                  <p>Brand Identity Revamp &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Graphic Design</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-2"></div>
                <div className="project-name">
                  <p>Mobile App UI Kit &#8599;</p>
                </div>
                <div className="project-category">
                  <p>UI/UX Design</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="projects-list">
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-3"></div>
                <div className="project-name">
                  <p>E-commerce Website Redesign &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Web Design</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-4"></div>
                <div className="project-name">
                  <p>Packaging Concept Series &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Packaging Design</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="projects-list">
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-1"></div>
                <div className="project-name">
                  <p>Social Media Campaign Creatives &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Digital Design</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-2"></div>
                <div className="project-name">
                  <p>Corporate Presentation Template &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Visual Communication Design</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="projects-list">
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-3"></div>
                <div className="project-name">
                  <p>Product Landing Page &#8599;</p>
                </div>
                <div className="project-category">
                  <p>UI Design</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-4"></div>
                <div className="project-name">
                  <p>Event Poster Collection &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Print Design</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="projects-list">
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-1"></div>
                <div className="project-name">
                  <p>Icon & Illustration Set &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Illustration Design</p>
                </div>
              </div>
            </Link>
            <Link to="/sample-project-page">
              <div className="project">
                <div className="project-img project-img-2"></div>
                <div className="project-name">
                  <p>Dashboard Interface Concept &#8599;</p>
                </div>
                <div className="project-category">
                  <p>Interaction Design</p>
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

              <p>Bangalore, IN {time}</p>
            </div>
          </div>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default transition(Projects);
