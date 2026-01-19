import React, { useRef } from "react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import transition from "../transition";

import "./Contact.css";

const Contact = () => {
  const containerRef = useRef(null);

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
      <section
        className="contact"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <div className="contact-copy" data-scroll-section>
          <span>Project Inquiries</span>
          <br />
          <br />
          <p>
            Ready to elevate your digital presence? We transform ideas into
            exceptional design solutions. Let's create something unmatched.
          </p>
          <br />
          <a href="mailto:deepak.kumaran.m@gmail.com">deepak.kumaran.m@gmail.com</a>
          <br />
          <br />
          <br />
          <p>Opening times : Mon–Fri, 10 AM – 6 PM (IST)</p>
          <br />
          <br />
          <span>Networks</span>
          <br />
          <br />
          <a href="#">Twitter</a>
          <br />
          <a href="#">Instagram</a>
          <br />
          <a href="#">LinkedIn</a>
          <br />
          <br />
          <br />
          <span>Our Workplace</span>
          <br />
          <br />
          <p>9th Block Jayanagar</p>
          <p>Bangalore, Karnataka</p>
          <p>India</p>
          <br />
          <span id="copyright">
            Unusual Studio is a creative design agency <br /> Bangalore, IN © 2026 ALL
            RIGHTS RESERVED.
          </span>
        </div>
      </section>
    </LocomotiveScrollProvider>
  );
};

export default transition(Contact);
