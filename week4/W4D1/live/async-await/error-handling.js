async function googleExample() {
  try {
    const response = await fetch("https://www.google.com/");
    // const response2 = await fetch("https://www.google.com/");
  } catch (err) {
    console.error("This is from us: ", err);
  } finally {
    console.log("Hello from finally block");
  }
}

googleExample();
