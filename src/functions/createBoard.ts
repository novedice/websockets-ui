import { IShipPosition } from "../types/interfaces.ts";

export const createBoard = (ships: IShipPosition[]) => {
  const board: number [][] = Array.from({ length: 10 }, () => Array(10).fill(0));
  for (const ship of ships) {
    const posx = ship.position.x;
    const posy = ship.position.y;
    const direction = ship.direction;
    for (let i = 0; i < ship.length; i++) {
      const x = direction ? posx : posx + i;
      const y = direction ? posy + i : posy;
      if (board[x]) {
      board[x][y] = ship.length;
    }
  }
}
  return board;
}
