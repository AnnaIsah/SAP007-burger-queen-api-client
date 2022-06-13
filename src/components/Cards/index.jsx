import styles from "./cards.style.module.css";
import mais from "./../../imgs/mais.png"

export function Cards({product, onClick}) {
  return (  
      <ul className={styles.ulCard}> 
        <li className={styles.liCard}>
          <img className={styles.imgMenu} src={product.image}/>
          <p className={styles.id}>{product.id}</p>         
          <h1>{product.name}</h1>
          {product.flavor ? <li><p>{product.flavor}</p></li>:null} 
          <p>Complemento:{product.complement}</p>
          <p>R${(product.price).toFixed(2)}</p>                
          <p>{product.qtd}</p>
          <button onClick={onClick}><img className={styles.imgAdd} src={mais}/></button>

        </li>
      </ul>
    
  );
}