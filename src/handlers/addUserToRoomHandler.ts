import type { WebSocket } from "ws";
import { addUserToRoom} from "../types/interfaces.ts";
import { connections } from "./loginHandler.ts";
import { rooms } from "../db/database.ts";
import { createGameHandler } from "./createGameHandler.ts";

export const addUserToRoomHandler = (data: addUserToRoom, ws: WebSocket) => {
  console.log('user to room', data);
  const player2Name: string = connections.get(ws) as string;
  let player1Name: string;
  const roomIndex = rooms.findIndex(room => room.roomId === data.indexRoom)

  if (rooms[roomIndex] && rooms[roomIndex].roomUsers[0]) {
    player1Name = rooms[roomIndex].roomUsers[0].name;
    rooms.splice(roomIndex,1);
    createGameHandler(player1Name, player2Name, ws);
    ws.send(JSON.stringify({
      type: "update_room",
      data: JSON.stringify(rooms)
  }))
  }

  ws.send(JSON.stringify('user to room'));
}