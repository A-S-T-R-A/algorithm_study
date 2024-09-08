function isStringifiedNumber(string) {
  return !Number.isNaN(Number(string));
}

function multiplyString(str, multiplier) {
  let result = "";

  for (let i = multiplier; i > 0; i--) {
    result += str;
  }

  return result;
}

function squareBracketUnzipper(input) {
  let output = "";
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (isStringifiedNumber(char)) {
      continue;
    }

    if (char === "[") {
      stack.push([char, Number(input[i - 1]), i + 1]);
      continue;
    }

    if (char === "]") {
      const startingIndex = stack.length > 0 ? stack[stack.length - 1][2] : 0;
      const endingIndex = i;
      const substring = input.substring(startingIndex, endingIndex);
      const multiplier = stack.length > 0 ? stack[stack.length - 1][1] : 1;

      output += multiplyString(substring, multiplier);
      stack.pop();
      continue;
    }
  }

  return output;
}

// console.log(squareBracketUnzipper("")); // ''
// console.log(squareBracketUnzipper("aaa")); // 'aaa'
// console.log(squareBracketUnzipper("3[ab]")); // 'ababab'
console.log(squareBracketUnzipper("2[ab3[d]]")); // 'abdddabddd'
// console.log(squareBracketUnzipper("2[ab3[d]ef]")); // 'abdddefabdddef'
