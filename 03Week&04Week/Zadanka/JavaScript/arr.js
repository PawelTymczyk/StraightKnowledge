// https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba

// Add 1 Fill

const fill = (arraySize, value) => {
  return new Array(arraySize).fill(value);
};
const data1 = 3;
const valueToFill = "a";
console.log("Wynik 1:");
console.log(fill(data1, valueToFill));

// Add 2 Reverse table without table

const reverse = (array) => {
  let reverseTable = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseTable.push(array[i]);
  }

  return reverseTable;
};
const data2 = [1, 2, 3];
console.log("Wynik 2:");
console.log(reverse(data2));

// Add 3 Compact table wwithout non number and zero values

const compact = (array) => {
  let compacrArray = [];

  array[0] % 1 === 0;
  array.map((elem) => {
    if (typeof elem === "number" && elem !== 0) compacrArray.push(elem);
  });

  return compacrArray;
};

const data3 = [0, 1, false, 2, undefined, "", 3, null];
console.log("Wynik 3:");
console.log(compact(data3)); // [1, 2, 3]

// Add 4 Map array of arrays to array of objects where first elem in array are field and 2'nd element in array are value of obj

const fromPairs = (array) => {
  let arrayOfObjects = [];

  array.map((arr) => {
    arrayOfObjects.push({ [arr[0]]: arr[1] });
  });

  return arrayOfObjects;
};
const data4 = [
  ["a", 1],
  ["b", 2],
];
console.log("Wynik 4:");
console.log(fromPairs(data4)); // { 'a': 1, 'b': 2 }

const without = (array, ...args) => {
  args.map(
    (elemOfArgs) =>
      (array = array.filter((elemOfArray) => elemOfArray !== elemOfArgs))
  );

  return array;
};
const data = [1, 2, 3, 1, 2];
console.log("Wynik 5:");
console.log(without(data, 1, 2)); // [3]

const unique = (array) => {
  array.filter((element, id) => array.indexOf(element) === id);
  return array;
};
const data6 = [1, 2, 1, 2, 3];
console.log("Wynik 6:    - NOT WORKING");
console.log(unique(data6)); // [1, 2, 3]

const isEqual = (firstArray, secondArray) => {
  let result = true;

  if (!(firstArray.length === secondArray.length)) {
    // result = false;
    return false;
  }

  firstArray.map((elem, id) => {
    if (!(secondArray[id] === elem)) {
      result = false;
      //   return false; - return nie przerywa wykonowania się mapa
    }
  });

  return result;
};
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log("Wynik 7:");
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false

// Zad 8 spłaszcz tablicę elementów
// nie dałem rady zrobić tego samemu sposobem innym niż flat
const flatten = (array) => {
  return array.reduce(
    (acc, elem) => acc.concat(Array.isArray(elem) ? flatten(elem) : elem),
    []
  );
};
const data8 = [1, 2, [3, 4, [5]]];
console.log("Wynik 8:");
console.log(flatten(data8)); // [1, 2, 3, 4, 5]

// Zad 9 Zwróć tablicę tablic z max 3 chunckami

const chunk = (array, size) => {
  let chuncks = [];
  index = 0;
  do {
    chuncks.push(array.slice(index, size + index));
    index += size;
  } while (array.length > index);
  return chuncks;
};
const data9 = [1, 2, 3, 4, 5, 6, 7];
console.log("Wynik 9:");
console.log(chunk(data9, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data9, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// Zad 10 Zwróć tablicę elemntów która zawiera się w każdej z podanych tablic

{
  const intersection = (...arrays) => {
    const result = [];
    if (arrays.length === 2) {
      array1 = arrays[0];
      array2 = arrays[1];

      array1.map((elem1) => {
        array2.map((elem2) => {
          if (elem1 === elem2) result.push(elem1);
        });
      });
    } else {
      intersection(result, ...arrays.slice(2, arrays.length));
    }
    return Array.from(new Set(result));
    // return result;
  };
  const arr1 = [1, 2];
  const arr2 = [2, 3];
  const arr3 = ["a", "b"];
  const arr4 = ["b", "c"];
  const arr5 = ["b", "e", "c"];
  const arr6 = ["b", "b", "e"];
  const arr7 = ["b", "c", "e"];
  const arr8 = ["b", "e", "c"];
  console.log("Wynik 10:");
  console.log(intersection(arr1, arr2)); // [2]
  console.log(intersection(arr3, arr4, arr5)); // ['b']
  // console.log(intersection(arr6, arr7, arr8)); // ['b', 'e']
  console.log("Nie do końca zrobione.");
}
