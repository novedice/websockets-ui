import type { WebSocket } from "ws";
import { createPlayerData } from "../types/interfaces.ts";

export const attackHandler = (data: createPlayerData, ws: WebSocket) => {
  console.log('attack', data);
  ws.send(JSON.stringify('attack'));
}