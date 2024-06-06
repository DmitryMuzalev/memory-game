import data from "./data";

import { Card } from "./components/Card/Card";
import { shuffleCards } from "./utils/shuffle-algorithm";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(() => shuffleCards(data.concat(data)));
  }, []);

  return (
    <div>
      <div className="gameArea">
        {cards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
