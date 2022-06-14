import styles from "./template.style.module.css";

export function TemplateOrder({product, children}) {
  console.log(product)
  return (   
        <li className={styles.liTemplate}> 
        <div className={styles.div}>         
          {product.id ? <p></p>:null}
          <p className={styles.productName}>{product.name}</p>
          <p>R${(product.price).toFixed(2)}</p> 
          <p>x{product.qtd}</p>
          {children}
          </div>
          <div className={styles.complement}>
            {product.flavor ? <li><p>{product.flavor}</p></li>:null}
          </div>
          <div className={styles.complement}>
            {product.complement ? <li><p>Complemento: {product.complement}</p></li>:null }
          </div>
        </li>       
  );
}