export const setToken = ((token) => localStorage.setItem("token", token));

export const getToken = (() => localStorage.setItem("token"));

export const removeToken = ((token) => localStorage.removeItem("token", token));