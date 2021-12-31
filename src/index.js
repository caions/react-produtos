import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Cadastro from "./pages/Cadastro";
import Tabuleiro from "./pages/Tabuleiro";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/tabuleiro" element={<Tabuleiro />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
