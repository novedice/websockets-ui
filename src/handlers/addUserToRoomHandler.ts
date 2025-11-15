import type { WebSocket } from "ws";
import { createPlayerData } from "../types/interfaces.ts";

export const addUserToRoomHandler = (data: createPlayerData, ws: WebSocket) => {
  console.log('user to room', data);
  ws.send(JSON.stringify('user to room'));
}