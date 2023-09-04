const arr = [2, 7, 11, 23];
const target = 18;

const check = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

let result = check(arr, target);
console.log(result);
