import { Button } from "../Button/Button";
import styles from "./Settings.module.scss";

const defaultSettingsGame = {
  theme: "numbers",
  players: "1",
  size: "4x4",
};

function Settings() {
  return (
    <div className={styles.settings}>
      <div className={styles.settingsBlock}>
        <label>Select Theme</label>
        <div className={styles.settingsBtns}>
          {["numbers", "icons"].map((t, index) => (
            <Button key={index} isActive={t === defaultSettingsGame.theme}>
              {t}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.settingsBlock}>
        <label>Number of Players</label>
        <div className={styles.settingsBtns}>
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
      <div className={styles.settingsBlock}>
        <label>Grid Size</label>
        <div className={styles.settingsBtns}>
          {["4x4", "6x6"].map((s, index) => (
            <Button key={index} isActive={s === defaultSettingsGame.size}>
              {s}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
export { Settings };
