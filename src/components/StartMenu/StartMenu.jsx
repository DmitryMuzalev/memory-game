import { FaChartLine } from "react-icons/fa6";

import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import { Settings } from "../Settings/Settings";

import styles from "./StartMenu.module.scss";
import { Statistics } from "../Statistics/Statistics";
import { useState } from "react";

function StartMenu() {
  const [isShowStatistics, setIsShowStatistics] = useState(false);

  return (
    <div className={styles.startMenu}>
      <Logo style="light" />
      <div className={styles.startMenuWrapper}>
        {!isShowStatistics ? (
          <>
            <Settings />
            <div className={styles.startMenuCTA}>
              <Button type="primary">start game</Button>
              <Button isCircle cb={() => setIsShowStatistics(true)}>
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
