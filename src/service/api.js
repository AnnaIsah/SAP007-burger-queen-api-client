import {getToken} from "./token";

const URL = "https://lab-api-bq.herokuapp.com";

export const createUser = (name, email, password, role) => {
  return fetch(`${URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "Burger Queen",
    })
  });
};

export const login = (email, password) => {
  return fetch(`${URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email,
      password: password,
    })
  });
};

export const getProduct = () => {
  const token = getToken()
  console.log(token)
  return fetch(`${URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken(),
    },
  });
};

export const createOrder = (info) => {
  return fetch(`${URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken(),
    },
    body: JSON.stringify(info),
  });
};