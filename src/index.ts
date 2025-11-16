import { createWebsocketServer } from "./websocket_server/wss.ts";
import { httpServer } from "./http_server/http_server.ts";
import dotenv from 'dotenv';

dotenv.config();
export const PORT = process.env.PORT ? Number(process.env.PORT) : 3000

createWebsocketServer(httpServer);
console.log(`Start http server + websocket server on the ${PORT} port!`);
httpServer.listen(PORT);
