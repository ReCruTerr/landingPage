import React from "react";
import Navigation from "./Nav/Navigation";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import "./App.css";
import Footer from "./Footer/Footer";
import Phone from "./Phone/Phone";
export default function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Cards />
      <Phone />
      <Footer />
    </div>
  );
}
