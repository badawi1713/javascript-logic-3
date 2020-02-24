let arraySum = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  let newArray = sum
    .toString(10)
    .split("")
    .map(t => {
      return parseInt(t);
    });
  let sum1 = 0;
  for (let j = 0; j < newArray.length; j++) {
    sum1 = sum1 + newArray[j];
  }
  let newArray1 = sum1
    .toString(10)
    .split("")
    .map(t => {
      return parseInt(t);
    });
  let sum2 = 0;
  for (let k = 0; k < newArray1.length; k++) {
    sum2 = sum2 + newArray1[k];
  }
  return console.log(`Result: ${sum2}`);
};

arraySum([123, 9, 27]);
arraySum([143, 21, 9, 19]);
