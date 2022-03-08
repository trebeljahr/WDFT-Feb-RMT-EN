const harryPotter = {
  name: "Harry Potter",
  house: "Gryffindor",
  role: "Student",
};

const albusDumbledore = {
  name: "Albus Dumbledore",
  house: "Gryffindor",
  role: "Headmaster",
};

const minervaMcGonagall = {
  name: "Minerva Mc. Gonagall",
  house: "Gryffindor",
  role: "Professor",
};

const wizards = [harryPotter, albusDumbledore, minervaMcGonagall];

const wizardShallowCopy = [...wizards];

// we ignore Albus Dumbledore!
const [harry, , minerva, snape] = wizards;
console.log(harry);
console.log(minerva);
console.log(harry === harryPotter);
console.log(minerva === minervaMcGonagall);

// what do you think is the value of this?
console.log(snape);

// something else that is quite useful is to use the spread operator within destructuring
const array = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = array;

// have a guess - what could rest be here?
console.log(rest);

// object destructuring
const { name: harrysName, role: harrysRole } = harry;
console.log(harrysName + ":", harrysRole);

// how could we get the same logged for Minerva Mc Gonagall?
const { name: minervasName, role: minervasRole } = minerva;
console.log(minervasName + ":", minervasRole);

const harryCopy = {
  ...harryPotter,
  house: "Slytherin",
  friends: ["Hermione", "Ron"],
};
console.log(harryCopy === harry);
console.log(harryCopy);

function logInfoFromWizard(wizardToLogInfoFrom) {
  console.log(
    "" +
      wizardToLogInfoFrom.name +
      " from house " +
      wizardToLogInfoFrom.house +
      " is " +
      wizardToLogInfoFrom.role +
      " at Hogwarts"
  );
}

logInfoFromWizard(minervaMcGonagall);

// you see - we repeat that long variable name a lot now... we could use destructuring instead!
function logInfoFromWizardWithDestructuring({ name, house, role }) {
  console.log(`${name} from house ${house} is ${role} at Hogwarts`);
}

// now the whole thing fits into one line easily
logInfoFromWizardWithDestructuring(minervaMcGonagall);

// what happens if we call that function but provide the wrong input?
logInfoFromWizardWithDestructuring("Harry");

// interesting... maybe we can kind of fix that? with default values?!
function logInfoFromWizardWithDestructuringWithDefaults({
  name = "Harry Potter",
  house = "Gryffindor",
  role = "Student",
} = {}) {
  console.log(`${name} from house ${house} is ${role} at Hogwarts`);
}

// what does this log?
logInfoFromWizardWithDestructuringWithDefaults();
// and this?
logInfoFromWizardWithDestructuringWithDefaults("Ron");
// what about this?
logInfoFromWizardWithDestructuringWithDefaults(1);
// and this?
logInfoFromWizardWithDestructuringWithDefaults(albusDumbledore);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// more complex example:
const response = {
  results: [
    {
      gender: "male",
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
        coordinates: {
          latitude: "20.9267",
          longitude: "-7.9310",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "brad.gibson@example.com",
      login: {
        uuid: "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        username: "silverswan131",
        password: "firewall",
        salt: "TQA1Gz7x",
        md5: "dc523cb313b63dfe5be2140b0c05b3bc",
        sha1: "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        sha256:
          "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480",
      },
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      registered: {
        date: "2002-05-21T10:59:49.966Z",
        age: 17,
      },
      phone: "011-962-7516",
      cell: "081-454-0666",
      id: {
        name: "PPS",
        value: "0390511T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
      nat: "IE",
    },
  ],
  info: {
    seed: "fea8be3e64777240",
    results: 1,
    page: 1,
    version: "1.3",
  },
};

const {
  results: [
    {
      name: { title, first, last },
      location: {
        timezone: { description: timeZoneCountry },
      },
    },
  ],
} = response;

const up = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(
  `${up(title)} ${up(first)} ${up(last)} your timezone is ${timeZoneCountry}`
);
