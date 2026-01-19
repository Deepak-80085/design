import { React, useState, useEffect, useRef } from "react";

import transition from "../transition";
import AboutHero from "../../assets/about-hero.jpg";
import AboutFeature from "../../assets/about-feature.jpg";
import Office from "../../assets/about-office.jpg";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./About.css";

const About = () => {
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

    const hours = String(istTime.getHours()).padStart(2, "0");
    const minutes = String(istTime.getMinutes()).padStart(2, "0");
    const seconds = String(istTime.getSeconds()).padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  }

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        className="about smooth-scroll"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <section className="hero-img" data-scroll-section>
          <div className="hero-img-container">
            <img src={AboutHero} alt="" />
          </div>
        </section>

        <section className="about-us" data-scroll-section>
          <div className="about-us-copy">
            <div className="about-us-copy-p">
              <span>About Us</span>
              <br />
              <p>
                We are a creative studio based in Bangalore, driven by a passion for design and technology. We build brands, craft digital experiences, and create solutions that connect people.
              </p>
              <br />
              <p>
                Studio Design was founded on the belief that great design is not just about aesthetics, but about problem-solving. We partner with our clients to understand their needs and deliver work that exceeds expectations.
              </p>
              <br />
            </div>
            <div className="about-us-copy-p">
              <span>Studio Design</span>
              <span>Digital Creative Studio</span>
              <span>9th Block Jayanagar</span>
              <span>Bangalore, Karnataka</span>
              <br />
              <span>
                <a href="mailto:deepak.kumaran.m@gmail.com">deepak.kumaran.m@gmail.com</a>
              </span>
            </div>
          </div>
        </section>

        <section id="about-sticky-wrap" data-scroll-section>
          <div
            className="about-sticky about-sticky-1"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#about-sticky-wrap"
          >
            <div className="sticky-content">
              <div className="sitcky-content-h1">
                <h1 className="num">1</h1>
              </div>
              <div className="sitcky-content-h1">
                <h1>Design:</h1>
                <h1>
                  Our design process is iterative and collaborative. We start by listening, then we explore, prototype, and refine until we have the perfect solution.
                </h1>
              </div>
            </div>
          </div>
          <div className="about-sticky about-sticky-2">
            <div className="sticky-content">
              <div className="sitcky-content-h1">
                <h1 className="num">2</h1>
              </div>
              <div className="sitcky-content-h1">
                <h1>Development:</h1>
                <h1>
                  We write clean, performant code using modern technologies. Our development team ensures that your project is robust, scalable, and secure.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-img" data-scroll-section>
          <div className="hero-img-container">
            <img src={AboutFeature} alt="" />
          </div>
        </section>

        <section className="more-clients" data-scroll-section>
          <div className="more-clients-h1">
            <h1>We've worked with</h1>
          </div>
          <div className="more-clients-logos">
            <div className="more-clients-logo">LOGO 1</div>
            <div className="more-clients-logo">LOGO 2</div>
            <div className="more-clients-logo">LOGO 3</div>
            <div className="more-clients-logo">LOGO 4</div>
            <div className="more-clients-logo">LOGO 5</div>
            <div className="more-clients-logo">LOGO 6</div>
            <div className="more-clients-logo">LOGO 7</div>
            <div className="more-clients-logo">LOGO 8</div>
            <div className="more-clients-logo">LOGO 9</div>
          </div>
        </section>

        <section className="about-us office" data-scroll-section>
          <div className="hero-img-container">
            <img src={Office} alt="" />
          </div>
          <div className="about-us-copy">
            <div className="about-us-copy-p">
              <span>Studio Design</span>
              <span>Digital Creative Studio</span>
              <span>9th Block Jayanagar</span>
              <span>Bangalore, Karnataka</span>
              <br />
              <span>
                <a href="mailto:deepak.kumaran.m@gmail.com">deepak.kumaran.m@gmail.com</a>
              </span>
            </div>
            <div className="about-us-copy-h1">
              <h1 id="office">Workplace</h1>
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

              <p>Bangalore, IN {time}</p>
            </div>
          </div>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default transition(About);
