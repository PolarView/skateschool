"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./mentors.module.scss";
import { motion } from "framer-motion";
import { mentorsData } from "@/data";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { GoMute, GoUnmute } from "react-icons/go";

const Mentors = () => {
  const [carouselWidth, setCarouselWidth] = useState(null);
  const carouselRef = useRef(null);

  const videoRefs = mentorsData.map(() => useRef(null));
  const [playing, setPlaying] = useState(Array(mentorsData.length).fill(false));
  const [muted, setMuted] = useState(Array(mentorsData.length).fill(false));

  const handleTogglePlay = (index) => {
    const newPlaying = [...playing];
    newPlaying[index] = !newPlaying[index];
    setPlaying(newPlaying);

    const video = videoRefs[index].current;
    if (newPlaying[index]) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleToggleMute = (index) => {
    const newMuted = [...muted];
    newMuted[index] = !newMuted[index];
    setMuted(newMuted);

    const video = videoRefs[index].current;
    video.muted = newMuted[index];
  };

  useEffect(() => {
    setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    console.log(carouselWidth);
  }, []);

  return (
    <section className={styles.mainContainer}>
      <h3 className={styles.titleSection}>Тренера</h3>
      <motion.div className={styles.carousel} ref={carouselRef}>
        <motion.div
          style={{ touchAction: "none" }}
          className={styles.innerCarousel}
          dragConstraints={{ right: 0, left: -carouselWidth }}
          drag="x">
          {mentorsData.map((mentor, index) => {
            return (
              <motion.div key={index} className={styles.itemContainer}>
                <motion.div className={styles.mentorItem}>
                  <div className={styles.videoContainer} style={{ backgroundImage: mentor.video }}>
                    <video
                      playsInline
                      poster={mentor.thumb}
                      // ref={(el) => (videoRefsArray.current[index] = el)}
                      ref={videoRefs[index]}
                      src={mentor.video}
                      className={styles.video}></video>
                    <div className={styles.videoIconsContainer}>
                      {playing[index] ? (
                        <div
                          onClick={() => handleTogglePlay(index)}
                          className={styles.pauseBtnContainer}>
                          <BsPauseFill fontSize={34} />
                        </div>
                      ) : (
                        <div
                          onClick={() => handleTogglePlay(index)}
                          className={styles.playBtnContainer}>
                          <BsFillPlayFill fontSize={34} />
                        </div>
                      )}
                      {muted[index] ? (
                        <div
                          onClick={() => handleToggleMute(index)}
                          className={styles.unmuteBtnContainer}>
                          <GoUnmute fontSize={34} />
                        </div>
                      ) : (
                        <div
                          onClick={() => handleToggleMute(index)}
                          className={styles.muteBtnContainer}>
                          <GoMute fontSize={34} />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
                <div className={styles.mentorInfoContainer}>
                  <p className={styles.mentorsName}>{mentor.name}</p>
                  <p className={styles.mentorsExperience}>Стаж: {mentor.experience} Лет</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Mentors;
