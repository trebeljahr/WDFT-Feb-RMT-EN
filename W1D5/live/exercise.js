const chuck = {
  firstName: "Chuck",
  lastName: "Norris",
  birthDate: new Date("1940-03-10"),
  friends: ["Pablo", "Julie", "Yanis"],
  displayInfo() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I have ${this.friends.length} friends.`
    );
  },
  getAge() {
    // TODO: return the age in this function
    // Hint: to get the current time, you can do: new Date()
    // Hint: to get the birthDate, you can do: this.birthDate
    // Hint: you can subtract 2 dates and you get the number of milliseconds
    // Hint: convert the milliseconds to years
    const now = Date.now();
    const difference = now - this.birthDate;
    return Math.floor(difference / 1000 / 60 / 60 / 24 / 365);
  },
  addFriend(name) {
    // TODO (don't use return statement)
    // add a name to the friends array. The friend name is passed as a parameter to the function
  },
  getRandomFriend() {
    // TODO. return a random friend name from the friends array
  },
};

console.log(chuck.getAge());
