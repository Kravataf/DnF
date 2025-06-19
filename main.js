document.addEventListener("DOMContentLoaded", function () {
  // restore
  document.querySelectorAll('input, textarea').forEach(el => {
    // unique keys for each
    const key = "DnF_" + el.id;
    if (el.type === "checkbox") {
      el.checked = localStorage.getItem(key) === "true";
    } else {
      const saved = localStorage.getItem(key);
      if (saved !== null) el.value = saved;
    }
    // save
    el.addEventListener("input", function () {
      if (el.type === "checkbox") {
        localStorage.setItem(key, el.checked);
      } else {
        localStorage.setItem(key, el.value);
      }
    });
    // save
    if (el.type === "checkbox") {
      el.addEventListener("change", function () {
        localStorage.setItem(key, el.checked);
      });
    }
  });
});

function toastPopup() {
  // Get the toast DIV
  var x = document.getElementById("toast");
  var amount = document.getElementById("DICE");
  var sides = document.getElementById("SIDES");
  let random = (Math.floor(Math.random() * (sides.value - 1 + 1)) + 1) * amount.value;
  x.innerText = "You rolled.. " + amount.value + "d" + random;

  x.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}