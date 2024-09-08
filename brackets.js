const lib = {
  ")": "(",
  "}": "{",
  "]": "["
};

function checkBracketSequence(input) {
  const stack = [];

  for (let char of input) {
    if (char in lib) {
      if (lib[char] !== stack.pop()) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(checkBracketSequence("(())")); // true
console.log(checkBracketSequence("({(}))")); // false
console.log(checkBracketSequence("({}({}))")); // true
