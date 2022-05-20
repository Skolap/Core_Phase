function evenNumbers(myarray) {
  let evenArray = [];
  for (let i = 0; i < myarray.length; i++) {
    if (myarray[i] % 2 === 0) {
      evenArray.push(myarray[i]);
    }
  }
  return evenArray;
}
evenNumbers([1, 5, 8, 6, 2, 6]);
