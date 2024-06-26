import { useEffect, useState } from "react";
import { InfoBlock } from "../UI/InfoBlock/InfoBlock";

import styles from "./GameFooter.module.scss";

import { timeFormatter } from "../../utils/time-formatter";

import { useMediaQuery } from "react-responsive";

function GameFooter() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  const [isOnePlayerMode, setOnePlayerMode] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timeId = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <footer className={styles.gameFooter}>
      {isOnePlayerMode ? (
        <>
          <InfoBlock label="time" value={timeFormatter(time)} />
          <InfoBlock label="movies" value="0" />
        </>
      ) : (
        <>
          <InfoBlock
            label={isMobile ? "P1" : "Player 1"}
            value={2}
            type="player"
          />
          <InfoBlock
            label={isMobile ? "P2" : "Player 2"}
            value={0}
            isActive
            type="player"
          />
          <InfoBlock
            label={isMobile ? "P3" : "Player 3"}
            value={1}
            type="player"
          />
          <InfoBlock
            label={isMobile ? "P4" : "Player 4"}
            value={1}
            type="player"
          />
        </>
      )}
    </footer>
  );
}
export { GameFooter };
