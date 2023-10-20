import React from "react";
import styles from "./introductionCards.module.scss";
import Image from "next/image";
const IntroductionCards = () => {
  return (
    <section className={styles.introCardsContainer}>
      <div className={styles.intoductionCardsTextWrapper}>
        <h4 className={styles.introductionCardsTitle}>Почему выбирают именно Schoolskate?</h4>
        <p className={styles.introductionCardsDescription}>
          Причин множество, но мы делимся с вами тремя, самыми близкими нам
        </p>
      </div>
      <div className={styles.introductionCardsWrapper}>
        <div className={styles.intoductionCard}>
          <div className={styles.introductionCardImageWrapper}>
            <Image
              loading="lazy"
              src="/introductionCards/card1.webp
              "
              alt="illustation of our school work"
              fill={true}
              className={styles.coverImage}
            />
          </div>
          <div className={styles.introductionCardInfoWrapper}>
            <h6 className={styles.introCardCaption}>Занятия для любого уровня</h6>
            <p className={styles.introductionCardDesc}>
              Мы собрали крутую команду тренеров по скейтбордингу. Они помогут новичкам уверенно
              встать на доску и безопасно выучить базовые трюки. А тех, кто уже умеет кататься
              подготовят к соревнованиям и научат делать более сложные трюки.
            </p>
          </div>
        </div>

        <div className={styles.intoductionCard}>
          <div className={styles.introductionCardImageWrapper}>
            <Image
              loading="lazy"
              src="/introductionCards/card2.webp
              "
              alt="illustation of our school work"
              fill={true}
              className={styles.coverImage}
            />
          </div>
          <div className={styles.introductionCardInfoWrapper}>
            <h6 className={styles.introCardCaption}>Мы умеем вдохновлять!</h6>
            <p className={styles.introductionCardDesc}>
              У вас или у вашего ребенка появится искренняя любовь к скейтбордингу, когда вы
              выберите тренера и начнете регулярно посещать занятия.
            </p>
          </div>
        </div>

        <div className={styles.intoductionCard}>
          <div className={styles.introductionCardImageWrapper}>
            <Image
              loading="lazy"
              src="/introductionCards/card3.webp
              "
              alt="illustation of our school work"
              fill={true}
              className={styles.coverImage}
            />
          </div>
          <div className={styles.introductionCardInfoWrapper}>
            <h6 className={styles.introCardCaption}>Безопастность учеников - наш приоритет</h6>
            <p className={styles.introductionCardDesc}>
              С нами учиться кататься максимально безопасно. Мы научим правильно падать, подстрахуем
              во время трюков и предоставим защиту на время тренировки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IntroductionCards;
