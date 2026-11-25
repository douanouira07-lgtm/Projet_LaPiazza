
// ===== JS 3la 9ad HTML mte3ek - menu.html =====

// --- 1. L FILTRE ---
// L boutons mte3ek : .filters button
let boutonsFiltre = document.querySelectorAll(".filters button"); 
let toutesPizzas = document.querySelectorAll(".card");

// N9asmou l pizzas : 1-2-3 artisanales, 4-5-6 speciales
// Margherita, Regina, Quattro = artisanales
// Diavola, Tartufo, Burrata = speciales
let categories = ["artisanales", "artisanales", "artisanales", "speciales", "speciales", "speciales"];

boutonsFiltre.forEach(function(bouton, indexBouton) {
  bouton.addEventListener("click", function() {

    // Na7iw l loun l a7mer mel kol 
    boutonsFiltre.forEach(function(b) {
      b.classList.remove("filter-active");
    });
    // N7otouh ken 3al bouton eli tenzelna 3lih
    bouton.classList.add("filter-active");

    // 0 = Artisanales, 1 = Spéciales, 2 = Desserts
    if (indexBouton === 0) {
      toutesPizzas.forEach(function(pizza, i) {
        if (categories[i] === "artisanales") {
          pizza.style.display = "block";
        } else {
          pizza.style.display = "none";
        }
      });
    }

    if (indexBouton === 1) {
      toutesPizzas.forEach(function(pizza, i) {
        if (categories[i] === "speciales") {
          pizza.style.display = "block";
        } else {
          pizza.style.display = "none";
        }
      });
    }

    if (indexBouton === 2) {
      toutesPizzas.forEach(function(pizza) {
        pizza.style.display = "none";
      });
      alert("Desserts & Boissons : bientôt disponible 🍰");
    }
  });
});

// --- 2. L BOUTON + ---
let boutonsPlus = document.querySelectorAll(".btn-plus");
let compteur = 0;
let total = 0;

boutonsPlus.forEach(function(bouton) {
  bouton.addEventListener("click", function() {
    let carte = bouton.closest(".card");
    let nomPizza = carte.querySelector("h3").textContent;
    let prix = parseInt(carte.querySelector(".price").textContent);

    compteur = compteur + 1;
    total = total + prix;

    bouton.textContent = "✓";
    bouton.style.background = "#27ae60";

    alert(nomPizza + " ajoutée ! 🍕\nPanier : " + compteur + " pizza(s)\nTotal : " + total + " DT");
  });
});

// --- 3. BOUTON RÉSERVER UNE TABLE - L louta ---
// L bouton l louta : .cta .btn
let boutonReserver = document.querySelector(".cta .btn");

if (boutonReserver) {
  boutonReserver.addEventListener("click", function() {
    let nom = prompt("Quel est votre nom ?");
    let nb = prompt("Combien de personnes ? Ex : 2, 4...");

    if (nom && nb) {
      alert("Merci " + nom + " ! ❤️\nTable réservée pour " + nb + " personnes.\nNistannouk fi La Piazza !");
      boutonReserver.textContent = "Table Réservée ✓";
      boutonReserver.style.background = "#27ae60";
    }
  });
}

// --- 4. BOUTON RÉSERVER L FOUG - F L HEADER ---
let boutonHeader = document.querySelector(".header .btn");
if (boutonHeader) {
  boutonHeader.addEventListener("click", function() {
    document.querySelector(".cta").scrollIntoView({ behavior: "smooth" });
  });
}