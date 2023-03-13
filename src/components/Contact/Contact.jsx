import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Contact.module.scss";
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`bg-primary     paddings ${css.wrapper}`}>

    <a className="anchor" id="contact"></a>

      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="sencondaryText">
            Start by contact me via <span>baimaxsolution@gmail.com</span>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Find me on</span>
          </div>
          <ul className={css.menu}>
            <li><span className={css.icon}><BsLinkedin size={30} /></span><span className={css.text}>Linkedin</span></li>
            <li><span className={css.icon}><BsGithub size={30} /></span><span className={css.text}>Github</span></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
