import { shipsSizes, status, typesOfCommandsGame, typesOfCommandsRoom, typesOfCommandsShips, typesOfCommandsUsers } from "./enums.ts"

export type roomUser = {
  name: string;
  index: number | string;
};

export type addUserToRoom = {
  indexRoom: number | string;
};

export type loginData = {
  name: string;
  index: number | string;
  error: boolean;
  errorText: string;
};

export type winner = {
  name: string;
  wins: number;
};

export type createGameData  = {
  idGame: number | string;
  idPlayer:  number | string;
};

export type createPlayerData = {
  name: string;
  password: string;
};

export type position = {
  x: number;
  y: number;
};

export interface IShipPosition {
  position: position;
  direction: boolean;
  length: number;
  type: shipsSizes;
}

export interface updateRoom {
  roomId: number | string;
  roomUsers: roomUser[];
};

export interface ICommandPlayerClient {
    type: "reg";
    data: createPlayerData;
    id: 0,
};

export interface ICommandPlayerServer {
    type: typesOfCommandsUsers;
    data: loginData | winner [];
    id: 0,
};

export interface ICommandRoomPlayer {
    type: typesOfCommandsRoom;
    data: string | addUserToRoom
    id: 0;
};

export interface ICommandRoomServer {
    type: typesOfCommandsRoom;
    data: createGameData | updateRoom;
    id: 0;
};

export interface ICommandShipsPlayer {
    type: typesOfCommandsShips;
    data: {
      gameID: number | string;
      ships: IShipPosition [];
      indexPlayer: number | string;
    };
    id: 0;
};

export interface ICommandShipsServer {
    type: typesOfCommandsShips;
    data: {
      ships: IShipPosition [];
      currentPlayerIndex: number | string;
    };
    id: 0;
};

export interface ICommandGamePlayer {
    type: typesOfCommandsGame;
    data: {
      gameID: number | string;
      x: number;
      y: number;
      indexPlayer: number | string;
    }
    id: 0;
};

export interface ICommandGameServer {
    type: typesOfCommandsGame;
    data: {
      position: position;
      currentPlayer: number | string;
      status: status
    }
    id: 0;
};





