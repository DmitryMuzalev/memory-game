import { FaChartLine } from "react-icons/fa6";

import { Logo } from "../UI/Logo/Logo";
import { Button } from "../UI/Button/Button";
import { Settings } from "../../features/Settings/Settings";

import styles from "./StartMenu.module.scss";
import { Statistics } from "../Statistics/Statistics";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsShowStatistic,
  toggleIsShowStatistic,
  changeStatus,
  loadCards,
} from "../../features/Game/game-slice";
import { useEffect } from "react";
import { getSettings } from "../../features/Settings/settings-slice";

function StartMenu() {
  const dispatch = useDispatch();
  const isShowStatistic = useSelector(getIsShowStatistic);
  const { grid } = useSelector(getSettings);

  useEffect(() => {
    dispatch(loadCards(grid));
  }, [dispatch, grid]);

  return (
    <div className={styles.startMenu}>
      <Logo style="light" />
      <div className={styles.startMenuWrapper}>
        {!isShowStatistic ? (
          <>
            <Settings />
            <div className={styles.startMenuCTA}>
              <Button
                type="primary"
                cb={() => dispatch(changeStatus("running"))}
              >
                start game
              </Button>
              <Button isCircle cb={() => dispatch(toggleIsShowStatistic())}>
                <FaChartLine />
              </Button>
            </div>
          </>
        ) : (
          <Statistics />
        )}
      </div>
    </div>
  );
}
export { StartMenu };
