import { useState } from "react";
import style from "./menuHamburger.style.module.css";

// const nav = timeline.querySelector('#nav-options');

// btnMobile.addEventListener('click', () => toggleMenu(nav));

export function MenuHamburger ({children}){
  const [ active, setActive] = useState(false);
  function toggleMenu() {
    const newActive = active;
    setActive(!newActive)
  }
  return(
    <nav className={active ? style.active : ""}>
        <button className={style.btnMobile} onClick={toggleMenu}>
          <span className={style.spamHamburguer}></span>
        </button>
        <ul className={style.ulMenu}>
          {children}
        </ul>
    </nav>
  )
}