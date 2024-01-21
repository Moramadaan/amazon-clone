import React from "react";
import "./App.css";
import NavBar from "./components/head/NavBar";
import HeroBar from "./components/hero/HeroBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <div className="font-bodyFont">
    <NavBar/>
    <HeroBar />
    <Footer />
   </div>
  );
}

export default App;
