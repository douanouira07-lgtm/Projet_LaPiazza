// JavaScript permet d'ajouter de l'interactivité à la page web
// La Piazza - petit script du formulaire

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  // Empêche le rechargement de la page
  event.preventDefault();

  // Affiche une confirmation
  formMessage.textContent = "Merci ! Votre message a bien été préparé.";

  // Vide les champs
  form.reset();
});

// Pour tester une méthode CSS, change la classe du body dans index.html :
// mode-original = CSS classique
// mode-flexbox  = Flexbox
// mode-grid     = Grid
