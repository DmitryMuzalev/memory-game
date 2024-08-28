import styles from "./History.module.scss";
import { FaArrowLeftLong, FaPuzzlePiece, FaListOl } from "react-icons/fa6";

import { useDispatch } from "react-redux";

import { toggleHistory } from "./history-slice";
import { Button } from "../../components/UI/Button/Button";
import { useLocalStorage } from "../../utils/use-local-storage";

function History() {
  const [plrModeHG, setPlrModeHG] = useLocalStorage([], "playerMode");
  const [multiModeHG, setMultiModeHG] = useLocalStorage([], "multiplayerMode");

  const resetHistory = () => {
    setPlrModeHG([]);
    setMultiModeHG([]);
  };

  return (
    <div className={styles.history}>
      <HistoryCTA reset={resetHistory} />
      {plrModeHG.length || multiModeHG.length ? (
        <div className={styles.historyContent}>
          {!!plrModeHG.length && (
            <HistoryContentBlock
              title="Player mode"
              games={plrModeHG}
              createTableFunction={createTableForHistoryPlayerMode}
            />
          )}
          {!!multiModeHG.length && (
            <HistoryContentBlock
              title="Multiplayer mode"
              games={multiModeHG}
              createTableFunction={createTableForHistoryMultiplayerMode}
            />
          )}
        </div>
      ) : (
        <HistoryEmpty />
      )}
    </div>
  );
}

function HistoryCTA({ reset }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.historyCTA}>
      <Button isCircle type="primary" cb={() => dispatch(toggleHistory())}>
        <FaArrowLeftLong />
      </Button>
      <Button cb={reset}>Clear</Button>
    </div>
  );
}

function HistoryEmpty() {
  return (
    <div className={styles.historyEmpty}>
      <p>
        <FaPuzzlePiece />
        You don&apos;t have any previous games
      </p>
      <p>
        <FaListOl />
        Your game scores will be listed here
      </p>
    </div>
  );
}

function HistoryContentBlock({ title, games, createTableFunction }) {
  const games4 = games.filter((g) => g.grid === "4x4");
  const games6 = games.filter((g) => g.grid === "6x6");

  return (
    <div className={styles.historyContentBlock}>
      <h3 className={styles.historyContentTitle}>{title}</h3>
      {!!games4.length && createTableFunction(4, games4)}
      {!!games6.length && createTableFunction(6, games6)}
    </div>
  );
}

function createTableForHistoryPlayerMode(grid, games) {
  return (
    <>
      <h4 className={styles.historyContentSubtitle}>
        Grid {grid === 4 ? "4x4" : "6x6"}
      </h4>
      <table className={styles.historyContentTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Time</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{game.time}</td>
                <td>{game.moves}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
function createTableForHistoryMultiplayerMode(grid, games) {
  return (
    <>
      <h4 className={styles.historyContentSubtitle}>
        Grid {grid === 4 ? "4x4" : "6x6"}
      </h4>
      <table className={styles.historyContentTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th>P4</th>
          </tr>
        </thead>
        <tbody>
          {games.map((g, index) => {
            const points = [...Array(4)].map((_, i) => {
              return g.players[i] ? g.players[i].points : null;
            });

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                {points.map((p, index) => {
                  return <td key={index}>{p ? p : "-"}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export { History };
