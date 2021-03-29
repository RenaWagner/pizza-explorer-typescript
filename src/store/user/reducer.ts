// src/store/user/reducer.ts
import { UserState, UserAction } from "./types";

const initialState: UserState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case "user/toggleFavorite": {
      const pizzaId = action.payload;
      if (!state.favorites.includes(pizzaId)) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      } else {
        const newFavorites = state.favorites.filter((id) => id !== pizzaId);
        return {
          ...state,
          favorites: [...newFavorites],
        };
      }
    }
    default: {
      return state;
    }
  }
}
