import {  players, rooms } from "../db/database.ts";
import { createID } from "../functions/createIdFunction.ts";
import { createPlayerData } from "../types/interfaces.ts";
import type { WebSocket } from "ws";
import { connections, nameConnections } from "./loginHandler.ts";
import { updateWinnersHandler } from "./updateWinnersHandler.ts";

export const createPlayer = (data: createPlayerData, ws: WebSocket) => {
  // console.log('data in. create:', data);
  const playerId = createID();
  // console.log('id:', playerId);
  players.push({...data, id: playerId});
  console.log('players:', players);
 
  connections.set(ws, playerId);
  nameConnections.set(playerId, ws);

  ws.send(JSON.stringify({
        type: 'reg', 
        data: JSON.stringify({
          name: data.name,
          index: playerId,
          error: false,
          errorText: ''
        }),
      id: 0
  }))
  ws.send(JSON.stringify({
        type: "update_room",
        data: JSON.stringify(rooms)
    }))
    updateWinnersHandler(ws);
}