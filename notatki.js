import { gameOfThronesCharacters } from "./fixtures/got";

export const me = {
  firstName: "Paul",
  surname: "tymczyk",
  house: "Gryffindor",
  age: 111,
  hobbies: ["games"],
};

export const harriPotta = [
  ...gameOfThronesCharacters,
  {
    firstName: "Harry",
    surname: "Potter",
    house: "Gryffindor",
    age: 111,
    hobbies: ["magic"],
  },
];

// 1. Merge "gameOfThronesCharacters" with "me" and "harriPotta", We want to create new array
export const spinOffMovieCharacters = [
  ...gameOfThronesCharacters,
  ...me,
  ...harriPotta,
];

// 2. Array with all people who are interesed in "swordsmanship". Based on "spinOffMovieCharacters"
export const theyLikeWavingTheSword = spinOffMovieCharacters.filter(
  (character) => character.hobbies.includes("swordsmanship")
);
console.log(theyLikeWavingTheSword);

// 3. Array with unique houses names, no duplicates! Based on "spinOffMovieCharacters"
export const uniqueHouseNames = spinOffMovieCharacters.filter(
  (character, index, self) =>
    index === self.findIndex((t) => t.firstName === character.firstName)
);

// 4. Array containing only surnames for characters who are older than 20. Based on "spinOffMovieCharacters"
export const surnamesGt20 = spinOffMovieCharacters.filter(character => character.age > 20 ).map(character => character.surname);