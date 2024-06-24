import styles from "./ModalWindow.module.scss";

function ModalWindow({ children }) {
  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWindowContent}>{children}</div>
    </div>
  );
}
export { ModalWindow };
