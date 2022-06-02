// import { useState, useEffect } from "react";
// import { getProduct, createOrder } from "../services/api";
import { MenuHamburger } from "../../components/MenuHamburger";
// import { useNavigate } from "react-router-dom";
// import { Cards } from "../../components/Cards";
// import { Button } from "../../components/Button";
import style from "./hall.style.module.css";
// import { codeError } from "./../../service/error";


export function Hall(){
  // const navigate = useNavigate();
  // const [products, setProducts] = useState([]);
  // const [order, setOrder] = useState([]);
  // // const [error, setError] = useState("");

  // function allProducts
  
 
  





  return (
  <>
    <header className={style.header} >
      <MenuHamburger>           
        <li><p className={style.menuItem} >Menu Manhã</p></li>
        <li><p className={style.menuItem} >Menu All Day</p></li>
        <li><p className={style.menuItem} >Pedidos prontos</p></li>
        <li><p className={style.menuItem} >Sair</p></li>        
      </MenuHamburger>
        <h1 className={style.tittleMenu} >Menu Manhã</h1> 
    </header>
    <main className={style.containerMenu}>      
      <section className={style.optionsMenu}>
        <p id="all">TUDO</p>
        <p id="coffee">CAFÉS</p>
        <p id="sandwich">SANDUICHES</p>
      </section>
    </main>  
  </> 
  )
}
