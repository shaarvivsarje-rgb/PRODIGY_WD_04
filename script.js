const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

/* Initial state */
cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
});
