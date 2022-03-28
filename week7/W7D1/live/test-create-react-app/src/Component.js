export function FirstComponent() {
  return (
    <div>
      <h1>Hello from our Component</h1>
    </div>
  );
}

export function SecondComponent() {
  return <h2>I am the second component</h2>;
}

const defaultComponent = () => {
  return <h3>Hello world</h3>;
};

export default defaultComponent;
