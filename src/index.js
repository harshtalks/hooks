import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./GlobalContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GlobalProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GlobalProvider>,
  rootElement
);
