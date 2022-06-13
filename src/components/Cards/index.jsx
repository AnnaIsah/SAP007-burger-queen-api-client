import styles from "./cards.style.module.css";

export function Cards({product, children}) {
  return (         
        <li className={styles.listCards}>
          <img className={styles.imgMenu} src={product.image}/>
          <h1 className={styles.nameProduct}>{product.name}</h1>
          {product.flavor ? <li><h3>{product.flavor}</h3></li>:null} 
          {product.complement ? <li><h3>Complemento: {product.complement}</h3></li>:null }
          <h3>R${(product.price).toFixed(2)}</h3>
          {children}
        </li>       
  );
}