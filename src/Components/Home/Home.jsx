import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import transition from "../transition";
import HeroImg from "../../assets/hero-img.jpg"
import BannerImg from "../../assets/banner-img.jpg";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import "./Home.css";

const Home = () => {
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
      <div className="home" data-scroll-container ref={containerRef} id="scroll-container">
        <section className="hero-img" data-scroll-section>
          <div className="hero-img-container">
            <img src={BannerImg} alt="" />
          </div>
          <div className="hero-img-copy">
            <div className="hero-img-copy-h1">
              <h1>Studio Design</h1>
            </div>
          </div>
        </section>
        <section className="projects" data-scroll-section>
          <div className="projects-copy">
            <div className="projects-copy-ws"></div>

            <div className="projects-copy-h1">
              <h1>We craft immersive digital experiences that blend aesthetics with functionality. Every pixel serves a purpose.</h1>
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
        </section>
        <section className="article" data-scroll-section>
          <div className="article-container">
            <div className="article-container-copy">
              <h1>Design is not just what it looks like and feels like. Design is how it works. We bring your vision to life through strategic innovation.</h1>
              <a href="#">Explore Work &#8599;</a>
            </div>
          </div>
        </section>
        <section className="services" data-scroll-section>
          <div className="services-copy-p"><span>Our Expertise</span></div>
          <div className="services-copy-h1"><h1>From brand identity to web development, we offer a comprehensive suite of design services tailored to your unique needs.</h1></div>
        </section>
        <section className="feature-img" data-scroll-section>
          <div className="feature-img-container">
            <img src={HeroImg} alt="" />
          </div>
        </section>
        <section className="logos" data-scroll-section>
          <Marquee>
            <div className="client-logos">
              <div className="client-logo">
                <p>Logo 1</p>
              </div>
              <div className="client-logo">
                <p>Logo 2</p>
              </div>
              <div className="client-logo">
                <p>Logo 3</p>
              </div>
              <div className="client-logo">
                <p>Logo 4</p>
              </div>
              <div className="client-logo">
                <p>Logo 5</p>
              </div>
              <div className="client-logo">
                <p>Logo 6</p>
              </div>
              <div className="client-logo">
                <p>Logo 7</p>
              </div>
              <div className="client-logo">
                <p>Logo 8</p>
              </div>
            </div>
          </Marquee>
        </section>
        <section className="clients" data-scroll-section>
          <div className="client-copy">
            <div className="client-copy-p">
              <p>OUR PHILOSOPHY</p>
              <br />
              <p>At Studio Design, we believe in the power of simplicity. We strip away the non-essential to reveal the core of your brand's message. Our approach is collaborative, transparent, and driven by a passion for excellence.</p>
              <br />
              <p>We work with clients who are ready to challenge the status quo. Whether you are a startup looking to make a splash or an established brand seeking a refresh, we are here to help you achieve your goals.</p>
              <br />
              <p>Innovation is at the heart of everything we do. We stay ahead of the curve, exploring new technologies and design trends to deliver cutting-edge solutions.</p>
            </div>
            <div className="client-copy-p">
              <p>Our team consists of multidisciplinary creative minds who are dedicated to their craft. We combine strategy, design, and technology to build brands that matter.</p>
              <br />
              <p>Let us help you tell your story. Connect with us to discuss your next project and see how we can bring your ideas to reality.</p>
            </div>
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

export default transition(Home);
