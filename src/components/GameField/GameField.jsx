import data from "../../data";

import { useEffect, useState } from "react";
import { shuffleCards } from "../../utils/shuffle-algorithm.js";
import { Card } from "../Card/Card";

import styles from "./GameField.module.scss";

function GameField() {
  const [grid, setGrid] = useState(4);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const items = grid === 4 ? data.slice(0, 8) : data;
    setCards(() => shuffleCards(items.concat(items)));
  }, []);

  return (
    <div className={styles.gameField}>
      {cards.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}
export { GameField };
