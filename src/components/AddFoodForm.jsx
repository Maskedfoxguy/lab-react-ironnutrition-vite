// Your code here
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function AddFoodForm(props) {
  // Declare variable states
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  // Handle input values
  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newFood = { id, name, image, calories, servings };
    // console.log("Submitted: ", newFood);

    // Add new food --> from App.jsx - FoodBox component
    props.addNewFood(newFood);

    // Reset the state
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);

    alert("Successfully submitted");
  };

  return (
    <div className="AddFoodForm">
      <h1>Add Food Entry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </div>
        <div>
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </div>
        <div>
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;