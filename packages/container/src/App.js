import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MarketingApp from "./components/marketingApp";
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}
