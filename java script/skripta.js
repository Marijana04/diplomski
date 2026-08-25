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


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('aktivno');
            hamburger.classList.toggle('otvoreno');
        });
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('aktivno');
                hamburger.classList.remove('otvoreno');
            });
        });
    }
});

window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("my-form");
    
    if (form) {
        async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("my-form-button");
            var data = new FormData(event.target);
            
            fetch("https://formspree.io/f/mvkpjvzk", {
                method: document.getElementById("my-form").method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    window.location.href = "hvala.html";
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Došlo je do greške prilikom slanja poruke.");
                        }
                    })
                }
            }).catch(error => {
                alert("Došlo je do greške prilikom slanja poruke.");
            });
        }
        
        form.addEventListener("submit", handleSubmit);
    }
});