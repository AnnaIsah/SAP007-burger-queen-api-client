import styles from "./counter.style.module.css";
import adicao from "./../../imgs/adicao.png";
import subtracao from "./../../imgs/subtracao.png";

export function ButtonCounter({decrease, increase, amount = 0,...props}){
  return (
    <div className={styles.countContainer}>
      <button className={styles.btnDecrease} onClick={decrease} {...props}>
      <img className={styles.imgDecrease} src={subtracao}/>
      </button>
      <p className="count-amount">{amount}</p>
      <button className={styles.btnIncrease} onClick={increase} {...props}>
        <img className={styles.imgIncrease} src={adicao}/>
      </button>
    </div>
  );
};
