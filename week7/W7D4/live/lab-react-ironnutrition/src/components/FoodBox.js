import { Col, Card, Button } from 'antd';

export function FoodBox({ food, deleteFood }) {
  const handleDelete = () => {
    console.log('Deleting!');
    deleteFood();
  };
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}
