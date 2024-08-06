import styles from "./StartMenu.module.scss";
import { FaChartLine } from "react-icons/fa6";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, loadCards } from "../../features/Game/game-slice";
import { getSettings } from "../../features/Settings/settings-slice";

import { Button } from "../UI/Button/Button";
import { Settings } from "../../features/Settings/Settings";
import { toggleHistory } from "../../features/History/history-slice";

function StartMenu() {
  const dispatch = useDispatch();
  const { grid } = useSelector(getSettings);

  useEffect(() => {
    dispatch(loadCards(grid));
  }, [dispatch, grid]);

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
      <Button type="primary" cb={() => dispatch(changeStatus("running"))}>
        start game
      </Button>
      <Button isCircle cb={() => dispatch(toggleHistory())}>
        <FaChartLine />
      </Button>
    </div>
  );
}
export { StartMenu };
