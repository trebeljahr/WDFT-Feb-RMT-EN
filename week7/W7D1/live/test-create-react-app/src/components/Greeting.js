export function Greeting(props) {
  console.log("these are our props:", props);
  // const name = "Joshua";
  return (
    <h1 style={{ textDecoration: "underline", color: props.color || "white" }}>
      {props.message} {props.name}!
    </h1>
  );
}
