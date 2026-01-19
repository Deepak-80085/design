import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import transition from '../transition';
import animationData from "../careers-lottie.json"

import "./Careers.css"

const Careers = () => {
  const containerRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, // Use the imported animationData here
    });
  }, []);

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
      <section className='careers' data-scroll-container ref={containerRef} id="scroll-container">
        <div className="careers-copy" data-scroll-section>
          <div className="careers-copy-p">
            <span>We are always looking for talented individuals to join our growing team. Could that be you?</span>
          </div>
          <div className="careers-copy-h1">
            <h1>If you are passionate about design and technology, we want to hear from you. Check out our open positions below.</h1>
          </div>
        </div>
        <div className="careers-lottie">
          <div className="container" ref={container}></div>
        </div>
      </section>
    </LocomotiveScrollProvider>
  );
};

export default transition(Careers);
