import type { WebSocket } from "ws";
import { createPlayerData } from "../types/interfaces.ts";
import { winners } from "../db/database.ts";

export const updateWinnersHandler = ( ws: WebSocket, data?: createPlayerData,) => {
  console.log('upd win', data);
  if (data) {
    const index = winners.findIndex(winner => winner.name === data.name);
    if (winners[index]) {
      const wins = winners[index].wins
      winners.splice(index,0);
      winners.push({name: data.name, wins: wins+1});
    } else {
      winners.push({name: data.name, wins: 1});
    }
  }
  ws.send(JSON.stringify({
    type: 'update_winners',
    data: JSON.stringify(winners)
}));
}