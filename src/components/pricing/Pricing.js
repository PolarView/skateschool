import React, { useState } from "react";
import styles from "./pricing.module.scss";
import Image from "next/image";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { pricingData } from "@/data";
import Link from "next/link";

const Pricing = () => {
  const [pricesState, setPricesState] = useState(pricingData);

  const changeTrainingDuration = (id) => {
    setPricesState((prevState) => {
      return prevState.map((item, index) => {
        if (item.id === id) {
          let newCurrentDuration;
          if (item.currentDuration === "hour") {
            newCurrentDuration = "halfAndHour";
          } else {
            newCurrentDuration = "hour";
          }
          return { ...item, currentDuration: newCurrentDuration };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <section className={styles.externalContainer}>
      <div className={styles.introductionInfoContainer}>
        <h4 className={styles.sectionTitle}>Цены</h4>
      </div>

      <div className={styles.pricesContainer}>
        {pricesState.map((item, index) => {
          return (
            <div key={item.id} className={styles.priceSection}>
              <div className={styles.priceImageWrapper}>
                <Image
                  loading="lazy"
                  src={item.imageSrc}
                  className={styles.coverImage}
                  alt="skate prices image"
                  fill
                />
              </div>
              <div className={styles.priceInfoContainer}>
                <div className={styles.trainingTypeTitle}>{item.trainingType}</div>
                <div className={styles.triningDescription}>{item.trainingDescription}</div>
                <div className={styles.changeTrianDurationContainer}>
                  <BiSolidLeftArrow fontSize={35} onClick={() => changeTrainingDuration(item.id)} />
                  <p className={styles.trainingType}>
                    {item.currentDuration === "hour" ? "занятие 1 час" : "занятие 1,5 часа"}
                  </p>
                  <BiSolidRightArrow
                    fontSize={35}
                    onClick={() => changeTrainingDuration(item.id)}
                  />
                </div>
                <div className={styles.pricesWrapper}>
                  <p className={styles.priceString}>{` Пробное занятие - ${
                    item.currentDuration === "hour"
                      ? item.duration.hour.firstTrainPrice
                      : item.duration.halfAndHour.firstTrainPrice
                  }р`}</p>
                  <p className={styles.priceString}>{` Стандартное занятие - ${
                    item.currentDuration === "hour"
                      ? item.duration.hour.standardTrainPrice
                      : item.duration.halfAndHour.standardTrainPrice
                  }р`}</p>
                </div>
                <Link href="/registration" style={{ textDecoration: "none" }} target="_blank">
                  <div className={styles.enrollBtn}>Записаться</div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.saleContainer}>
        <div className={styles.saleText}>
          Скидка на первое занятие любого вида - <br />
          <span>50%</span>
          <div className={styles.moneyIconSvg}></div>
          <div className={styles.moneyGuyIconSvg}></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
