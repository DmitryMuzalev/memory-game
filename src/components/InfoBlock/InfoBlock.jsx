import { clsx } from "clsx";
import styles from "./InfoBlock.module.scss";

function InfoBlock({ label, value, isActive = false }) {
  const stylesForInfoBlock = clsx(
    "block",
    isActive && "blockActive",
    styles.infoBlock
  );

  return (
    <div className={stylesForInfoBlock}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
export { InfoBlock };
