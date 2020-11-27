import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {

const {
  name,
  image_url,
  tagline,
} = props.beer

  return (
    <>
      <article className={styles.card}>
        <img className={styles.img} src={image_url} alt=""/>
        <section className={styles.beerInfo}>
          <h2>{name}</h2>
          <p>{tagline}</p> 
        </section>
        
      </article>
    </>
  );
};

export default Card;
