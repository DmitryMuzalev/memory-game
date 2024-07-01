import styles from "./GameField.module.scss";
import { clsx } from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getSettings } from "../../features/Settings/settings-slice.js";
import { Card } from "../../components/Card/Card.jsx";
import { getCards, openCard } from "../Game/game-slice.js";

function GameField() {
  const dispatch = useDispatch();
  const { grid } = useSelector(getSettings);
  const cards = useSelector(getCards);

  const stylesForGameField = clsx(
    styles.gameField,
    grid === "4x4" ? styles.gameFieldGrid_4 : styles.gameFieldGrid_6
  );

  return (
    <div className={stylesForGameField}>
      {cards.map((item, index) => (
        <Card key={index} {...item} cb={() => dispatch(openCard(index))} />
      ))}
    </div>
  );
}
export { GameField };
