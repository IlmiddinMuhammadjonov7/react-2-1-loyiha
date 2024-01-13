import React from "react";
import styles from "./card.module.css";

const Card = ({ log, title, sort }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_four}>
        <img src={log} alt="" />
        <h2 className={styles.card_two}>{title}</h2>
      </div>
      <h2 className={styles.card_three}>
        {sort} / <span>100</span>
      </h2>
    </div>
  );
};

export default Card;
