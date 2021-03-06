import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";


const CardList = (props) => {

const {beers} = props

  const getBeerJsx = (beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
  );

  return (
    
    <section className={styles.cards}>
      {beers.map(getBeerJsx)}
    </section>
      
  );
};

export default CardList;
