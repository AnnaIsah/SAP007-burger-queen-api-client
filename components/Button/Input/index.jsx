import { Error } from "./../Error";
import style from "./input.style.module.css";

export function Input({placeholder, type, onInput, required}) {
  return (
    <>
      <input
        className={style.input}
        placeholder={placeholder}
        type={type}
        onInput={onInput}
        required={required}
      />
      {props.error && <Error message={props.msgError} />}
    </>
  );
}