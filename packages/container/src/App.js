import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingApp from "./components/marketingApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
