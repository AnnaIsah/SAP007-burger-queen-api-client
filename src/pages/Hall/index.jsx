// import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
// import { useNavigate } from "react-router-dom";
// import { List } from "../../components/List";
// import { Button } from "../../components/Button";
import style from "./hall.style.module.css";
// import { codeError } from "./../../service/error";


export function Hall(){
  // const navigate = useNavigate();
  // const [error, setError] = useState("");
  
  
  return (
  <>
    <header className={style.header} >
      <Menu styles={ styles } >
        <ul>   
          <li><a className={style.menuItem} >Menu Manhã</a></li>
          <li><a className={style.menuItem} >Menu All Day</a></li>
          <li><a className={style.menuItem} >Pedidos prontos</a></li>
          <li><a className={style.menuItem} >Sair</a></li>
        </ul>
        </Menu>
        <h1 className={style.tittleMenu} >Menu Manhã</h1> 
    </header>
    <main className={style.containerMenu}>      
      
    </main>  
  </> 
  )
}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: 'var(--black)'
  },
  bmBurgerBarsHover: {
    background: 'var(--black)'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: 'var(--off-white)'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'var(--navy)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.5em',
  },
  bmMorphShape: {
    fill: 'var(--off-white)'
  },
  bmItemList: {
    color: 'var(--off-white)',
    padding: '1em',
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'var(--off-white)'
  }
}
