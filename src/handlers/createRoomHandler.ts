import type { WebSocket } from "ws";
import { connections } from "./loginHandler.ts";
import { players } from "../db/database.ts";
import { rooms } from "../db/database.ts";
import { createID } from "../functions/createIdFunction.ts";

export const createRoomHandler = (ws: WebSocket) => {
 
  const playerID = connections.get(ws);
  const index = players.findIndex(player => player.id === playerID);
  if (players[index]) {
    const newRoom = {
      roomId: createID(),
      roomUsers: [
        {
          name: players[index].name,
          index: players[index].id
        }
      ]
    }
    rooms.push(newRoom);
    ws.send(JSON.stringify({
      type: "update_room",
      data: JSON.stringify(rooms)
  }));
  }
  }