const Articles = require("./articles.json");
const Backgrounds = require("./backgrounds.json");

// 1. Policz ile artykułów ma swoje drafty
// 2. Zwróci tablicę idków wszystkich artykółów
// 3. Zwróci tablicę tytułów wszystkich artykółów
// 4. Zwróci artykuły których id jest parzyste

// 5. Zbierz wszystkie produkty z draftów podpiętych do published, ale bez duplikatów

licznik = 0;
Articles.map((art) => {
  if (art.draft) {
    licznik += 1;
  }
});

const x2 = Articles.map((art) => art.id);

const x3 = Articles.map((art) => art.title);

const x4 = Articles.filter((art) => art.id % 2 === 0);
const sameIdx4 = x4.map((art) => art.id);

const x5 = Backgrounds.filter(
  (back) => back.draft && back.status === "Published"
).map((back) => back.draft.products);

let arrayX5 = [];
for (const key in x5) {
  if (Object.hasOwnProperty.call(x5, key)) {
    arrayX5 = [...arrayX5, ...x5[key]];
  }
}

// console.log(arrayX5);

let x6 = [];

arrayX5.reduce((acc, elem) => {
  // console.log("elem1: ");
  acc !== undefined ? x6.push(acc) : null;
  x6.includes(elem) ? null : x6.push(elem);
  // console.log(elem);
  // console.log(x6);
});

// console.log("wynik");
// console.log(x6);

const array1 = [
  [0, 1],
  [2, 3],
  [3, 4, 5],
].reduce((accumulator, currentValue) =>
  accumulator.includes(currentValue) ? accumulator : accumulator.concat(currentValue), []
);

console.log(array1);

// console.log(licznik);
// console.log(x2);
// console.log(x3);
// console.log(x4);
// console.log(sameIdx4);
