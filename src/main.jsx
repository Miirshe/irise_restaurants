import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RecipeContext } from "./components/Reducer/RecipeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <RecipeContext>
      <App />
    </RecipeContext>
    </BrowserRouter>
  </React.StrictMode>
);
