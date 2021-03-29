import { UserAction } from "./types";

export const addFavoritePizza = (pizzaId: number): UserAction => ({
  type: "user/toggleFavorite",
  payload: pizzaId,
});
