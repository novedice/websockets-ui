import type { WebSocket } from "ws";
import { winners } from "../db/database.ts";

export const updateWinnersHandler = ( ws: WebSocket, winnerName?: string) => {
  if (winnerName) {
    const index = winners.findIndex(winner => winner.name === winnerName);
    if (winners[index]) {
      const wins = winners[index].wins
      winners.splice(index,0);
      winners.push({name: winnerName, wins: wins+1});
    } else {
      winners.push({name: winnerName, wins: 1});
    }
  }
  ws.send(JSON.stringify({
    type: 'update_winners',
    data: JSON.stringify(winners)
}));
}