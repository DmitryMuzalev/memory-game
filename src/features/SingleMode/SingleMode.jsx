import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InfoBlock } from '../../components/UI/InfoBlock/InfoBlock';

import { timeFormatter } from '../../utils/time-formatter';

import { changeTime } from './single-mode-slice';

function SingleMode() {
  const { timer, moves } = useSelector((state) => state.singleMode);

  return (
    <>
      <Timer {...timer} />
      <InfoBlock label="moves" value={moves} />
    </>
  );
}

function Timer({ isRun, time }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRun) {
      const timeId = setInterval(() => dispatch(changeTime()), 1000);
      return () => clearInterval(timeId);
    }
  }, [dispatch, isRun]);

  return <InfoBlock label="time" value={timeFormatter(time)} />;
}

export { SingleMode };
