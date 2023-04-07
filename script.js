let output = document.getElementById("output");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

const counter = (function () {
  let count = 0;
  return function (operation) {
    operation == "plus" ? count += 1 : count -= 1;
    return count;
  };
})();


plus.addEventListener("click", () => {
  document.getElementById("output").innerHTML = counter('plus');
});
minus.addEventListener("click", () => {
  document.getElementById("output").innerHTML = counter('minus');
});
