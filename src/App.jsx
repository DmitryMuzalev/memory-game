import data from "./data";

import { Card } from "./components/Card/Card";
import { shuffleCards } from "./utils/shuffle-algorithm";
import { useEffect, useState } from "react";
import { GameHeader } from "./components/GameHeader/GameHeader";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(() => shuffleCards(data.concat(data)));
  }, []);

  return (
    <div className="app">
      <GameHeader />
      <div className="gameArea">
        {cards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
