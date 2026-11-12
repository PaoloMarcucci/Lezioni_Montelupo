// Filtro delle voci negli indici
document$.subscribe(function () {
  var box = document.querySelector(".filtro-indice");
  if (!box) return;
  var norm = function (s) { return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); };
  box.addEventListener("input", function () {
    var q = norm(box.value.trim());
    document.querySelectorAll("ul.indice").forEach(function (ul) {
      var visibili = 0;
      ul.querySelectorAll("li").forEach(function (li) {
        var ok = !q || norm(li.querySelector(".voce").textContent).indexOf(q) !== -1;
        li.style.display = ok ? "" : "none"; if (ok) visibili++;
      });
      var h = ul.previousElementSibling;
      ul.style.display = visibili ? "" : "none";
      if (h && h.tagName === "H2") h.style.display = visibili ? "" : "none";
    });
  });
});
