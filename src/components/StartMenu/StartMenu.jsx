import { FaChartLine } from "react-icons/fa6";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import styles from "./StartMenu.module.scss";

function StartMenu() {
  const defaultSettingsGame = {
    theme: "numbers",
    players: "1",
    size: "4x4",
  };
  return (
    <div className={styles.startMenu}>
      <div className="container">
        <Logo style="light" />
        <div className={styles.startMenuBody}>
          <div className={styles.startMenuBlock}>
            <label>Select Theme</label>
            <div className={styles.startMenuBlockBtns}>
              {["numbers", "icons"].map((t, index) => (
                <Button key={index} isActive={t === defaultSettingsGame.theme}>
                  {t}
                </Button>
              ))}
            </div>
          </div>
          <div className={styles.startMenuBlock}>
            <label>Number of Players</label>
            <div className={styles.startMenuBlockBtns}>
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
            <div className={styles.startMenuBlockBtns}>
              {["4x4", "6x6"].map((s, index) => (
                <Button key={index} isActive={s === defaultSettingsGame.size}>
                  {s}
                </Button>
              ))}
            </div>
          </div>
          <div className={styles.startMenuBlockBtns}>
            <Button type="primary">start game</Button>
            <Button type="circle" style={{ flexShrink: "0" }}>
              <FaChartLine />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { StartMenu };
