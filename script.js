// On selectionne les éléments du DOM dont on a besoin
const navLinks = document.querySelectorAll('nav a');
const imgsNav = document.querySelectorAll('nav img');
const title = document.querySelector('h1');
const verticalLine = document.querySelector('.home__middle-line');
const grapes = document.querySelector('.home__image');
const button = document.querySelector('.home__button');

// On ajoute un écouteur d'événement sur le chargement de la page pour lancer l'animation
window.addEventListener('load', revealAnimation);

// On crée la fonction pour l'animation
function revealAnimation() {
  // On garde une timeline GSAP dans une constante
  const TLFADE = gsap.timeline();

  // On ajoute les animations à la timeline
  TLFADE
    // On utilise la méthode from et to pour faire apparaître les éléments
    // et on ajoute un delay de 0.2 pour un effet en cascade
    .from(title, { autoAlpha: 0, y: -50, delay: 0.2 })
    .to(verticalLine, { blockSize: '200' }, '-=0.2')
    .from(grapes, { autoAlpha: 0, y: -50 }, '-=0.2')
    .from(button, { autoAlpha: 0, y: -50 }, '-=0.2')
    .from(
      navLinks,
      { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 },
      '-=0.2'
    )
    .from(imgsNav, { autoAlpha: 0, y: -50 });
}
