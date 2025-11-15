import type { WebSocket } from "ws";
import { createID } from "../functions/createIdFunction.ts";
import { games, players } from "../db/database.ts";
import {  nameConnections } from "./loginHandler.ts";
// import { createPlayerData } from "../types/interfaces.ts";

export const createGameHandler = ( player1: string, player2: string, ws: WebSocket) => {
  // console.log('create game win', data);
  console.log(player1, player2);
  const idGame = createID();
  const idPlayer1 = players.find(player => player.name === player1)?.id;
  const idPlayer2 = players.find(player => player.name === player2)?.id;
  const ws1 = nameConnections.get(player1);
  const ws2 = nameConnections.get(player2);

  if (ws1 && ws2 && idPlayer1 && idPlayer2) {
    ws1.send(JSON.stringify({
      type: "create_game",
      data: JSON.stringify(
        {
            idGame: idGame,  
            idPlayer: idPlayer1
        },
      ),
    id: 0
    }))
    ws2.send(JSON.stringify({
      type: "create_game",
      data: JSON.stringify(
        {
            idGame: idGame,  
            idPlayer: idPlayer2
        },
      ),
    id: 0
    }))
  games.push({idGame: idGame, idPlayer1: idPlayer1, idPlayer2: idPlayer2})

  }

  ws.send(JSON.stringify('create game'));
}