document.addEventListener("DOMContentLoaded", () => {
  const redovi = document.querySelectorAll("table tr:not(.hederTabele)");

  redovi.forEach(red => {
    const imeUsluge = red.children[1]; 
    const cenaUsluge = red.children[2];
    if (imeUsluge && cenaUsluge) {
      imeUsluge.addEventListener("mouseenter", () => {
        cenaUsluge.classList.add("uvecana-cena");
      });
      imeUsluge.addEventListener("mouseleave", () => {
        cenaUsluge.classList.remove("uvecana-cena");
      });
    }
  });
});

