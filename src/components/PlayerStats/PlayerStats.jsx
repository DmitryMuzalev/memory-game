import { clsx } from "clsx";
import styles from "./PlayerStats.module.scss";

function PlayerStats({ name, score, isActive = false }) {
  const stylesForPlayerStats = clsx(
    "block",
    styles.playerStats,
    isActive && styles.playerStatsActive
  );

  return (
    <div className={stylesForPlayerStats}>
      <span>{name}</span>
      <span>{score}</span>
    </div>
  );
}
export { PlayerStats };
