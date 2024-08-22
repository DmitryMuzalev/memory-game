import { useMediaQuery } from "react-responsive";
import { InfoBlock } from "../../components/UI/InfoBlock/InfoBlock";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { generatePlayers } from "./multiplayer-mode-slice";

function MultiplayerMode() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generatePlayers());
  }, [dispatch]);

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
