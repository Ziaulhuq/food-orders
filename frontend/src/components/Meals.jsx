import { useEffect, useState } from "react";
import MealsList from "./MealsList";

export default function Meals() {
  const [loadMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        return <p>data not found</p>;
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealsList meal={meal} />
      ))}
    </ul>
  );
}
