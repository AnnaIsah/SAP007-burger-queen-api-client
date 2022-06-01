import style from "./button.style.module.css";

export function Button({type, id, onClick, children}) {
  return (
    <>
      <button
        className={style.button}
        id={id} 
        type={type}
        onClick={onClick}>  
        {children}
      </button>
    </>
  );
}