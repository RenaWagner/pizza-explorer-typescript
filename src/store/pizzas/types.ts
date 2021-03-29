// src/store/pizzas/types.ts
export type Pizza = {
  id: number;
  name: string;
  description: string;
  bought: number;
  image: string;
};

export type PizzasState = {
  allPizzas: Pizza[];
};

export type AddPizzaPayload = {
  id: number;
  name: string;
  description: string;
};

export type PizzasAction = {
  type: "pizzas/add";
  payload: AddPizzaPayload;
};
