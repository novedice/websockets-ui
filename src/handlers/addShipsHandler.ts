import type { WebSocket } from "ws";
import { createPlayerData } from "../types/interfaces.ts";

export const addShipsHandler = (data: createPlayerData, ws: WebSocket) => {
  console.log('add ships', data);
  ws.send(JSON.stringify('add ship'));
}