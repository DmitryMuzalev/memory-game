import styles from "./InfoBlock.module.scss";

function InfoBlock({ label, value }) {
  return (
    <div className={"block" + " " + styles.infoBlock}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
export { InfoBlock };
