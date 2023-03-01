import React, { useState } from 'react';
import css from './Header.module.scss';
import {motion} from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import { BiMenuAltRight} from 'react-icons/bi';
import useHeaderShadow from '../../hooks/useHeaderShadow';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    return(
        <motion.div
         initial="hidden"
         whileInView="show"
         variants={headerVariants}
         viewport={{once: false, amount: 0.25}}
         className={`paddings ${css.wrapper}`}
         style={{boxShadow: headerShadow}}>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>CaseyD</div>
            </div>
            <ul
            style={getMenuStyles(menuOpened)}
            className={`flexCenter ${css.menu}`}>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Experiments</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className={css.menuIcon}
            onClick={()=>setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size={30}/>
            </div>
        </motion.div>
    )
}
export default Header
