# Exercises:

## Forms:
1. Create a create-react-app using npx.
2. Make a simple component and use it in your app.
3. Add a state variable to your component using the useState hook.
4. Create a form with a text input field for a username.
5. Control the value of the input field with the state variable.
6. Write an onChange handler to change the state variable whenever the user types something into the input field. 
7. Bonus: Add more fields (maybe with different types - say number or date?) to your form!

## Lifting State Up:
1. Create a create-react-app using npx.
2. Make a Todos component.
3. Create a state variable for all the todos. You can either store them on an object by keys or as an array. 
4. Add a few todos to your state manually. A todo should look something like this: 
```js
{ 
    message: "Make laundry", 
    isDone: false 
}
```
5. Create a component to display a single todo - it should show the message. 
6. Adapt the component - to use conditional rendering to set `"text-decoration": "line-through"` if the todo is done. 
6. Add a button to each todo that can change the state of that single todo to `true`. 
7. Finally: Add a button that when clicked alerts to the user how many todos are still remaining to be done. Hint: You can filter over the todos from your state and get the length of only the ones where `isDone === false`
8. Bonus: Add buttons to add new todos. 
9. Extra-Bonus: Add a delete button to the component that renders a single todo, which when clicked, will delete the whole todo from the lifted up state. 