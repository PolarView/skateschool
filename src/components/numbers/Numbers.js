import React from "react";
import styles from "./numbers.module.scss";
import { PiStudentDuotone } from "react-icons/pi";

const Numbers = () => {
  return (
    <section className={styles.container}>
      <div className={styles.filterContainer}>
        <h4 className={styles.sectionTitle}>Мы в цифрах!</h4>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            <div className={styles.singleItemWrapper}>
              <PiStudentDuotone fontSize={45} />
              <div className={styles.number}>13+</div>
              <p className={styles.caption}>Лет работы</p>
            </div>
            <div className={styles.singleItemWrapper}>
              <PiStudentDuotone fontSize={45} />
              <div className={styles.number}>80 000+</div>
              <p className={styles.caption}> Часов тренировок</p>
            </div>
            <div className={styles.singleItemWrapper}>
              <PiStudentDuotone fontSize={45} />
              <div className={styles.number}>300+</div>
              <p className={styles.caption}> Учеников Schoolskate</p>
            </div>
            <div className={styles.singleItemWrapper}>
              <PiStudentDuotone fontSize={45} />
              <div className={styles.number}>20+</div>
              <p className={styles.caption}> Участников соревнований</p>
            </div>
            <div className={styles.singleItemWrapper}>
              <PiStudentDuotone fontSize={45} />
              <div className={styles.number}>10+</div>
              <p className={styles.caption}> Победителей контестов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
