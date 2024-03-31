const obj1 = {
  a: {
    b: 1,
    e: 2,
  },
  f: [1, 2, 3],
};
const obj2 = {
  a: { e: 3 },
  c: { d: 1 },
  f: [4, 5, 6],
  q: [1],
};

const res = {
  a: {
    b: 1,
    e: 3,
  },
  c: {
    d: 1,
  },
  f: [1, 2, 3, 4, 5, 6],
  q: [1],
};

function mergeObjects(obj1, obj2) {
  const result = {};

  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);

  arr1.forEach((key) => {
    if (obj2[key]) {
      if (typeof obj1[key] === "object" && !Array.isArray(obj1[key])) {
        return (result[key] = mergeObjects(obj1[key], obj2[key]));
      }

      if (Array.isArray(obj1[key])) {
        return (result[key] = [...obj1[key], ...obj2[key]]);
      }

      return (result[key] = obj2[key]);
    }

    return (result[key] = obj1[key]);
  });

  arr2.forEach((key) => {
    if (obj1[key]) {
      return;
    }

    return (result[key] = obj2[key]);
  });

  return result;
}

// 17 - 4 = 13
// 13 - 6 = 7
// 7 - 7 = 0
// 4,6,7

const arr = [4, 6, 1, 7, 8];
const price = 15;

// 1. We take 4
// newArr = [6, 1, 7, 8], price = 11
// canPay(newArr, price)?

//2. We don't take 4
// newArr = [6, 1, 7, 8], price = 15
// canPay(newArr, price) ?

const first = performance.now();

function canPay(arr, price) {
  for (let i = 0; i < arr.length; i++) {
    const newPrice = price - arr[i];
    const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    if (newPrice === 0) {
      return true;
    }
    if (canPay(newArr, newPrice)) {
      return true;
    }
  }

  return false;
}

console.log(canPay(arr, price));
console.log(second - first);

function canPayFast(arr, price){
    if()
}