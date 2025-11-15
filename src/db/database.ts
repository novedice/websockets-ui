import { IPlayer, updateRoom, winner } from "../types/interfaces.ts";

export const players: IPlayer[] = [];

export const rooms: updateRoom[] = [];

export const winners: winner[] = [];

export const games: {idGame: number | string, idPlayer1: number | string,  idPlayer2: number|string} [] = [];



