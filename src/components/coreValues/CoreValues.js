import React from "react";
import styles from "./coreValues.module.scss";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitle}>Наши ценности</div>
      <div className={styles.upperRowContainer}>
        <div className={styles.valueContainer}>
          <div className={styles.iconWrapper}>
            <Image loading="lazy" alt="ценность 1" fill src="/coreValues/value1.svg" />
          </div>
          <div className={styles.valueCaption}> Движение вперёд</div>
          <div className={styles.valueDescription}>
            Скейтбординг - это больше, чем спорт. Это наше сообщество, где каждый может найти свое
            место.
          </div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.iconWrapper}>
            <Image loading="lazy" alt="ценность 2" fill src="/coreValues/value2.svg" />
          </div>
          <div className={styles.valueCaption}>Безопасность</div>
          <div className={styles.valueDescription}>Безопасное обучение, безопасное катание.</div>
        </div>
      </div>
      <div className={styles.bottomRowContainer}>
        <div className={styles.valueContainer}>
          <div className={styles.iconWrapper}>
            <Image loading="lazy" alt="ценность 3" fill src="/coreValues/value3.svg" />
          </div>
          <div className={styles.valueCaption}>Эмоции</div>
          <div className={styles.valueDescription}>
            На каждом занятии ученики получают море эмоций.
          </div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.iconWrapper}>
            <Image loading="lazy" alt="ценность 4" fill src="/coreValues/value4.svg" />
          </div>
          <div className={styles.valueCaption}>Индивидуальный подход</div>
          <div className={styles.valueDescription}>
            Постепенно развиваясь, с каждой попыткой на шаг ближе к результату.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
