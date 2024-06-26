import styles from "./GameFooter.module.scss";

function GameFooter({ children }) {
  return <footer className={styles.gameFooter}>{children}</footer>;
}
export { GameFooter };
