import data from "../../data";

import { useEffect, useState } from "react";
import { shuffleCards } from "../../utils/shuffle-algorithm.js";
import { Card } from "../Card/Card";

import styles from "./GameField.module.scss";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { getSettings } from "../../features/Settings/settings-slice.js";

function GameField() {
  const { theme, grid } = useSelector(getSettings);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const items = grid === "4x4" ? data.slice(0, 8) : data;
    setCards(() => shuffleCards(items.concat(items)));
  }, []);

  const stylesForGameField = clsx(
    styles.gameField,
    grid === "4x4" ? styles.gameFieldGrid_4 : styles.gameFieldGrid_6
  );

  return (
    <div className={stylesForGameField}>
      {cards.map((item, index) => (
        <Card
          key={index}
          value={theme === "numbers" ? item.number : item.icon}
        />
      ))}
    </div>
  );
}
export { GameField };
