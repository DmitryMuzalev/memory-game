import styles from "./InfoBlock.module.scss";

function InfoBlock({ label, value }) {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.infoBlockLabel}>{label}</span>
      <span className={styles.infoBlockValue}>{value}</span>
    </div>
  );
}
export { InfoBlock };
