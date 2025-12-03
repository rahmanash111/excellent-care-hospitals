import './App.css'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Specialties from './Pages/LandingPage/Specialties';
// import HospitalHeroSection from './Components/heroSection';
import LandingPage from './Pages/LandingPage/LandingPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { useLayoutEffect, useRef } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {

  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Zoom animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "100%",
          end: "100%",
          pin: false,
          scrub: false,
        }
      });

      gsap.to(buttonRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "100%",
          end: "bottom bottom",
          scrub: true
        },
        display: "block"
      });

    }, heroRef);

    return () => ctx.revert();

  }, [])

  return (
    <BrowserRouter>
      <div className="relative">
        <Header buttonRef={buttonRef} />
        <Routes>
          <Route path="/" element={<LandingPage heroRef={heroRef} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
