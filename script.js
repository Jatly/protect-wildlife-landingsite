let scrollY = 0;
let mouseX = 0;
let mouseY = 0;

// Cache elements
const bg = document.querySelector('.bg');
const tiger = document.querySelector('.tiger');
const plant = document.querySelector('.plant');

// Listen for scroll
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
});

// Listen for mousemove
document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX - window.innerWidth / 2) * 0.01;
  mouseY = (e.clientY - window.innerHeight / 2) * 0.01;
});

// Animation loop
function animate() {
  // Scroll parallax
  if (bg) bg.style.transform = `translateY(${scrollY * 0.3}px)`;
  if (plant) plant.style.transform = `translateY(${scrollY * 0.1}px)`;

  // Combine scroll + mouse for tiger
  const tigerY = scrollY * 0.2 + mouseY;
  const tigerX = mouseX;
  if (tiger) {
    tiger.style.transform = `translate(-50%, ${tigerY}px) translateX(${tigerX}px)`;
  }

  requestAnimationFrame(animate);
}
animate();

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Auto-close on link click
  links.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}
