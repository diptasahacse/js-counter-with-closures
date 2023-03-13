let output = document.getElementById("output");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

const add = (function () {
  let counter = 0;
  return function (operation) {
    operation == "plus" ? counter += 1 : counter -= 1;
    return counter;
  };
})();


plus.addEventListener("click", () => {
  document.getElementById("output").innerHTML = add('plus');
});
minus.addEventListener("click", () => {
  document.getElementById("output").innerHTML = add('minus');
});
