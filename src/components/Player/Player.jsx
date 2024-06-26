import { useEffect, useState } from "react";
import { timeFormatter } from "../../utils/time-formatter";
import { InfoBlock } from "../UI/InfoBlock/InfoBlock";
import { GameFooter } from "../GameFooter/GameFooter";

function Player() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timeId = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <>
      <GameFooter>
        <InfoBlock label="time" value={timeFormatter(time)} />
        <InfoBlock label="movies" value="0" />
      </GameFooter>
    </>
  );
}
export { Player };
