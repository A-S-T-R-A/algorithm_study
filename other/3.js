const string = "a2b3a3b1c10";
const answer = "aabbbaaabbbbbbbbbb";

function dearchive(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (Number.isNaN(+str[i])) {
      arr.push(str[i]);
    } else {
      let numberLength = 0;
      for (let j = i; j < str.length; j++) {
        if (!Number.isNaN(+str[j])) {
          numberLength++;
        } else {
          break;
        }
      }
      arr.push(str.substr(i, numberLength));
      i += numberLength - 1;
    }
  }

  let answer = "";

  arr.forEach((el, index, array) => {
    if (!Number.isNaN(+el)) {
      for (let j = 0; j < +el; j++) {
        answer += array[index - 1];
      }
    }
  });

  return answer;
}

console.log(dearchive(string));
