import React, {useState} from 'react';
import style from "./Navbar.module.css";
import { getImageUrl } from '../../utils/utils.js';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={style.navBar}>
      <div className={style.logo}>
        <a href="/">Portfolio</a>
      </div>
      <div className={style.menu}>
        <img onClick={ () => setMenuOpen(!menuOpen)} className={style.menuBar} src={ menuOpen ? getImageUrl('nav/close-menu.png') : getImageUrl('nav/nav.png')} />
        <ul onClick={ () => setMenuOpen(false)} className={`${style.menuItems} ${menuOpen && style.menuOpen}`}>
          <li><a href="#About">About Us</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
