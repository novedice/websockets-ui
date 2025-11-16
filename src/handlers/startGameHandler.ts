import { IGameInfo } from "../types/interfaces.ts";
import { nameConnections } from "./loginHandler.ts";

export const startGameHandler = (game: IGameInfo) => {
  console.log('start game');

  const player1id = game.idPlayer1.id;
  const player2id = game.idPlayer2.id;
  const ws1 = nameConnections.get(player1id);
  const ws2 = nameConnections.get(player2id);

  if (ws1 && ws2) {
    ws1.send(JSON.stringify(
      {
        type: "start_game",
        data: JSON.stringify({
          ships: game.idPlayer1.ships,
          currentPlayerIndex: game.idPlayer1.id
        }),
        id: 0
      }
    ));
    ws2.send(JSON.stringify(
      {
        type: "start_game",
        data: JSON.stringify({
          ships: game.idPlayer2.ships,
          currentPlayerIndex: game.idPlayer2.id
        }),
        id: 0
      }
    ))
  }
}