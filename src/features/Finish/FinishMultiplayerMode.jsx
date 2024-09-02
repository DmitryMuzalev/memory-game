import { useSelector } from "react-redux";
import { InfoBlock } from "../../components/UI/InfoBlock/InfoBlock";
import styles from "./Finish.module.scss";

import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { updateLocalStorage } from "../../utils/use-local-storage";

function FinishMultiplayerMode() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });
  const { players } = useSelector((state) => state.multiplayerMode);
  const { grid } = useSelector((state) => state.settings);

  useEffect(() => {
    updateLocalStorage("multiplayerMode", { grid, players });
  }, [grid, players]);

  const results = [...players].sort((a, b) => b.points - a.points);
  const maxPoints = results[0].points;
  const isTie = results.filter((p) => p.points === maxPoints).length > 1;

  return (
    <>
      <h2 className={styles.finishTitle}>
        {isTie ? "It's a tie!" : `Player ${results[0].id} Wins!`}
      </h2>
      <p className={styles.finishSubtitle}>
        Game over! Here are the results...
      </p>
      <div className={styles.finishStatistic}>
        {results.map((p, index) => {
          return (
            <InfoBlock
              key={index}
              label={
                maxPoints === p.points
                  ? `Player ${p.id} (Winner!)`
                  : `Player ${p.id}`
              }
              value={isMobile ? p.points : `${p.points} Pairs`}
              isActive={maxPoints === p.points}
            />
          );
        })}
      </div>
    </>
  );
}

export { FinishMultiplayerMode };
