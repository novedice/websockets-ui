import { IPlayer, IShipPosition, updateRoom, winner } from "../types/interfaces.ts";

export const players: IPlayer[] = [];

export const rooms: updateRoom[] = [];

export const winners: winner[] = [];

export const games: {
  idGame: number | string, 
  idPlayer1: {
    id: number | string, 
    ships: IShipPosition[],
    board: number [][]
  },  
  idPlayer2: {
    id: number | string, 
    ships: IShipPosition[],
    board: number [][]
  }
} [] = [];

export const board = []



