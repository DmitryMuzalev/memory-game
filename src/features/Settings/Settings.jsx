import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/UI/Button/Button';
import styles from './Settings.module.scss';
import {
  changeGrid,
  changePlayersQuantity,
  changeTheme,
} from './settings-slice';

function Settings() {
  const { theme, playersQuantity, grid } = useSelector(
    (state) => state.settings
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.settings}>
      <div className={styles.settingsBlock}>
        <label>Select Theme</label>
        <div className={styles.settingsBtns}>
          {['numbers', 'icons'].map((t, index) => (
            <Button
              key={index}
              isActive={t === theme}
              cb={() => dispatch(changeTheme(t))}
            >
              {t}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.settingsBlock}>
        <label>Number of Players</label>
        <div className={styles.settingsBtns}>
          {[...Array(4)].map((_, index) => (
            <Button
              key={index}
              isActive={index + 1 === playersQuantity}
              cb={() => dispatch(changePlayersQuantity(index + 1))}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.settingsBlock}>
        <label>Grid Size</label>
        <div className={styles.settingsBtns}>
          {['4x4', '6x6'].map((g, index) => (
            <Button
              key={index}
              isActive={g === grid}
              cb={() => dispatch(changeGrid(g))}
            >
              {g}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
export { Settings };
