// import { createFormSignUp } from './App';
// import { confirmUser } from './pages/sign-up';

// addEventListener("DOMContentLoaded", () => {
//     createFormSignUp()
//     confirmUser()
// })

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./reset.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
