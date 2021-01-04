import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {

const {
  name,
  img,
  tagline,
  abv
  
} = props.beer

const shortenName = (name) =>
    name.length < 20
      ? name
      : name.substring(0, 15) + "...";

const shortenTagline = (tagline) =>
    tagline.length < 30
      ? tagline
      : tagline.substring(0, 15) + "...";

  return (
    <>
      <article className={styles.card}>
        <h2>{shortenName(name)}</h2>
        <p>{shortenTagline(tagline)}</p>
        <section>
          <img className={styles.img} src={img} alt=""/>
        </section>
        <p>{abv}%</p>
      </article>
    </>
  );
};

export default Card;
