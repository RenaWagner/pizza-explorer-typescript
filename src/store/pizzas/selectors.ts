import { ReduxState } from "../index";

export const selectAllPizzas = (reduxState: ReduxState) => {
  return reduxState.pizzas.allPizzas;
};

export const selectNumberOfPizzas = (reduxState: ReduxState) => {
  return reduxState.pizzas.allPizzas.length;
};
