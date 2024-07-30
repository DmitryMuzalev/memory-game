import { Logo } from '../Logo/Logo';
import styles from './Wrapper.module.scss';

function Wrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <Logo style="light" />
      <div className={styles.wrapperContent}>{children}</div>
    </div>
  );
}
export { Wrapper };
