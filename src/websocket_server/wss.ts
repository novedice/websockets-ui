import { WebSocketServer } from "ws";
// import { httpServer } from "http_server/http_server.ts";
import { Server } from "node:http";
// import { PORT } from "../index.ts";

// const PORT = process.env.PORT ? Number(process.env.PORT) : 8181

export const createWebsocketServer = (httpServer: Server) => {

  const wss = new WebSocketServer({ server: httpServer });

  wss.on("connection", (ws) => {
  console.log("connection done");

  ws.on("message", (data) => {
    console.log("Message from client:", data.toString());
  });

  ws.on("close", () => console.log("disconnected"));
  ws.on("error", console.error);

});

console.log("WebSocket server is running");
}
