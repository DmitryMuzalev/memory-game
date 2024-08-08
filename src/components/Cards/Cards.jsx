import clsx from "clsx";
import styles from "./Cards.module.scss";

import { Card } from "../Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { getSettings } from "../../features/Settings/settings-slice";
import {
  checkingOpenedCards,
  getCards,
  getOpenedCards,
  openCard,
} from "../../features/Game/game-slice";
import { useEffect } from "react";
import { showFinish } from "../../features/Finish/finish-slice";
import { stopTimer } from "../../features/Timer/timer-slice";

function Cards() {
  const dispatch = useDispatch();
  const { grid } = useSelector(getSettings);
  const cardsArray = useSelector(getCards);
  const openedCards = useSelector(getOpenedCards);

  const stylesForCards = clsx(
    styles.cards,
    grid === "4x4" ? styles.cardsGrid_4 : styles.cardsGrid_6
  );

  useEffect(() => {
    if (openedCards.length === 2) {
      const timeout = setTimeout(() => {
        dispatch(checkingOpenedCards(openedCards));
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [dispatch, openedCards]);

  useEffect(() => {
    const isGameOver = cardsArray.every((card) => card.status === "guessed");
    if (isGameOver) {
      dispatch(showFinish(true));
      dispatch(stopTimer());
    }
  }, [dispatch, cardsArray]);

  return (
    <div className={stylesForCards}>
      {cardsArray.map((item, index) => (
        <Card key={index} {...item} cb={() => dispatch(openCard(index))} />
      ))}
    </div>
  );
}
export { Cards };
