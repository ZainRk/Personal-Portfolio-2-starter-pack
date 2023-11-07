import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  const location = useLocation();
  const isContentPage = location.pathname === "/";

  if (isContentPage) {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: true, amount: 0.25 }}
        className={`bg-primary paddings ${css.wrapper}`}
        style={{ boxShadow: headerShadow }}
      >
        <div className={`flexCenter innerWidth ${css.container}`}>
          <Link to="/">
            <div className={css.name}>Yuan TANG</div>
          </Link>

          <ul
            style={getMenuStyles(menuOpened)}
            className={` flexCenter ${css.menu}`}
          >
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
          <div
            className={css.menuIcon}
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: true, amount: 0.25 }}
        className={`bg-primary paddings ${css.wrapper}`}
        style={{ boxShadow: headerShadow }}
      >
        <div className={`flexCenter innerWidth ${css.container}`}>
          <Link to="/">
            <div className={css.name}>Yuan TANG</div>
          </Link>
        </div>
      </motion.div>
    );
  }
}
