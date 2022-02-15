const name1 = "Maria";
const name2 = "Mario";

const shorterLength = name1.length < name2.length ? name1.length : name2.length;
// John and Johnny
for (let i = 0; i < shorterLength; i++) {
  console.log("this is i", i);
  //   console.log(name1[i]);
  //   console.log(name2[i]);
  if (name1 === name2) {
    console.log("Wow you have the same name");
    break;
  }
  if (name1[i] > name2[i]) {
    console.log("Name two is first");
    break;
  } else if (name1[i] < name2[i]) {
    console.log("Name one is first");
    break;
  }
  const onLastIteration = i === shorterLength - 1;
  if (onLastIteration) {
    console.log(
      "Shorter name is",
      name1.length < name2.length ? "Name one" : "Name Two"
    );
  }
}

// console.log("Hello");
console.log("Is abc before abcd?", "abc" < "abc");
if (name1 === name2) {
  console.log("Same name");
} else if (name1 < name2) {
  console.log("Name one First");
} else {
  console.log("Name Two First");
}
