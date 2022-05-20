async function details() {
  let det = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await det.json();
  let name = data.title;
  console.log(name);
}
