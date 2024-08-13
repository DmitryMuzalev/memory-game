import clsx from "clsx";
import styles from "./Cards.module.scss";

import { Card } from "../Card/Card";

import { useDispatch, useSelector } from "react-redux";

import { checkingOpenedCards, openCard } from "../../features/Game/game-slice";
import { useEffect } from "react";
import { showFinish } from "../../features/Finish/finish-slice";

function Cards() {
  const dispatch = useDispatch();
  const { grid } = useSelector((state) => state.settings);
  const { cards, openedCards } = useSelector((state) => state.game);

  const stylesForCards = clsx(
    styles.cards,
    grid === "4x4" ? styles.cardsGrid_4 : styles.cardsGrid_6
  );

  useEffect(() => {
    if (openedCards.length === 2) {
      const timeout = setTimeout(() => dispatch(checkingOpenedCards()), 1000);
      return () => clearTimeout(timeout);
    }
  }, [dispatch, openedCards]);

  useEffect(() => {
    const isGameOver = cards.every((card) => card.status === "guessed");
    isGameOver && dispatch(showFinish());
  }, [dispatch, cards]);

  return (
    <div className={stylesForCards}>
      {cards.map((item, index) => (
        <Card key={index} {...item} cb={() => dispatch(openCard(index))} />
      ))}
    </div>
  );
}
export { Cards };
