import { FaChartLine } from "react-icons/fa6";

import { Logo } from "../UI/Logo/Logo";
import { Button } from "../UI/Button/Button";
import { Settings } from "../../features/Settings/Settings";

import styles from "./StartMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  loadCards,
  getStatus,
} from "../../features/Game/game-slice";
import { useEffect } from "react";
import { getSettings } from "../../features/Settings/settings-slice";
import { History } from "../History/History";

function StartMenu() {
  const dispatch = useDispatch();
  const statusGame = useSelector(getStatus);
  const { grid } = useSelector(getSettings);

  useEffect(() => {
    dispatch(loadCards(grid));
  }, [dispatch, grid]);

  return (
    <div className={styles.startMenu}>
      <Logo style="light" />
      <div className={styles.startMenuWrapper}>
        {statusGame === "setting" && (
          <>
            <Settings />
            <div className={styles.startMenuCTA}>
              <Button
                type="primary"
                cb={() => dispatch(changeStatus("running"))}
              >
                start game
              </Button>
              <Button isCircle cb={() => dispatch(changeStatus("history"))}>
                <FaChartLine />
              </Button>
            </div>
          </>
        )}
        {statusGame === "history" && <History />}
      </div>
    </div>
  );
}
export { StartMenu };
