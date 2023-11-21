import React, { useState } from 'react'
import css from './Header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/motion';

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <motion.div
      initial="hidden"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Map analysis and display platform
          <br />
          based on React + Vite
        </div>

        <ul className={`flexCenter ${css.menu}`}>
          <li><a href='*'>module1</a></li>
          <li><a href='*'>module2</a></li>
          <li><a href='*'>module3</a></li>
          <li><a href='*'>module4</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+15961460326</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* 只适用于中小屏幕 */}
        <div
          className={`${css.menuIcon}`}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>

    </motion.div>
  )
}

export default Header