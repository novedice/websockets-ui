export enum typesOfCommandsUsers {
  REG = "reg",
  UPDATE_WINNERS = "update_winners",
};

export enum typesOfCommandsRoom {
  CREATE_ROOM = "create_room",
  ADD_USER_FOR_ROOM = "add_user_to_room",
  CREATE_GAME = "create_game",
  UPDATE_ROOM = "update_room"
};

export enum typesOfCommandsShips {
  ADD_SHIP = "add_ships",
  START_GAME = "start_game"
};

export enum typesOfCommandsGame {
  ATTACK = "attack",
  RANDOM_ATTACK = "randomAttack",
  TURN = "turn",
  FINISH = "finish"
}

export enum shipsSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  HUGE = "huge"
}

export enum status {
  MISS = "miss",
  KILLED = "killed",
  SHOT = "shot"
}