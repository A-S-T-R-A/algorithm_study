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
};

const isObject = (v) => {
  return typeof v === "object" && v !== null && !Array.isArray(v);
};

function mergeObjects(obj1, obj2) {
  const res = obj1;

  for (const key in obj2) {
    const value = obj2[key];
    if (isObject(value)) {
      res[key] = mergeObjects(res[key] ?? {}, value);
    } else if (Array.isArray(value)) {
      res[key] = [...(res[key] ?? []), ...value];
    } else {
      res[key] = value;
    }
  }

  return res;
}

console.log(mergeObjects(obj1, obj2));
