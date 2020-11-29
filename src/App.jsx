import React, { useEffect } from "react";
import logo from './logo.svg';
import  './App.scss';
import Main from "./components/Main";
import Navbar from "./components/Navbar";



function App() {

  const grabBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers`)
    .then((result) => result.json())
    .then((allBeers) => {
      return allBeers.beers}
      )
  
    .catch((error) => {
      console.log(error);
    })
  }
  
  useEffect(() => {
    grabBeers();
  }, [])
  
  return (
    <div className="app">
      <nav>
        <Navbar/>
      </nav>
      <section className="main">
        <Main />
      </section>
    </div>
  );
}

export default App;
