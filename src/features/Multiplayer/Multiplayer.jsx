import { GameFooter } from "../../components/GameFooter/GameFooter";
import { InfoBlock } from "../../components/UI/InfoBlock/InfoBlock";

import { useMediaQuery } from "react-responsive";

function Multiplayer() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });
  return (
    <>
      <GameFooter>
        <InfoBlock
          label={isMobile ? "P1" : "Player 1"}
          value={2}
          type="player"
        />
        <InfoBlock
          label={isMobile ? "P2" : "Player 2"}
          value={0}
          isActive
          type="player"
        />
        <InfoBlock
          label={isMobile ? "P3" : "Player 3"}
          value={1}
          type="player"
        />
        <InfoBlock
          label={isMobile ? "P4" : "Player 4"}
          value={1}
          type="player"
        />
      </GameFooter>
    </>
  );
}
export { Multiplayer };
