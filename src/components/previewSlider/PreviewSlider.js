import styles from "./previewSlider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import React from "react";

const PreviewSlider = ({ previewSliderRef }) => {
  return (
    <div ref={previewSliderRef} className={styles.sliderContainer}>
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        showThumbs={false}
        swipeable
        stopOnHover
        emulateTouch={true}
        showStatus={false}
        renderIndicator={false}
        className={styles.carousel}>
        <div className={styles.sliderSingleItem}>
          <Image
            fill
            className={styles.sliderImage}
            alt="our skatepark advantages"
            src="/slider-preview/v4.webp"
            priority
          />
        </div>
        <div className={styles.sliderSingleItem}>
          <Image
            fill
            className={styles.sliderImage}
            alt="our skatepark advantages"
            src="/slider-preview/v3.webp"
            priority
          />
        </div>
        <div className={styles.sliderSingleItem}>
          <Image
            fill
            className={styles.sliderImage}
            alt="our skatepark advantages"
            src="/slider-preview/slider4.webp"
            priority
          />
        </div>
      </Carousel>
      <p className={styles.sectionCaption}>
        Первая школа скейтбординга для детей и взрослых в Москве
      </p>
    </div>
  );
};

export default PreviewSlider;
