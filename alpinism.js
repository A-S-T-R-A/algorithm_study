const input1 = {
  mountains: [
    [5, 3],
    [1, 5],
    [4, 5],
    [3, 2],
    [3, 2],
    [5, 1]
  ],
  x: 1,
  y: 2
};

const input2 = {
  mountains: [[5, 5]],
  x: 1,
  y: 2
};

const input3 = {
  mountains: [
    [1000, 1],
    [1000, 1],
    [1000, 1]
  ],
  x: 1000,
  y: 1
};

function efficientClimb(input) {
  const { x, y, mountains } = input;
  let mood = -Infinity;
  let stack = [];
  let left = [];
  let currentLeftBeauty = 0;

  mountains.forEach((_, index, array) => {
    if (index === 0) {
      left.push(0);
      return;
    }
    const mountain = array[index - 1];
    while (stack.length > 0 && stack[stack.length - 1][0] <= mountain[0]) {
      currentLeftBeauty -= stack.pop()[1];
    }
    stack.push(mountain);
    currentLeftBeauty += mountain[1];
    left.push(currentLeftBeauty);
  });

  stack = [];
  let right = [];
  let currentRightBeauty = 0;

  mountains.toReversed().forEach((_, index, array) => {
    if (index === 0) {
      right.push(0);
      return;
    }
    const mountain = array[index - 1];
    while (stack.length > 0 && stack[stack.length - 1][0] <= mountain[0]) {
      currentRightBeauty -= stack.pop()[1];
    }
    stack.push(mountain);
    currentRightBeauty += mountain[1];
    right.push(currentRightBeauty);
  });

  right.reverse();

  for (let i = 0; i < mountains.length; i++) {
    const [height, beauty] = mountains[i];
    const leftBeauty = left[i];
    const rightBeauty = right[i];
    const currentMood = (beauty + leftBeauty + rightBeauty) * y - height * x;
    if (currentMood > mood) {
      mood = currentMood;
    }
  }

  return mood;
}

function climb(input) {
  const { x, y, mountains } = input;
  let mood = -Infinity;

  mountains.forEach(([height, beauty], index, array) => {
    const left = array.slice(0, index);
    const right = mountains.slice(index + 1);

    let totalLeftBeauty = 0;
    let maxLeftHeight = 0;

    left.toReversed().forEach(([leftHeight, leftBeauty]) => {
      if (leftHeight > maxLeftHeight) {
        totalLeftBeauty += leftBeauty;
        maxLeftHeight = leftHeight;
      }
    });

    let totalRightBeauty = 0;
    let maxRightHeight = 0;

    right.forEach(([rightHeight, rightBeauty]) => {
      if (rightHeight > maxRightHeight) {
        totalRightBeauty += rightBeauty;
        maxRightHeight = rightHeight;
      }
    });

    const currentMood = y * (totalLeftBeauty + totalRightBeauty + beauty) - height * x;

    if (currentMood > mood) {
      mood = currentMood;
    }
  });

  // climb: mood -= mountains[i][0] * x
  // enjoy: mood += mountains[i][1] * y

  return mood;
}

console.log(efficientClimb(input1)); // 28
console.log(efficientClimb(input2)); // 5
console.log(efficientClimb(input3)); // -999997

// console.log(climb(input1)); // 28
// console.log(climb(input2)); // 5
// console.log(climb(input3)); // -999997
