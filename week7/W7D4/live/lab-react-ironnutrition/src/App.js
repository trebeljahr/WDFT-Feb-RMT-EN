import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import { Search } from './components/Search';

import foodsFromJson from './foods.json';
import { Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsFromJson);
  const [filterState, setFilterState] = useState('');
  const [formIsShown, setFormIsShown] = useState(false);
  const addNewFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const deleteFoodFactory = (index) => () => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  const toggleForm = () => {
    setFormIsShown(!formIsShown);
  };

  return (
    <div className="App">
      <Button type="primary" onClick={toggleForm}>
        {formIsShown ? 'Hide form' : 'Add new food'}
      </Button>
      {formIsShown && <AddFoodForm addNewFood={addNewFood} />}
      <Search filterState={filterState} setFilterState={setFilterState} />
      {foods
        .filter((food) => {
          return food.name
            .toLowerCase()
            .trim()
            .includes(filterState.toLowerCase().trim());
        })
        .map((food, i) => {
          return (
            <FoodBox
              key={food.name + i}
              food={food}
              deleteFood={deleteFoodFactory(i)}
            />
          );
        })}
    </div>
  );
}

export default App;
