import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as L } from "react-scroll";
import Link from "next/link";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BiVideo } from "react-icons/bi";

const Navbar = ({ isColored }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarVariants = {
    initial: {
      scaleY: 0
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5
      }
    }
  };

  const menuItemVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1]
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.45, 0.55, 1]
      }
    }
  };

  const menuContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        staggerDirection: 1
      }
    }
  };

  return (
    <motion.nav
      // initial={{ backgroundColor: "transparent" }}
      //
      style={isColored ? { backgroundColor: "#3a86ff" } : { backgroundColor: "transparent" }}
      className={styles.container}>
      <Link aria-label="ссылка на главную страницы" href="/">
        <div className={styles.logo}></div>
      </Link>

      <div className={styles.menu}>
        <L smooth spy activeClass={styles.activeSection} offset={-100} to="about">
          <p>О школе</p>
        </L>
        <L smooth offset={-100} activeClass={styles.activeSection} spy to="prices">
          <p>Цены</p>
        </L>
        <div>
          <L smooth offset={-100} activeClass={styles.activeSection} spy to="locations">
            <p>Локации</p>
          </L>
        </div>

        <L smooth offset={-100} activeClass={styles.activeSection} spy to="mentors">
          <p>Тренера</p>
        </L>
        <L smooth offset={-100} activeClass={styles.activeSection} spy to="faqs">
          <p>Вопросы</p>
        </L>
      </div>
      <div>
        <div className={styles.menuButtonsContainer}>
          <div className={styles.menuBtn}>
            <p>Записаться</p>
            <HiOutlinePencilAlt fontSize={20} />
          </div>

          <Link style={{ textDecoration: "none" }} href="/translation">
            <div className={styles.menuBtn}>
              <p>Трансляция</p>
              <BiVideo fontSize={20} />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.mobileMenuIcon}>
        <TfiMenu
          onClick={() => setIsMobileMenuOpen(true)}
          color={isMobileMenuOpen ? "white" : "#4361ee"}
          fontSize={42}
          fontStyle="900"
        />
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={navbarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.mobileMenuContainer}>
            <motion.div className={styles.mobileMenu}>
              <motion.div
                variants={menuContainerVariants}
                initial="initial"
                animate="open"
                exit="initial">
                <div style={{ overflow: "hidden" }}>
                  <motion.div variants={menuItemVariants} className={styles.mobileMenuItem}>
                    <L smooth spy offset={-100} to="about">
                      <p onClick={() => setIsMobileMenuOpen(false)}>О школе</p>
                    </L>
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div variants={menuItemVariants} className={styles.mobileMenuItem}>
                    <L smooth offset={-100} spy to="prices">
                      <p onClick={() => setIsMobileMenuOpen(false)}>Цены</p>
                    </L>
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div variants={menuItemVariants} className={styles.mobileMenuItem}>
                    <L smooth offset={-100} spy to="locations">
                      <p onClick={() => setIsMobileMenuOpen(false)}>Локации</p>
                    </L>
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div variants={menuItemVariants} className={styles.mobileMenuItem}>
                    <L smooth offset={-100} spy to="mentors">
                      <p onClick={() => setIsMobileMenuOpen(false)}>Тренера</p>
                    </L>
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div variants={menuItemVariants} className={styles.mobileMenuItem}>
                    <L smooth offset={-100} spy to="faqs">
                      <p
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                        }}>
                        Вопросы
                      </p>
                    </L>
                  </motion.div>
                </div>
              </motion.div>
              <div
                className={styles.closeIconContainer}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}>
                <AiOutlineClose fontSize={30} />
              </div>
              {/* <motion.div className={styles.mobileMenuLogoContainer}></motion.div> */}
              <div className={styles.mobileMenuEnrollBtn}>Записаться</div>
              <div className={styles.mobileMenuTranslationBtn}>
                <Link style={{ textDecoration: "none" }} href="/translation">
                  <div className={styles.menuBtn}>
                    <p style={{ color: "white" }}>Трансляция</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
