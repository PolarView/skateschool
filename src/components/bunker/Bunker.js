import React from "react";
import styles from "./bunker.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Bunker = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.sectionIntroductionContainer}>
        <h4 className={styles.sectionTitle}>
          <span className={styles.magicWords}>Schoolskate</span> — больше, чем школа скейтбординга.
        </h4>
        <h6 className={styles.sectionDescription}>
          Специально для наших учеников мы спроектировали и создали, место в котором их тренировки
          будут приностить{" "}
          <span className={styles.magicWords}>максимум результата и удовольствия </span> ,
          представляем - <br />
          <div className={styles.bunkerKeyWord}>Bunker</div>
        </h6>
      </div>
      <div className={styles.sliderContainer}>
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
            <img
              className={styles.sliderImage}
              alt="our skatepark advantages"
              src="/bunker/bunker1.webp"
              loading="lazy"
            />
            <p className={styles.slideCaption}>
              Все фигуры максимально безопасны, а на время тренировки можно взять защиту и
              скейтборд.
            </p>
          </div>
          <div className={styles.sliderSingleItem}>
            <img
              className={styles.sliderImage}
              alt="our skatepark advantages"
              src="/bunker/bunker2.webp"
              loading="lazy"
            />
            <p className={styles.slideCaption}>
              В нашем скейт-парке запрещено приходить кататься на самокате и BMX.{" "}
            </p>
          </div>
          <div className={styles.sliderSingleItem}>
            <img
              className={styles.sliderImage}
              alt="our skatepark advantages"
              src="/bunker/bunker3.webp"
              loading="lazy"
            />
            <p className={styles.slideCaption}>
              Скейт-парк находится в пешей доступности от метро Динамо или Аэропорт.
            </p>
          </div>
          <div className={styles.sliderSingleItem}>
            <img
              className={styles.sliderImage}
              alt="our skatepark advantages"
              src="/bunker/bunker4.webp"
              loading="lazy"
            />
            <p className={styles.slideCaption}>
              В скейт-парке есть крутая зона отдыха с настольным теннисом и другими развлечениями
            </p>
          </div>
        </Carousel>
        <div className={styles.enrollBunkerBtn}>Хочу в Бункер!</div>
      </div>
    </section>
  );
};

export default Bunker;
