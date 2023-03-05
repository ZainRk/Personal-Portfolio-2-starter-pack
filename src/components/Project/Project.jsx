import React from "react";
import { motion } from "framer-motion";
import css from "./Project.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Project = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`bg-primary paddings ${css.wrapper}`}>

      <a className="anchor" id="project"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>

        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Projects</span>
            <p style={{marginTop: "10px"}}>I would love to try and work on exciting projects</p>
          </div>
          <a href="https://github.com/CaaaseyD"><span className="secondaryText">Explore More Works</span></a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
