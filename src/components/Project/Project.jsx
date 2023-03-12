import React from "react";
import { motion } from "framer-motion";
import css from "./Project.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { projectInfo } from '../../utils/data'
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
          <a href="https://github.com/CaaaseyD" target="_blank"><span className="secondaryText">Explore More Works</span></a>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          {
            projectInfo.map((exp, i)=> {
                return <motion.div variants={fadeIn("up", "tween", (i+1)*0.2, 1)} key={i} className={css.project}>
                  <a href={exp.src} target="_blank">
                    <img className={css.img} src={exp.bg} alt=""/>
                    <h3 className={css.first}>{exp.name}</h3>
                    <h3 className={css.second}>{exp.intro}</h3>
                    <div className={css.tags}>
                      <span>{exp.tag1}</span>
                      <span>{exp.tag2}</span>
                    </div>
                  </a>
                </motion.div>
            })
          }
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
