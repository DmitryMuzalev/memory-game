import styles from "./Info.module.scss";

import { useSelector } from "react-redux";

import { PlayerMode } from "../../features/PlayerMode/PlayerMode";
import { MultiplayerMode } from "../../features/MultiplayerMode/MultiplayerMode";

function Info() {
  const { playersQuantity } = useSelector((state) => state.settings);
  return (
    <div className={styles.info}>
      {playersQuantity === 1 ? <PlayerMode /> : <MultiplayerMode />}
    </div>
  );
}

export { Info };
