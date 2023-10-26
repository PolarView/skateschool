import React from "react";
import styles from "./founders.module.scss";
import Image from "next/image";

const Founders = () => {
  return (
    <section className={styles.foundersSectionContainer}>
      <h4 className={styles.foundersTitle}>Основатели</h4>
      <div className={styles.founderContainer}>
        <div className={styles.founderImageContainer}>
          <div className={styles.founderImageWrapper}>
            <div className={styles.imageFrame}></div>
            <Image
              className={styles.founderImage}
              src="/founders/founder1.webp"
              alt="first founder of our school"
              fill={true}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.founderDetails}>
          <div className={styles.founderName}>Роман Чаплеевский</div>
          <p className={styles.founderDescription}>
            Один из основателей школы Schoolskate и скейт-парка Bunker. Его стаж катания уже больше
            20 лет, а тренерская деятельность — больше 10. Рома призер множества соревнований по
            скейтбордингу, таких как: Raw Ramp Champ 1 и 2 (1 и 3 место), Homeplace United Fest 1 и
            2 (1 место), а также многократный победитель 365 practice day. Он основатель Московской
            федерации по скейтбордингу с 2013 года, а также действующий судья соревнований по
            скейту. Специально для занятий Рома разработал свой метод подготовки скейтбордистов.
            Индивидуальный и безопасный, который подходит как новичкам, так и опытным райдерам. В
            свободное от работы время совершенствует свой стиль катания на скейтборде. Умение
            кататься в обеих стойках (в собственной и switch) главный элемент его программы.
          </p>
          <div className={styles.contactFounderBtn}>Контакт</div>
        </div>
      </div>
      {/* <div className={`${styles.founderContainer} ${styles.bottomFounderContainer}`}>
        <div className={styles.founderDetails}>
          <h4 className={styles.founderName}>Roman Chapaev</h4>
          <p className={styles.founderDescription}>
            Take your learning hands-on and develop essential career skills. Take your learning
            hands-on and develop essential career skills. Take your learning hands-on and develop
            essential career skills. Take your learning hands-on and develop essential career
            skills. Take your learning hands-on and develop essential career skills. Take your
            learning hands-on and develop essential career skills. Take your learning hands-on and
            develop essential career skills. Take your learning hands-on and develop essential
            career skills.
          </p>
          <div className={styles.contactFounderBtn}>Contact</div>
        </div>
        <div className={styles.founderImageWrapper}>
          <div className={styles.imageFrame}></div>
          <Image src="/about/skateCamp.jpg" alt="second founder of our school" fill={true} />
        </div>
      </div> */}
    </section>
  );
};

export default Founders;
