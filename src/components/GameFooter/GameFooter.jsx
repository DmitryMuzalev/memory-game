import { useEffect, useState } from "react";
import { InfoBlock } from "../InfoBlock/InfoBlock";

import styles from "./GameFooter.module.scss";

import { PlayerStats } from "../PlayerStats/PlayerStats";
import { timeFormatter } from "../../utils/time-formatter";

import { useMediaQuery } from "react-responsive";

function GameFooter() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  const [isOnePlayerMode, setOnePlayerMode] = useState(true);
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
          <PlayerStats name={isMobile ? "P1" : "Player 1"} score={2} />
          <PlayerStats name={isMobile ? "P2" : "Player 2"} score={0} isActive />
          <PlayerStats name={isMobile ? "P3" : "Player 3"} score={1} />
          <PlayerStats name={isMobile ? "P4" : "Player 4"} score={1} />
        </>
      )}
    </footer>
  );
}
export { GameFooter };
