// import type { WebSocket } from "ws";
import { createID } from "../functions/createIdFunction.ts";
import { games } from "../db/database.ts";
import {  nameConnections } from "./loginHandler.ts";
// import { createPlayerData } from "../types/interfaces.ts";

export const createGameHandler = ( idPlayer1: string | number, idPlayer2: string | number) => {
  const idGame = createID();
  // const idPlayer1 = players.find(player => player.name === player1)?.id as string
  // const idPlayer2 = players.find(player => player.name === player2)?.id as string
  const ws1 = nameConnections.get(idPlayer1);
  const ws2 = nameConnections.get(idPlayer2);

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
  games.push({
    idGame: idGame, 
    idPlayer1: {
      id: idPlayer1, 
      ships: [],
      board: []
    }, 
    idPlayer2: {
      id: idPlayer2, ships: [], board: []
    }
  })
  }
}