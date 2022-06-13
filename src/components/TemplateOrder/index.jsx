import styles from "./template.style.module.css";
import lixeira from "./../../imgs/lixeira.png";

export function TemplateOrder({product, onClickRemove}) {
  console.log(product)
  return (  
      <ul className={styles.ulTemplate}> 
        <li>          
          {product.id ? <p></p>:null}
          <h1 className={styles.nameProduct}>{product.name}</h1>
          {product.flavor ? <li><p className={styles.product}>{product.flavor}</p></li>:null}
          <p className={styles.product}>Complemento:{product.complement}</p>
          <p className={styles.product}>Quantidade:{product.qtd}</p>
          <p className={styles.product}>R${(product.price).toFixed(2)}</p> 
          <button className={styles.btnRemove}onClick={onClickRemove}>
            <img className={styles.imgRemove} src={lixeira}/>
          </button>
        </li>
      </ul>
    
  );
}