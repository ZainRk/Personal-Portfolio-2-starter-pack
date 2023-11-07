import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`${css.wrapper} paddings`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.middleElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There,
            <br />
            I'm Yuan TANG
          </motion.span>

          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I design beautiful Email
            <br />
            things, And I love what I do
          </motion.span>
        </div>

        <motion.div
          className={css.person}
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
