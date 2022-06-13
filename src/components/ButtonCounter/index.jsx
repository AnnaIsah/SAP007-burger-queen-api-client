import styles from "./counter.style.module.css";
import mais from "./../../imgs/mais.png";
import menos from "./../../imgs/menos.png";

export function ButtonCounter({decrease, increase, amount = 0,...props}){
  return (
    <div className={styles.countContainer}>
      <button className={styles.btnDecrease} onClick={decrease} {...props}>
      <img className={styles.imgDecrease} src={menos}/>
      </button>
      <p className="count-amount">{amount}</p>
      <button className={styles.btnIncrease} onClick={increase} {...props}>
        <img className={styles.imgIncrease} src={mais}/>
      </button>
    </div>
  );
};
