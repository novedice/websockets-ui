import { createPlayerData } from "../types/interfaces.ts";
import { players, rooms } from "../db/database.ts";
import { createPlayer } from "./createPlayerHandler.ts";
import type { WebSocket } from "ws";
import { updateWinnersHandler } from "./updateWinnersHandler.ts";

export const connections = new Map<WebSocket, string>();
export const nameConnections = new Map<string | number, WebSocket>()

export const loginHandler = (data: createPlayerData, ws: WebSocket) => {
  const index = players.findIndex((player) => player.name === data.name);
  // console.log('data in login:', data);
  // console.log('index:', index);
  if (index === -1) {
    createPlayer(data, ws);
  } else {
    console.log('data in else login:', data);
    if (data.password === players[index]?.password) {
      // console.log('data.password in if', data.password, ' data.name:', data.name);
      // console.log('player.password in if', players[index].password, ' data.name:', players[index].name);
      // console.log(players, players[index], index);
      // console.log(`player ${data.name} exists`)
      ws.send(JSON.stringify({
        type: 'reg', 
        data: JSON.stringify({
          name: data.name,
          index: players[index].id,
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
    } else {
      ws.send(JSON.stringify({
        type: 'reg', 
        data: JSON.stringify({
          name: data.name,
          index: players[index]?.id,
          error: true,
          errorText: 'invalid password'
        }),
      id: 0
  }))
    }
  }
}