import styles from "./StartMenu.module.scss";
import { FaChartLine } from "react-icons/fa6";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCards, startGame } from "../../features/Game/game-slice";

import { Button } from "../UI/Button/Button";
import { Settings } from "../../features/Settings/Settings";
import { toggleHistory } from "../../features/History/history-slice";
import { generatePlayers } from "../../features/MultiplayerMode/multiplayer-mode-slice";

function StartMenu() {
  const dispatch = useDispatch();
  const { grid, playersQuantity } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch, grid]);

  useEffect(() => {
    dispatch(generatePlayers(playersQuantity));
  }, [dispatch, playersQuantity]);

  return (
    <div className={styles.startMenu}>
      <Settings />
      <StartMenuCTA />
    </div>
  );
}

function StartMenuCTA() {
  const dispatch = useDispatch();
  return (
    <div className={styles.startMenuCTA}>
      <Button type="primary" cb={() => dispatch(startGame())}>
        start game
      </Button>
      <Button isCircle cb={() => dispatch(toggleHistory())}>
        <FaChartLine />
      </Button>
    </div>
  );
}
export { StartMenu };
