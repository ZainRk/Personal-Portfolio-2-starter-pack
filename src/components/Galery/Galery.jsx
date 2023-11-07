import React from "react";
import { motion } from "framer-motion";
import css from "./Galery.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import useScrollToTop from "../../hooks/useScrollToTop";

const Galery = () => {
  useScrollToTop();
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={` innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Works Galery</span>
            <p style={{ marginTop: "10px" }}>
              All rights reserved, please contact me before use
            </p>
          </div>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.div variants={fadeIn("up", "tween", 0, 0.6)}>
            <a href="./works/work1.html" target="_blank">
              <img src="./showCase1.png" alt="project" />
              <p className={`secondaryText flexCenter`}>Work1</p>
            </a>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.2, 0.6)}>
            <a href="./works/work1.html" target="_blank">
              <img src="./showCase2.png" alt="project" />
              <p className={`secondaryText flexCenter`}>Work2</p>
            </a>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.4, 0.6)}>
            <a href="./works/work1.html" target="_blank">
              <img src="./showCase3.png" alt="project" />
              <p className={`secondaryText flexCenter`}>Work3</p>
            </a>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.6, 0.6)}>
            <a href="./works/work1.html" target="_blank">
              <img src="./showCase1.png" alt="project" />
              <p className={`secondaryText flexCenter`}>Work4</p>
            </a>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.8, 0.6)}>
            <a href="./works/work1.html" target="_blank">
              <img src="./showCase2.png" alt="project" />
              <p className={`secondaryText flexCenter`}>Work5</p>
            </a>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 1.0, 0.6)}>
            <a href="./works/work1.html" target="_blank">
              <img src="./showCase3.png" alt="project" />
              <p className={`secondaryText flexCenter`}>Work6</p>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Galery;
