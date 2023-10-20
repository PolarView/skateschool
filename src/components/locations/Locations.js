import React from "react";
import styles from "./locations.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { locationsData } from "@/data";
import Link from "next/link";
import { Link as L } from "react-scroll";

const Locations = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.filterContainer}>
        <h1 className={styles.sectionTitle}>Локации</h1>
        <div className={styles.gridWrapper}>
          {locationsData.map((location) => {
            return (
              <div key={location.id} className={styles.carouselWrapper}>
                <Carousel
                  interval={5000}
                  autoPlay={true}
                  infiniteLoop={true}
                  emulateTouch={true}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={true}
                  showThumbs={false}
                  className={styles.carousel}>
                  {location.imagesSrc.map((item, index) => {
                    return (
                      <div className={styles.imageWrapper} key={index}>
                        <img
                          loading="lazy"
                          className={styles.carouselImage}
                          alt="skate park preview"
                          src={item}
                        />
                        <p className="legend">{location.name}</p>
                      </div>
                    );
                  })}
                </Carousel>
                <div className={styles.locationAdress}>{`Адрес: ${location.adress}`}</div>
                <Link target="_blank" className={styles.locationLink} href={location.link}>
                  Показать на карте
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.additionalInfoContainer}>
          <p className={styles.additionalInfo}>
            Также вы всегда можете предложить свой вариант места тренировки, если его нету в
            вышепредставленных локациях по тарифу
            <span className={styles.priceSectionLink}>
              <L aria-label="тренировка на выезд" smooth offset={200} spy to="prices">
                "тренировка на выезд"
              </L>
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
