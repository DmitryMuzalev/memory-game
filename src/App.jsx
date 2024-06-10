/* import data from "./data"; */

import { StartMenu } from "./components/StartMenu/StartMenu";

//import { Card } from "./components/Card/Card";
/* import { shuffleCards } from "./utils/shuffle-algorithm";
import { useEffect, useState } from "react"; */
//import { GameHeader } from "./components/GameHeader/GameHeader";
//import { InfoBlock } from "./components/InfoBlock/InfoBlock";

function App() {
  /*   const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(() => shuffleCards(data.concat(data)));
  }, []); */

  /*   const formattedTime = `${Math.trunc(time / 60)}:${String(time % 60).padStart(
    2,
    "0"
  )}`; */

  return (
    <div className="app">
      <StartMenu />
      {/*   <div>
        <GameHeader />
        <div className="gameContainer">
          <div className="gameArea">
            {cards.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
          <div className="gameInfo">
            <InfoBlock label="timer" value="0:00" />
            <InfoBlock label="movies" value="0" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
