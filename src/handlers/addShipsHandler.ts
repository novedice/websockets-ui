// import type { WebSocket } from "ws";
import { IDataShipsPlayer } from "../types/interfaces.ts";
import {  games } from "../db/database.ts";
import { startGameHandler } from "./startGameHandler.ts";
import { createBoard } from "../functions/createBoard.ts";

export const addShipsHandler = (data: IDataShipsPlayer) => {
  const indPlayer = data.indexPlayer;
  const thisGameIndex = games.findIndex(game => game.idGame === data.gameId);
  let thisGame = games[thisGameIndex];

  if (thisGame) {
    if (thisGame.idPlayer1.id === indPlayer) {
      thisGame = {...thisGame, 
        idPlayer1: {
          id: indPlayer,
          ships: data.ships,
          board: createBoard(data.ships)
        }
      }
      games.splice(thisGameIndex,1);
      games.push(thisGame);
    } else {
      thisGame = {...thisGame, 
        idPlayer2: {
          id: indPlayer,
          ships: data.ships,
          board: createBoard(data.ships)
        }
      }
      games.splice(thisGameIndex,1);
      games.push(thisGame);
    }
    if (thisGame.idPlayer1.ships.length !== 0 && thisGame.idPlayer2.ships.length !== 0) {
    startGameHandler(thisGame);
    }
    
  }
}