import { clsx } from "clsx";
import styles from "./Button.module.scss";

function Button({
  children,
  type = "default",
  isCircle = false,
  isActive = false,
  cb = () => {},
}) {
  const stylesForButton = clsx(
    styles.button,
    type === "primary" && styles.buttonPrimary,
    type === "secondary" && styles.buttonSecondary,
    isCircle && styles.buttonCircle,
    isActive && styles.buttonActive
  );
  return (
    <button className={stylesForButton} onClick={cb}>
      {children}
    </button>
  );
}
export { Button };
