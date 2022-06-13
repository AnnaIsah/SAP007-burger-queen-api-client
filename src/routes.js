import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./service/PrivateRoute";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Hall } from "./pages/Hall";
import { Kitchen } from "./pages/Kitchen"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="hall" element={<PrivateRoute redirectTo="/">
          <Hall /> </PrivateRoute >}/>
        <Route path="kitchen" element={<PrivateRoute redirectTo="/">
          <Kitchen/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}