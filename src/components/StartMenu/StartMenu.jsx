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

/* 
  const defaultSettingsGame = {
    theme: "numbers",
    players: "1",
    size: "4x4",
  };

   <div className={styles.startMenuBody}>
        <div className={styles.startMenuBlock}>
          <label>Select Theme</label>
          <div className={styles.startMenuBtns}>
            {["numbers", "icons"].map((t, index) => (
              <Button key={index} isActive={t === defaultSettingsGame.theme}>
                {t}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.startMenuBlock}>
          <label>Number of Players</label>
          <div className={styles.startMenuBtns}>
            {[...Array(4)].map((_, index) => (
              <Button
                key={index}
                isActive={index + 1 === +defaultSettingsGame.players}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.startMenuBlock}>
          <label>Grid Size</label>
          <div className={styles.startMenuBtns}>
            {["4x4", "6x6"].map((s, index) => (
              <Button key={index} isActive={s === defaultSettingsGame.size}>
                {s}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.startMenuBtns}>
      
        </div>
      </div>
*/
