const hello = "hello";
const greeting = hello + " " + "world";
console.log(greeting);

const templateString = `${greeting} ${hello}\n second line \n third line`;
console.log(templateString);

console.log(templateString.length);

console.log(hello[0]);
console.log(hello[1]);

console.log(templateString[templateString.length - 1]);

console.log(hello.slice());
console.log(hello.slice(1));

console.log(hello.charAt(0));

// "hello" -> [ "h", "e", "l", "l", "o"] -> "olleh"
console.log(hello.split("").reverse().join(""));

console.log(hello.slice(-1));
console.log(hello.toUpperCase());
const loud = "HELLLLLOOOO!!";
console.log(loud.toLowerCase());

const commaSeparatedLines = "Hanin, Andre, Adryan";
const nameArray = commaSeparatedLines.split(",");
console.log(nameArray);
