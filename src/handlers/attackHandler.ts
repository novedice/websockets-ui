import type { WebSocket } from "ws";
import { IAttack } from "../types/interfaces.ts";
import { games } from "../db/database.ts";
// import { connections } from "./loginHandler.ts";

export const attackHandler = (data: IAttack, ws: WebSocket) => {
  console.log('attack', data);
  const thisGameIndex = games.findIndex(game => game.idGame === data.gameId);
  const thisGame = games[thisGameIndex];
  if (thisGame && thisGameIndex !== -1) {
  const activePlayer = thisGame.idPlayer1.id === data.indexPlayer ? thisGame.idPlayer1 : thisGame.idPlayer2;
  const attackedPlayer = thisGame.idPlayer1.id === activePlayer.id ? thisGame.idPlayer2 : thisGame.idPlayer1;
  const x = data.x;
  const y= data.y;


  //0 - empty; 1 - small; 2 - medium; 3 - large; 4 - huge; 5 - missed; 11 - small killed; 21 - medium killed; 22 - medium shooted; 31 - large
  if (attackedPlayer.board[x] && attackedPlayer.board[x][y]) {
    if (attackedPlayer.board[x][y] === 0) {
      attackedPlayer.board[x][y] = 5; 
    } else if (attackedPlayer.board[x][y] === 1) {
      attackedPlayer.board[x][y] = 5; 
    }
  }
  }

    ws.send(JSON.stringify({
    type: "attack",
    data: JSON.stringify({
      position: {
        x: data.x,
        y: data.y
      },
      status: '',
      currentPlayer: data.indexPlayer
    })
  }))
  }
// }