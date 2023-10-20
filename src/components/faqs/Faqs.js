import React, { useState } from "react";
import styles from "./faqs.module.scss";
import { faqData } from "@/data";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Faqs = () => {
  const [faqs, setFaqs] = useState(faqData);

  const toggleFaqs = (id) => {
    console.log("here");
    console.log(faqs);

    setFaqs((prevState) => {
      return prevState.map((item) => {
        console.log(item.id, id);
        if (item.id === id) return { ...item, isOpen: !item.isOpen };
        else return item;
      });
    });
  };

  return (
    <section className={styles.mainContainer}>
      <h4 className={styles.sectionTitle}>Часто задаваемые вопросы</h4>
      <p className={styles.sectionDescription}>
        Отвечаем на вопросы которые у вас могли появиться. Если ответа нет, напишите нам и мы с
        удовльствием ответим
      </p>
      <div className={styles.faqWrapper}>
        {faqs.map((item) => {
          return (
            <div className={styles.faqContainer} key={item.id} onClick={() => toggleFaqs(item.id)}>
              <div className={styles.questionContainer}>
                <p className={styles.questionText}>{item.question}</p>
                <div
                  className={`${styles.iconContainer} ${
                    faqs[item.id].isOpen && styles.iconContainerOpened
                  }`}>
                  <IoIosArrowDown fontSize={28} padding={10} />
                </div>
              </div>
              <AnimatePresence>
                {item.isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.4 }}
                    exit={{ height: 0, transition: { duration: 0.4 } }}
                    className={styles.answerContainer}>
                    <p className={styles.answer}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
