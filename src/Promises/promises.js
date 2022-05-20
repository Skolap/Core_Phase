async function timeout1() {
  await setTimeout(() => {
    console.log("Time 1");
  }, 3000);
}
async function timeout2() {
  await setTimeout(() => {
    console.log("Time 2");
  }, 2000);
}
async function timeout3() {
  await setTimeout(() => {
    console.log("Time 3");
  }, 1000);
}
