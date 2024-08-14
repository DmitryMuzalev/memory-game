import { useMediaQuery } from "react-responsive";
import { InfoBlock } from "../../components/UI/InfoBlock/InfoBlock";
import { useSelector } from "react-redux";

function MultiplayerMode() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  const { players, currentPlayer } = useSelector(
    (state) => state.multiplayerMode
  );

  return (
    <>
      {players.map((player) => {
        return (
          <InfoBlock
            key={player.id}
            type="player"
            label={isMobile ? `P${player.id}` : `Player ${player.id}`}
            value={player.points}
            isActive={currentPlayer === player.id}
          />
        );
      })}
    </>
  );
}

export { MultiplayerMode };
