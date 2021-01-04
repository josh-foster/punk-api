import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";

const Main = (props) => {

  const {beers} = props
  return (
    <section className={styles.allCards}> 
      <CardList beers={beers} />
    </section> 
  );
};

export default Main;
