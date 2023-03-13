import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./Experiment.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion';
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Experiment = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="experiment"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Experiment</span>
          <p style={{ marginTop: "2rem" }}>
            The process of experiment is facinating...
          </p>
        </div>



        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="image" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <a className={css.bio} target="_blank" href={comment.href}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default Experiment;
