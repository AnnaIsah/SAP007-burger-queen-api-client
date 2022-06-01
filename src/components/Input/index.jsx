import style from "./input.style.module.css";

export function Input({placeholder, type, onChange, required}) {
  return (
    <>
      <input
        className={style.input}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        required={required}
      />
    </>
  );
}