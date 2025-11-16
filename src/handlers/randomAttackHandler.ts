import type { WebSocket } from "ws";
import { createPlayerData } from "../types/interfaces.ts";

export const randomAttackHandler = (data: createPlayerData, ws: WebSocket) => {
  console.log('random attack', data);
  ws.send(JSON.stringify('random attack'));
}