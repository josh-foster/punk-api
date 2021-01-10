import React, { useState ,useEffect } from "react";
import styles from "./App.module.scss";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {

  const [beers, setBeers] = useState([]);



  const cleanBeerData = (beer) => {
    const cleanedBeer = {
      id: beer.id,
      name: beer.name,
      tagline: beer.tagline,
      img: beer.image_url,
      abv: beer.abv,
    };
    return cleanedBeer;
  }
  

  const activateSearch = (searchTerm) => {
    if(searchTerm) {
      return `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`
    } else {
      return `https://api.punkapi.com/v2/beers?page=2&per_page=80`
    }
  }


  const grabBeers = (searchTerm) => {
    fetch(activateSearch(searchTerm))
    .then((res) => res.json())
    .then((res) => {
      const cleanedBeers = res.map(cleanBeerData);
      const removedNoImgBeers = cleanedBeers.filter((beer) => {
        return beer.img !== null;
      }) 
      setBeers(removedNoImgBeers);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  
  const activateFilter = (filter) => {
    if(filter) {
      return `https://api.punkapi.com/v2/beers?${filter}`
    } else {
      return `https://api.punkapi.com/v2/beers?page=2&per_page=80`
    }
  }

  const filterBeers = (filter) => {
    fetch(activateFilter(filter))
    .then((res) => res.json())
    .then((res) => {
      const cleanedBeers = res.map(cleanBeerData);
      setBeers(cleanedBeers);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    grabBeers();
  }, [])

  useEffect(() => { 
    filterBeers();   
  }, []);
  
  return (
    <>
      <section className={styles.nav}>
        <Navbar 
        grabBeersBySearch={grabBeers}
        activateSearch={activateSearch}
        filterBeers={filterBeers}
        activateFilter={activateFilter}
        />
      </section> 
      <section className={styles.content}>
        <Main beers={beers} />
      </section>
    </>
  );
}

export default App;
