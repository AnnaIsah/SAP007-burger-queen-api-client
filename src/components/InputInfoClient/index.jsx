import style from "./inputInfoClient.style.module.css";

export function InputInfoClient({placeholder, type, onChange, required}) {
  return (
    <>
      <input
        className={style.inputInfoClient}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        required={required}
      />
    </>
  );
}