import React from "react";
import styles from "./coreValues.module.scss";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitle}> Что мы ценим</div>
      <div className={styles.iconGridContainer}>
        <div className={styles.valueContainer}>
          <div className={styles.iconWrapper}>
            <Image loading="lazy" alt="ценность 1" fill src="/coreValues/value1.svg" />
          </div>
          <div className={styles.valueCaption}> Движение вперёд</div>
          <div className={styles.valueDescription}>
            В нашей скейт-школе мы верим, что движение вперёд - это не просто фраза, это наша
            жизненная философия. Скейтбординг - это бесконечное движение, поиск новых возможностей и
            смелые скачки в будущее. Мы вдохновляем наших учеников двигаться вперёд в скейтбординге
            и в жизни.
          </div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.iconWrapper}>
            <Image loading="lazy" alt="ценность 2" fill src="/coreValues/value2.svg" />
          </div>
          <div className={styles.valueCaption}>Безопасность</div>
          <div className={styles.valueDescription}>
            Безопасность - наш приоритет. Мы предоставляем безопасное обучение, где наши ученики
            могут развиваться и совершенствовать свои навыки с уверенностью. Мы обеспечиваем
            правильное использование защиты и соблюдение всех мер безопасности, чтобы каждый момент
            на доске был лишен рисков.
          </div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.iconWrapper}>
            <Image loading="lazy" alt="ценность 3" fill src="/coreValues/value3.svg" />
          </div>
          <div className={styles.valueCaption}>Эмоции</div>
          <div className={styles.valueDescription}>
            Эмоции - это то, что делает скейтбординг таким особенным. Наши ученики испытывают море
            эмоций на каждом занятии: радость от успешного трюка, волнение перед новыми вызовами и
            дружбу в сообществе единомышленников. Мы создаем атмосферу, где каждый момент - это
            возможность пережить что-то удивительное.
          </div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.iconWrapper}>
            <Image loading="lazy" alt="ценность 4" fill src="/coreValues/value4.svg" />
          </div>
          <div className={styles.valueCaption}>Индивидуальный подход</div>
          <div className={styles.valueDescription}>
            В нашей скейт-школе мы понимаем, что каждый ученик уникален. Мы придерживаемся
            индивидуального подхода к обучению, помогая каждому развиваться в собственном темпе и
            стиле. Мы поощряем самовыражение и помогаем каждому ученику достичь своих целей в
            скейтбординге.
          </div>
        </div>
      </div>
      {/* <div className={styles.upperRowContainer}>
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
      </div> */}
    </div>
  );
};

export default CoreValues;
