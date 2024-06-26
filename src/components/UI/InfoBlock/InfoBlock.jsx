import { clsx } from "clsx";
import styles from "./InfoBlock.module.scss";

function InfoBlock({ label, value, type = "default", isActive = false }) {
  const stylesForInfoBlock = clsx(
    styles.infoBlock,
    isActive && type === "default" && styles.infoBlockActive,
    type === "player" && styles.infoBlockPlayer,
    isActive && type === "player" && styles.infoBlockPlayerActive
  );

  return (
    <div className={stylesForInfoBlock}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
export { InfoBlock };
