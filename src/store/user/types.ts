// src/store/user/types.ts
export type UserState = {
  name: string;
  id: number;
  favorites: Array<number>;
};

// will add proper action types later
export type UserAction = {
  type: "user/toggleFavorite";
  payload: number;
};
