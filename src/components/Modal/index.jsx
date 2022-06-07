import styles from "./modal.style.module.css";
// import lixeira from "./../../imgs/lixeira.png";
// import { Button } from "./../Button";

export function Modal ({product, onClick}){
  return(    
    <div className={styles.modal}>       
      <p className={styles.id}>{product.id}</p>         
      <p>{product.name}</p>
      <p>R${(product.price).toFixed(2)}</p>        
      {product.flavor ? <li><p>{product.flavor}</p></li>:null}        
      <p>{product.qtd}</p>
    </div>
   
  )
}