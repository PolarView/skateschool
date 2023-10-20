"use client";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Locations from "@/components/locations/Locations";
import Mentors from "@/components/mentors/Mentors";
import Socials from "@/components/socials/Socials";
import Reviews from "@/components/reviews/Reviews";
import Faqs from "@/components/faqs/Faqs";
import Numbers from "@/components/numbers/Numbers";
import Pricing from "@/components/pricing/Pricing";
import CoreValues from "@/components/coreValues/CoreValues";
import Bunker from "@/components/bunker/Bunker";
import Founders from "@/components/founders/Founders";
import IntroductionCards from "@/components/introductionCards/IntroductionCards";
import PreviewSlider from "@/components/previewSlider/PreviewSlider";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  const [isNavbarColored, setIsNavbarColored] = useState(false);
  const previewSliderRef = useRef(null);
  const isInView = useInView(previewSliderRef, { once: false, amount: 0.1 });
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    console.log("effect");
    if (isInView) {
      setIsNavbarColored(false);
    } else {
      setIsNavbarColored(true);
    }
  }, [isInView]);

  return (
    <main className={styles.main}>
      <Navbar isColored={isNavbarColored} />

      <PreviewSlider previewSliderRef={previewSliderRef} />
      <div id="about">
        <About />
      </div>

      <CoreValues />
      <Bunker />
      <IntroductionCards />
      <Founders />

      <section id="locations">
        <Locations />
      </section>

      <section id="mentors">
        <Mentors />
      </section>
      <section id="prices">
        <Pricing />
      </section>

      <Socials />
      <Numbers />

      <Reviews />
      <section id="faqs">
        <Faqs />
      </section>
    </main>
  );
}
