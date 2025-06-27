document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.cinema-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
      } else {
        entry.target.classList.remove('visible'); 
      }
    });
  }, { threshold: 0.1 }); 

  cards.forEach(card => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("citySearch");
  const cards = document.querySelectorAll(".cinema-card");

  const params = new URLSearchParams(window.location.search);
  const filterStars = parseInt(params.get("stars"));

  if (filterStars) {
    cards.forEach(card => {
      const stars = parseInt(card.dataset.stars);
      card.style.display = stars === filterStars ? "block" : "none";
    });
  }  
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); 
      const query = this.value.trim().toLowerCase();

      cards.forEach(card => {
        const city = card.dataset.city.toLowerCase();
        const stars = parseInt(card.dataset.stars);

        const matchCity = city.includes(query);
        const matchStars = !filterStars || stars === filterStars;

        card.style.display = matchCity && matchStars ? "block" : "none";
      });
    }
  });
});


