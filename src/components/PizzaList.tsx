import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPizzas,
  selectNumberOfPizzas,
} from "../store/pizzas/selectors";
import { addFavoritePizza } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";

type Pizza = {
  id: number;
  name: string;
  description: string;
  bought: number;
  image: string;
};

// src/components/PizzaList.tsx
export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const numberOfPizzas = useSelector(selectNumberOfPizzas);
  const allPizzas = useSelector(selectAllPizzas);

  // console.log(user);
  return (
    <div>
      <h1>Welcome {user.name} to Pizza Explorer</h1>
      <p>Number of Pizzas: {numberOfPizzas}</p>
      <ul>
        {allPizzas?.map((pizza: Pizza) => {
          return (
            <li key={pizza.id}>
              <button onClick={() => dispatch(addFavoritePizza(pizza.id))}>
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
              {pizza.name}: {pizza.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
