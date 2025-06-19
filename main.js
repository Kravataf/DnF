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