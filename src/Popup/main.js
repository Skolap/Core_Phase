let domOne = document.querySelector("#one");
let domTwo = document.querySelector("#two");
let domThree = document.querySelector("#three");
//console.log(domOne.textContent)
domOne.addEventListener("click", () => {
  let contentOne = domOne.textContent;
  alert(contentOne);
});
domTwo.addEventListener("click", () => {
  let contentTwo = domTwo.textContent;
  alert(contentTwo);
});
domThree.addEventListener("click", () => {
  let contentThree = domThree.textContent;
  alert(contentThree);
});
