const account = require("./account.json");
const simplyObject = require("./simplyObj.json");

{
  // 1. Wpisz do konsoli  wszystkie klucze oraz ich wartości dla obiektu idToken w account na 2 sposoby
  const show1 = () => {
    return Object.keys(account.idToken);
  };

  const show2 = () => {
    let keys = [];
    for (const [key, value] of Object.entries(account.idToken)) {
      keys.push(key);
    }

    return keys;
  };

  // console.log(show1());
  // console.log(show2());
}

{
  // 2. Dodaj do obieku account propertiesa “address” i wypełnij mu jakąś wartość na conajmniej 2 sposoby (jednym z nich to spread)
  address = "Akademicka 102";
  const add = () => {
    newAccounts = account;
    newAccounts.address = address;
    return newAccounts;
  };
  const addBySpread = () => {
    return { ...account, address };
  };

  // console.log(add());
  // console.log(addBySpread());
}

{
  // 3. Skopiuj obiekt article wykorzystująć płytką oraz głęboką kopię oraz udowodnij, że referencje się przepisały bądź nie (edited)

  object1 = { water: "water", food: { type: "met", name: "beef" } };
  const flatCopy = () => {
    return { ...object1 };
  };
  const deepCopy = () => {
    return JSON.parse(JSON.stringify(object1));
  };

  let flat = flatCopy();
  let deep = deepCopy();
  // console.log("Init copies: ");
  // console.log(flat);
  // console.log(deep);
  object1.water = "more water";
  object1.food.name = "more beef";
  // console.log("Check copies: ");
  // console.log(flat);
  // console.log(deep);
}

{
  // 4. Wypisz wartości kluczy które są numberem w obiekcie
  const onlyNumberProperty = () => {
    let keys = [];

    for (const [key] of Object.entries(simplyObject)) {
      if (typeof (key - 0) === "number" && !isNaN(key - 0)) {
        keys.push(key);
      }
    }

    return keys;
  };

  // console.log(onlyNumberProperty());
}

{
  // 5. Przerób ten obiekt na formę [[key, value]]

  const transform = () => {
    let keys = [];
    for (const [key, value] of Object.entries(simplyObject)) {
      keys.push([key, value]);
    }
    return keys;
  };

  console.log(transform());
}
