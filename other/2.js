const k = 2;
const str = "01010";

function countSubstrings(str, k) {
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    let ones = 0;
    for (let j = i; j < str.length; j++) {
      if (str[j] === "1") {
        ones++;
      }

      if (ones > k) {
        ones = 0;
        console.log("window collapsed for i: ", i);
        break;
      }

      if (ones < k) {
        continue;
      }

      if (ones === k) {
        console.log(`i: ${i}`, `j: ${j}`, str.substr(i, j - i + 1));
        res++;
      }
    }
  }

  return res;
}

// console.log(countSubstrings(str, k)); // 0101 101 1010 01010
console.log(countSubstrings("101010101", 2)); // 0101 101 1010 01010
// console.log(countSubstrings("1010", 1)); // 1 10 01 1 10 010
