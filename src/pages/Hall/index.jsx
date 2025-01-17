import { useState, useEffect } from "react";
import { InputInfoClient } from "./../../components/InputInfoClient"
import { getProduct, createOrder } from "./../../service/api";
import { MenuHamburger } from "../../components/MenuHamburger";
import { useNavigate } from "react-router-dom";
import { Cards } from "../../components/Cards";
import style from "./hall.style.module.css";
import { codeError } from "./../../service/error";
import { Button } from "../../components/Button";
import { ButtonCounter } from "../../components/ButtonCounter"
import { TemplateOrder } from "../../components/TemplateOrder"

export function Hall(){
  const navigate = useNavigate(); 
  const [product, setProduct] = useState([]);
  const [requester, setRequester] = useState({client: "", table: ""});
  const [order, setOrder] = useState([]);
  const [error, setError] = useState("");

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  function Products(options){ 
    getProduct()
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setProduct(
        data.filter((item) => {
          return item.type === options;
        }
        )
      )
    })
  }  
  useEffect(() => {
    Products("breakfast");
  }, []);

  const handleRequester = (e) => {
    return setRequester(() => {
      const clientRequester = {...requester};
      clientRequester[e.target.name] = e.target.value;
      console.log(clientRequester)
      return clientRequester;
    }
    )
  }

  function addNewProduct(product){
    console.log(product)
    const newOrder = order;
    const addProductMenu = newOrder.find((item) => {
      return item.id === product.id;
    });
    if (addProductMenu) {
      addProductMenu.qtd += 1;
    }else{
      const newList = {
        id: product.id,
        name: product.name,
        price: product.price,
        flavor: product.flavor,
        complement: product.complement,
        qtd: 1,
      };
      newOrder.push(newList);
    }
    setOrder([...newOrder])
  }

  function removeProduct(product) {
    const productInList = order.find((element) => element.id === product.id);

    if (productInList) {
      if (productInList.qtd === 1) {
        order.splice(
          order.findIndex((element) => element.id === product.id),
          1
        );
        productInList.qtd = 0;
      }
      if (productInList.qtd > 1) {
        productInList.qtd -= 1;
      }
    }
    setOrder([...order]);
  }

  const getItemCount = (product) => {
    const findProduct = order.find((element) => element.id === product.id);
    return findProduct ? findProduct.qtd : 0;
  };

    function sendRequest(){
      function listOrder(){
        const placeOrder = {
          client: requester.client,
          table: requester.table,
          products: order.map((item) => {
          const infosOrder = {
            id: item.id,
            name: item.name,
            price: item.price,
            flavor: item.flavor,
            complement: item.complement,
            qtd: 1,
        };
        console.log(infosOrder)
        return infosOrder;
      }),
      }
      console.log(placeOrder)
      return placeOrder;
        
      }
        
      const resumeOrder = listOrder();
      console.log(resumeOrder);

      createOrder(resumeOrder)
      .then(() => {
        navigate("/kitchen");
      })
      .catch((error) => {
        setError(codeError(error));
      });
    }
  
    function totalValue() {
      const account = [];
      for (let i = 0; i < order.length; i++) {
        const totalSum = order[i].qtd * order[i].price;
        account.push(totalSum);
      }
      const valueInitial = 0;
      const wholeInitial = account.reduce(
        (value, currentValue) => value + currentValue,
        valueInitial
      );
      return wholeInitial;
    } 
    
   
  return (
  <section className={style.sectionHall}>
    <header className={style.header} >
      <MenuHamburger>           
        <li><button className={style.menuItem} onClick={() => Products("breakfast")} >Menu's</button></li>        
        <li><button className={style.menuItem} >Pedidos prontos</button></li>
        <li><button className={style.menuItem} onClick={logout}>Sair</button></li>        
      </MenuHamburger>
      <h1 className={style.tittleMenu}>Menu</h1> 
      <section className={style.sectionInfoClient}>
        <InputInfoClient 
          type="text"
          className={style.inputClient}
          placeholder="CLIENTE"   
          name= "client"   
          value={requester.client}  
          onChange={handleRequester}           
          required/>
        <InputInfoClient
          type="text"
          placeholder="MESA"
          name= "table"
          value={requester.table}
          onChange={handleRequester}
          required/>        
      </section>
    </header>
    <main>      
      <section className={style.optionsMenu}>
        <button className={style.textButton} id="all" onClick={() => Products("breakfast")}>MENU MANHÃ</button>
        <button className={style.textButton} id="all" onClick={() => Products("all-day")}>MENU TODO DIA</button>     
      </section>
      <section className={style.sectionCards}>
        <ul className={style.containerProducts}>
          {product.map((item) => {
            return (
              <section className={style.containerCards}>
              <Cards
                key={item.id}
                product={item}
                onClick={() => addNewProduct(item)}
              />
              <ButtonCounter
              amount={getItemCount(item)}
              increase={() => addNewProduct(item)}
              decrease={() => removeProduct(item)}
            />
            </section>
            );
          })}
        </ul>
      </section>        
      <section className={style.sectionOrderConfirm}>   
        <p className={style.tittleResume}>Resumo do pedido</p>
          <ul>     
          {order.map((item) => {
              return (
                <section className={style.containerTemplate}>
                  <TemplateOrder
                    key={item.id}
                    product={item}
                  /> 
                  <ButtonCounter
                  amount={getItemCount(item)}
                  increase={() => addNewProduct(item)}
                  decrease={() => removeProduct(item)}
                />                              
                </section>
              );          
            })} 
            <p className={style.totalValue}> Valor total: R${totalValue().toFixed(2)}</p>
          </ul>                   
      </section>     
      <Button onClick={sendRequest} type="submit">CONFIRMAR PEDIDO</Button>  
    </main>  
  </section> 
  )
}
