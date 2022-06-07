import style from "./inputInfoClient.style.module.css";

export function InputInfoClient({placeholder, type, onChange, required, name, value}) {
  return (
    <>
      <input
        className={style.inputInfoClient}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
      />
    </>
  );
}