import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: {
      x: "-100px",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1
      }
    }
  };

  return (
    <div className={styles.aboutContainer}>
      <motion.h5
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={textVariants}
        className={styles.title}>
        О нашей школе
      </motion.h5>
      <section className={styles.aboutPreviewSection}>
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className={styles.cardContainer}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                fill={true}
                src="/about/about1.webp"
                alt="our school image"
                className={styles.coverImage}
                priority
              />
            </div>
          </div>
          <div className={styles.infoSection}>
            <h3 className={styles.sectionTitle}>Мы — первая школа скейтбординга в Москве.</h3>
            <p className={styles.sectionDesctiption}>
              Уже больше 13 лет мы помогаем новичкам (и не только) преодолеть все страхи, выучить
              новые трюки и искренне полюбить скейтбординг.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className={`${styles.cardContainer} ${styles.bottomCardContainer}`}>
          <div className={styles.bottomInfoSection}>
            <h3 className={styles.sectionTitle}>
              Schoolskate — школа, где каждый сможет открыть для себя много нового.
            </h3>
            <p className={styles.sectionDesctiption}>
              В нашей школе работают опытные тренера. Они проведут занятие, выстроят траекторию
              обучения, дадут полезные советы и исправят ошибки.
            </p>
          </div>
          <div styles className={styles.bottomImageSection}>
            <div className={styles.imageContainer}>
              <Image
                fill={true}
                style={{ borderRadius: "50%" }}
                src="/about/about2.webp"
                alt="our school image"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* <section className={styles.introductionVideoContainer}>
        <h3 className={styles.introTitle}>Расскажем о школе за 1 минуту</h3>
        <div className={styles.videoContainer}>
          <video
            src="/video-player/intro-video.mp4"
            className={styles.video}
            controls
            loop
            muted
            autoPlay></video>
        </div>
      </section> */}
    </div>
  );
};

export default About;
