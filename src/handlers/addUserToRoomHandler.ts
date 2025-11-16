import type { WebSocket } from "ws";
import { addUserToRoom} from "../types/interfaces.ts";
import { connections } from "./loginHandler.ts";
import { rooms } from "../db/database.ts";
import { createGameHandler } from "./createGameHandler.ts";

export const addUserToRoomHandler = (data: addUserToRoom, ws: WebSocket) => {
  const player2Index: string = connections.get(ws) as string;
  const roomIndex = rooms.findIndex(room => room.roomId === data.indexRoom)

  if (rooms[roomIndex] && rooms[roomIndex].roomUsers[0]) {
    const player1Index = rooms[roomIndex].roomUsers[0].index;
    rooms.splice(roomIndex,1);
    createGameHandler(player1Index, player2Index);
    ws.send(JSON.stringify({
      type: "update_room",
      data: JSON.stringify(rooms)
  }))
  }
}