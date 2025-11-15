import type { WebSocket } from "ws";
// import { createPlayerData } from "../types/interfaces.ts";

export const createGameHandler = ( ws: WebSocket) => {
  // console.log('create game win', data);
  ws.send(JSON.stringify('create game'));
}