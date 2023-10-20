import React from "react";
import styles from "./reviews.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Reviews = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.sectionTitle}>
        <h4>Узнайте как оценивают нашу работу и поделитесь своими впечатлениями!</h4>
        <div className={styles.starIconsContainer}>
          {[...Array(4)].map((item, index) => (
            <div key={index}>
              <BsStarFill color="#FFDF00" fontSize={35} />
            </div>
          ))}
          <div>
            <BsStarHalf color="#FFDF00" fontSize={35} />
          </div>
        </div>
      </div>
      <div className={styles.sliderSection}>
        <div className={styles.sliderWrapper}>
          <div style={{ width: "100%", height: "800px", maxWidth: "800px", position: "relative" }}>
            <iframe
              title="отзывы"
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
                boxSizing: "border-box"
              }}
              src="https://yandex.ru/maps-reviews-widget/173307838687?comments"
            />
            <a
              href="https://yandex.ru/maps/org/schoolskate_ru/173307838687/"
              target="_blank"
              rel="preload"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "#b3b3b3",
                fontSize: "10px",
                fontFamily: "YS Text,sans-serif",
                padding: "0 16px",
                position: "absolute",
                bottom: "8px",
                width: "100%",
                textAlign: "center",
                left: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
                maxHeight: "14px",
                whiteSpace: "nowrap"
              }}>
              Schoolskate.ru на карте Москвы — Яндекс&nbsp;Карты
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
