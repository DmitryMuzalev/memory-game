import { InfoBlock } from "../../components/UI/InfoBlock/InfoBlock";

import { timeFormatter } from "../../utils/time-formatter";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeTimerValue, getTimer } from "./timer-slice";

function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector(getTimer);

  useEffect(() => {
    const timeId = setInterval(() => dispatch(changeTimerValue()), 1000);
    return () => clearInterval(timeId);
  }, [dispatch, timer]);

  return <InfoBlock label="time" value={timeFormatter(timer.value)} />;
}

export { Timer };
