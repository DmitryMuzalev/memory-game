import { useState } from "react";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import styles from "./GameFooter.module.scss";

function GameFooter() {
  const [isOnePlayerMode, setOnePlayerMode] = useState(true);
  return (
    <footer className={styles.gameFooter}>
      {isOnePlayerMode ? (
        <>
          <InfoBlock label="time" value="0:00" />
          <InfoBlock label="movies" value="0" />
        </>
      ) : (
        <></>
      )}
    </footer>
  );
}
export { GameFooter };
