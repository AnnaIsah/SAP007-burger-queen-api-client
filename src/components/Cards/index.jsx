import styles from "./cards.style.module.css";
import { Button } from "./../Button"
import mais from "./../../imgs/mais.png"

export function Cards({product, onClick}) {
  //console.log(product)
  return (  
      <ul className={styles.ulCard} onClick={onClick}> 
        <li className={styles.liCard}>
          <img className={styles.imgMenu} src={product.image}/>
          <p className={styles.id}>{product.id}</p>         
          <p>{product.name}</p>
          <p>R${(product.price).toFixed(2)}</p>        
          {product.flavor ? <li><p>{product.flavor}</p></li>:null}        
          <p>{product.qtd}</p>
          <Button onClick={onClick}><img className={styles.imgAdd} src={mais}/></Button>
        </li>
      </ul>
    
  );
}