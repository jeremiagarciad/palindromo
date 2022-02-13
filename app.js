const btn = document.getElementById("btn-checker");
let InputValue = document.getElementById("palindromo");

function test() {
  btn.addEventListener("click", () => {
    let updated = InputValue.value;
    const output = document.getElementById("result");
    const reverso = updated.toLowerCase().match(/[a-z]/gi).reverse();
    output.innerHTML =
      reverso.join("") === reverso.reverse().join("")
        ? "Yes! It's a palindrome"
        : "Nope! Not a palindrome!";
  });
}
test();

