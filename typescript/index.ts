const input1 = document.getElementById("first") as HTMLInputElement;
const input2 = document.getElementById("second") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", () => {
  console.log(sum(Number(input1.value), Number(input2.value)));
});
