import { WebSocketServer } from "ws";
import { Server } from "node:http";
import { AddUserToRoom, ICommandGamePlayer, ICommandPlayerClient, ICommandShipsPlayer} from "../types/interfaces.ts";
import { 
  typesOfCommandsGame,
  typesOfCommandsRoom, 
  typesOfCommandsShips, 
  typesOfCommandsUsers 
} from "../types/enums.ts";
import { loginHandler } from "../handlers/loginHandler.ts";
// import { updateWinnersHandler } from "../handlers/updateWinnersHandler.ts";
// import { createGameHandler } from "../handlers/createGameHandler.ts";
import { createRoomHandler } from "../handlers/createRoomHandler.ts";
import { addShipsHandler } from "../handlers/addShipsHandler.ts";
import { addUserToRoomHandler } from "../handlers/addUserToRoomHandler.ts";
import { attackHandler } from "../handlers/attackHandler.ts";
// import { randomAttackHandler } from "../handlers/randomAttackHandler.ts";

export const createWebsocketServer = (httpServer: Server) => {

  const wss = new WebSocketServer({ server: httpServer });

  wss.on("connection", (ws) => {
  console.log("connection done");

  ws.on("message", (message) => {
    const messageData: ICommandPlayerClient | AddUserToRoom | ICommandShipsPlayer | ICommandGamePlayer = JSON.parse(message.toString());
    try {
      if (messageData.type === typesOfCommandsUsers.REG) {
        loginHandler(JSON.parse((messageData.data).toString()), ws);
      // } else if (messageData.type === typesOfCommandsRoom.CREATE_GAME) {
      //   createGameHandler(ws);
      } else if (messageData.type === typesOfCommandsRoom.CREATE_ROOM) {
        createRoomHandler(ws);
      } else if (messageData.type === typesOfCommandsRoom.ADD_USER_FOR_ROOM) {
        addUserToRoomHandler(JSON.parse((messageData.data).toString()), ws);
      } else if (messageData.type === typesOfCommandsShips.ADD_SHIP) {
        addShipsHandler(JSON.parse((messageData.data).toString()));
      } else if (messageData.type === typesOfCommandsGame.ATTACK) {
        attackHandler(JSON.parse((messageData.data).toString()), ws);
      // } else if (messageData.type === typesOfCommandsGame.RANDOM_ATTACK) {
      //   randomAttackHandler(JSON.parse((messageData.data).toString()), ws);
      } 
  } catch (e)  {
      console.log('error: ', e)
    }
  });
  ws.on("close", () => console.log("disconnected"));
  ws.on("error", console.error);

});
}
