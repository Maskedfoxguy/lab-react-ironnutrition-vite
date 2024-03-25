import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  console.log("foods", foods);

  // Delete Food
  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });
    setFoods(filteredFoods);
  };

  // Add new food
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <hr />
      <h1>Food List</h1>
      {foods.map((food, id) => (
        <FoodBox key={id} food={food} clickToDelete={deleteFood} />
      ))}
    </div>
  );
}
export default App;