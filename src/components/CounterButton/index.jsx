import styles from "./counter.style.module.css";
import mais from "./../../imgs/mais.png";
import menos from "./../../imgs/menos.png"

export function CounterButton ({decrease,  increase, amount = 0, }){
  return (
    <div className="count-container">
      <button className={styles.counterAdd} onClick={decrease}>
        <img className={styles.imgBtn} src={menos}/>
      </button>
      <p className="count-amount">{amount}</p>
      <button className={styles.counterAdd} onClick={increase}>
        <img className={styles.imgBtn} src={mais}/>
      </button>
    </div>
  );
};