import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

// Iteration 4
const defaultFoodFormState = {
  name: '',
  image: '',
  servings: null,
  calories: null,
};
export function AddFoodForm({ addNewFood }) {
  const [formState, setFormState] = useState(defaultFoodFormState);

  const handleFormInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log('Hello there! We try to create a new food here!');
    event.preventDefault();
    addNewFood(formState);
    setFormState(defaultFoodFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={formState.name}
        type="text"
        onChange={handleFormInput}
        placeholder="Please input name of the food!"
      />

      <label>Image</label>
      <Input
        name="image"
        value={formState.image}
        type="text"
        onChange={handleFormInput}
        placeholder="Please input image url of the food!"
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={formState.calories}
        type="number"
        onChange={handleFormInput}
        placeholder="Please input calories of the food!"
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={formState.servings}
        type="number"
        onChange={handleFormInput}
        placeholder="Please input servings of the food!"
      />

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}
