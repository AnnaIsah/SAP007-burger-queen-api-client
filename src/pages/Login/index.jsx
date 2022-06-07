import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { Message } from "../../components/Message";
import style from "./login.style.module.css";
import LogoQueen30 from "./../../imgs/LogoQueen30.png";
import burguerQueen from "./../../imgs/burguerQueen.png";
import { login } from "../../service/api";
import { codeError } from "../../service/error";
import { setToken } from "../../service/token";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  
  const location = useLocation()
    let message = " "
    if (location.state) {
    message = location.state.message
  }

  function handleOnClickLogin(e) {
    // eslint-disable-next-line no-undef
    e.preventDefault();
    login(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setError(codeError(response));
      })
      .then((data) => {
        setToken(data.token);
          navigate(data.role === "hall" ? "/hall" : "/kitchen");       
      })
      .catch((error) => console.log(error));
    };

  return (
    <>
      <main className={style.containerLogin}>
        <figure className={style.containerTittle}>
          <img
            src={burguerQueen}
            className={style.imgTittle}
            alt="titulo burger queen"
          />
        </figure>
        <figure className={style.containerLogo}>
          <img
            src={LogoQueen30}
            className={style.imgLogo}
            alt="logo burger queen"
          />
        </figure>
        <form className={style.form} onSubmit={handleOnClickLogin}>
          <Input
            type="email"
            value={email}
            placeholder="E-mail"        
            onChange={(e) => setEmail(e.target.value)}           
            required
          />
          <InputPassword
            type="password"
            value={password}
            placeholder="Senha"       
            onChange={(e) => setPassword(e.target.value)}           
            required           
          />
          <Button type="submit">
            ENTRAR
          </Button>
          <Link to="/register" className={style.hiperlink}>
            É novo por aqui? Clique aqui para se cadastrar!
          </Link>
          {message && <Message type="error" msg={message} />}
          {error && <Message type="error" msg={error} />}
        </form>
      </main>
    </>
  );
}
