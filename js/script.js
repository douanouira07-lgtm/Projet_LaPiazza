// Menu mobile : ouverture et fermeture au clic.
const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', function () {
    navigation.classList.toggle('nav-open');
    const isOpen = navigation.classList.contains('nav-open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    menuButton.querySelector('span').textContent = isOpen ? 'close' : 'menu';
  });

  navigation.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navigation.classList.remove('nav-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Ouvrir le menu');
      menuButton.querySelector('span').textContent = 'menu';
    });
  });
}
