import { useState } from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";

function Card({ value }) {
  const [isOpen, setIsOpen] = useState(false);
  const stylesForCard = clsx(styles.card, isOpen && styles.cardOpen);

  return (
    <button className={stylesForCard} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}></div>
        <div className={styles.cardBack}>{value}</div>
      </div>
    </button>
  );
}

export { Card };
