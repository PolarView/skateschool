import React from "react";
import styles from "./socials.module.scss";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

const Socials = () => {
  return (
    <section className={styles.mainContainer}>
      <h4 className={styles.sectionTitle}>
        Мы в социальных сетях - <br /> <span className={styles.hashtag}>#schoolskate</span>
      </h4>
      <div className={styles.instaWrapper}>
        <div className={styles.instaPostsContainer}>
          <div className={styles.instaImgWrapper}>
            <Image
              loading="lazy"
              src="/socials/socials1.webp"
              className={styles.socialsImage}
              fill
              alt="photo from social media"
            />
          </div>
          <div className={styles.instaImgWrapper}>
            <Image
              loading="lazy"
              src="/socials/socials2.webp"
              className={styles.socialsImage}
              fill
              alt="photo from social media"
            />
          </div>
          <div className={styles.instaImgWrapper}>
            <Image
              loading="lazy"
              src="/socials/socials3.webp"
              fill
              className={styles.socialsImage}
              alt="photo from social media"
            />
          </div>
          <div className={styles.instaImgWrapper}>
            <Image
              loading="lazy"
              src="/socials/socials4.webp"
              fill
              className={styles.socialsImage}
              alt="photo from social media"
            />
          </div>
        </div>
        <div className={styles.instaBtnContainer}>
          <div className={styles.followInstaBtn}>
            <p className={styles.btnText}>Следите за нами @schoolskate </p>
            <BiLinkExternal fontSize={28} />
          </div>
        </div>
      </div>
      <div className={styles.communitySection}>
        <div className={styles.communityInfo}>
          <div className={styles.svgQuotationSign}></div>
          <p className={styles.captionInfo}>
            Скейтбординг — это стиль жизни. Он помогает избавиться от страха перед падениями и учит
            преодолевать трудности. Хотите попробовать встать на доску? Приходите в Schoolskate!
            Наши ученики тренируются не только для своего удовольствия, но и принимают участие в
            различных соревнованиях по скейтбордингу, где занимают призовые места.
          </p>
          <div className={styles.groupContainer}>
            <div className={styles.groupImageContainer}>
              <Image loading="lazy" src="/about/skateCamp.webp" fill alt="our skate group photo" />
            </div>
            <div className={styles.groupLink}>Kate Vermilyea, English and psychology major</div>
          </div>
        </div>
        <div className={styles.communityImageContainer}>
          <Image loading="lazy" src="/socials/socials5.webp" fill alt="our skate group photo" />
          <div className={styles.imageFrame}></div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
