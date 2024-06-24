import data from "../../data";

import { useEffect, useState } from "react";
import { shuffleCards } from "../../utils/shuffle-algorithm.js";
import { Card } from "../Card/Card";

import styles from "./GameField.module.scss";
import { clsx } from "clsx";

function GameField() {
  const [gridMode, setGridMode] = useState("4");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const items = gridMode === "4" ? data.slice(0, 8) : data;
    setCards(() => shuffleCards(items.concat(items)));
  }, []);

  const stylesForGameField = clsx(
    styles.gameField,
    gridMode === "4" ? styles.gameFieldGrid_4 : styles.gameFieldGrid_6
  );

  return (
    <div className={stylesForGameField}>
      {cards.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}
export { GameField };
