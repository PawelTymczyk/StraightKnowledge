// https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-objects-8942cc502754
{
  // Zad 1 Zwerfikuj czy obiekt zawiera jakieś tablic lub czy nie jest nullem

  const isPlainObject = (element) => {
    return typeof element === "object" && !Array.isArray(element);
  };
  const data = { a: 1 };
  console.log("Zadanie 1:");
  console.log(isPlainObject(data)); // true
}

{
  // Zad 2 Zwróć z obiektu tablicę par [klucz, wartość]
  const makePairs = (object) => {
    let array = [];
    for (const prop in object) {
      if (object.hasOwnProperty(prop)) {
        array.push([prop, object[prop]]);
      }
    }
    return array;
  };
  const data = { a: 1, b: 2 };
  console.log("Zadanie 2:");
  console.log(makePairs(data)); // [['a', 1], ['b', 2]]
}

{
  // Zad 3 Zwróć obiekt bez wybranych parametrów

  const without = (object, ...args) => {
    args.forEach((arg) => {
      delete object[arg];
    });

    return object;
  };
  const data = { a: 1, b: 2 };
  console.log("Zadanie 3:");
  console.log(without(data, "b")); // { a: 1 }
}

{
  // Zad 4 Sprawdź czy cały obiekt jest pusty

  const isEmpty = (object) => {
    result = true;
    for (const prop in object) {
      if (
        object[prop] !== undefined &&
        object[prop] !== "" &&
        object[prop] !== null
      ) {
        result = false;
      }
    }

    return result;
  };
  const data = { a: 1, b: undefined };
  const data2 = { a: undefined };
  console.log("Zadanie 4:");
  console.log(isEmpty(data)); // false
  console.log(isEmpty(data2)); // true
}

{
  // Zad 5 Zrób funkcję, która sprawdzi czy obiektu są identczne

  const isEqual = (firstObject, secondObject) => {
    const firstObjectKeys = Object.keys(firstObject);
    const secondObjectKeys = Object.keys(secondObject);

    if (firstObjectKeys.length !== secondObjectKeys.length) {
      return false;
    }

    for (const prop in firstObject) {
      if (firstObject[prop] !== secondObject[prop]) {
        return false;
      }
    }

    return true;
  };
  const data = { a: 1, b: 1 };
  const data2 = { a: 1, b: 1 };
  const data3 = { a: 1, b: 2 };
  console.log("Zadanie 5:");
  console.log(isEqual(data, data2)); // true
  console.log(isEqual(data, data3)); // false
}

{
  // Zad 6 Zwróć wycinek tablicy z konkretnej ścieżki w obiekcie

  const invoke = (object, path, func, args) => {
    return null;
  };
  const data = { a: { b: [1, 2, 3] } };
  console.log("Zadanie 6:");
  console.log("Nie ogarniam tego");

  // console.log(invoke(data, "a.b", "splice", [1, 2])); // [2, 3]
}

{
  // Zad 7 Sprawdź czy najgłębszy objet jest pusty

  const isEmptyDeep = (element) => {
    // result = true;
    // for (const prop in object) {
    //   if (
    //     object[prop] !== undefined &&
    //     object[prop] !== "" &&
    //     object[prop] !== null
    //   ) {
    //     result = false;
    //   }
    // }
    // return result;
  };
  const data = { a: { b: undefined } };
  console.log("Zadanie 7:");
  console.log("Tego nie ogarnąłem samemu, ale rozwiązanie rozumiem jak działa");
  // console.log(isEmptyDeep(data)); // true
}

{
  // Zad 8 Zrób głębokie porównanie obiektów

  const isEqualDeep = (element) => {
    return null;
  };
  const data = { a: 1, b: { c: 1 } };
  const data2 = { a: 1, b: { c: 1 } };
  const data3 = { a: 1, b: { c: 2 } };
  console.log("Zadanie 8:");
  console.log("Tego nie zrobiłem samemu, ale rozwiązanie rozumiem jak działa");
  // console.log(isEqualDeep(data, data2)); // true
  // console.log(isEqualDeep(data, data3)); // false
}

{
  // Zad 9 Znajdź ten sam klucz z wartością w 2 różnych obiektach i zwródź go

  const intersection = (firstObject, secondObject) => {
    let firstObjectKeys = Object.keys(firstObject);
    let result = {};

    firstObjectKeys.map((elem) => {
      if (firstObject[elem] === secondObject[elem]) {
        result = {
          ...result,
          [elem]: firstObject[elem],
        };
      }
    });

    return result;
  };
  const data = { a: 1, b: 2 };
  const data2 = { c: 1, b: 2 };
  console.log("Zadanie 9:");
  console.log(intersection(data, data2)); // { b: 2 }
}

{
  // Zad 10 Znajdź ten sam klucz z wartością w 2 różnych obiektach  głębokich i zwródź go

  const intersectionDeep = (firstObject, secondObject) => {
    return null;
  };
  const data = { a: 1, b: { c: 3 } };
  const data2 = { c: 1, b: { c: 3 } };
  console.log("Zadanie 10:");
  console.log("Tego nie zrobiłem, jak sprawdziłem rozwiązanie to rozumiem jak działa, ale wymagało to jeszcze korzystania z 8 ćwiczenia.");
  // console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
}
