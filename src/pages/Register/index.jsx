import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Message } from "../../components/Message";
import { createUser } from "./../../service/api";
import { setToken } from "../../service/token";
import { codeError } from "../../service/error";
import style from "./register.style.module.css"
import burguerQueen from "./../../imgs/burguerQueen.png";

export function Register() {

  const navigate = useNavigate();
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [role, setRole] = useState("");
  const [error, setError] = useState("");  
  const selectOpitions = [
    {
      value: "setor",
      text: "Setor",
      selected: true,
      disabled: true
    },
    {
      value: "kitchen",
      text: "Cozinha",
      selected: false,
      disabled: false
    },
    {
      value: "hall",
      text: "Salão",
      selected: false,
      disabled: false
    }
  ];

  const location = useLocation();
    let feedback = " ";
    if (location.state) {
    feedback = location.state.feedback;
    }

    function handleSubmit(e) {
      e.preventDefault();
      createUser(name, email, password, role)
 
        .then((response) => {
          console.log(name)
          console.log(response)
          if (response.status === 200) {
            return response.json();
          }
          setError(codeError(response));
        }).then((data) => {
          setToken(data.token);
          console.log(data);
          navigate(data.role === "hall" ? "/hall" : "/kitchen");
        })
        .catch((error) => console.log(error));
      }    

  return (
    <>
      <main className={style.containerRegister}>
      <figure className={style.containerTittle}>
          <img
            src={burguerQueen}
            className={style.imgTittle}
            alt="titulo burger queen"
          />
        </figure>
        <form className={style.form}>
          <Input 
          type="text"
          value={name}
          placeholder="Nome Completo"   
          onChange={(e) => setName(e.target.value)}  
          />
          <Input 
          type="email"
          value={email}
          placeholder="Email"   
          onChange={(e) => setEmail(e.target.value)} 
          />
          <InputPassword 
            type="password"
            value={password}
            placeholder="Senha"   
            onChange={(e) => setPassword(e.target.value)} 
            />
          <Select options={selectOpitions}  onChange={(e) => setRole(e.target.value)} />
          <Button onClick={handleSubmit} type="submit">CADASTRAR</Button>
          <Link to="/" className={style.hiperlink}>
            Já possui cadastro? Clique aqui para entrar!
          </Link>
          {feedback && <Message type="error" msg={feedback} />}
          {error && <Message type="error" msg={error} />}
        </form>
      </main>
    </>
  );
  }