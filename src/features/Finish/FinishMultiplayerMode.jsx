import { useSelector } from "react-redux";
import { InfoBlock } from "../../components/UI/InfoBlock/InfoBlock";
import styles from "./Finish.module.scss";

import { useMediaQuery } from "react-responsive";

function FinishMultiplayerMode() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  const { players } = useSelector((state) => state.multiplayerMode);

  return (
    <>
      <h2 className={styles.finishTitle}>{`Player ${1} Wins!`}</h2>
      <p className={styles.finishSubtitle}>
        Game over! Here are the results...
      </p>
      <div className={styles.finishStatistic}>
        {players.map((p, index) => {
          return (
            <InfoBlock
              key={index}
              label={`Player ${p.id}`}
              value={isMobile ? p.points : `${p.points} Pairs`}
              //isActive
            />
          );
        })}
      </div>
    </>
  );
}

export { FinishMultiplayerMode };
