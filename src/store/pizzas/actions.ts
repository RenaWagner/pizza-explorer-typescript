import { PizzasAction } from "./types";

export const addPizza = (
  id: number,
  name: string,
  description: string
): PizzasAction => ({
  type: "pizzas/add",
  payload: { id, name, description },
});
