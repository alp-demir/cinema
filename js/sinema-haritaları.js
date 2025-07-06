document.getElementById("btnsecond").addEventListener("click", function () {
    document.getElementById("hamburgerMenu").click();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
function upgradeHeadingForSmallScreens() {
    if (window.innerWidth <= 600) { 
        const oldHeading = document.getElementById("heading");
        if (oldHeading && oldHeading.tagName === "H2") {
            const newHeading = document.createElement("h1");
            newHeading.innerHTML = oldHeading.innerHTML;

            for (const attr of oldHeading.attributes) {
                newHeading.setAttribute(attr.name, attr.value);
            }

            oldHeading.parentNode.replaceChild(newHeading, oldHeading);
        }
    }
}

window.addEventListener("DOMContentLoaded", upgradeHeadingForSmallScreens);

window.addEventListener("resize", upgradeHeadingForSmallScreens);

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("#searchbox input[type='search']");

  if (searchInput) {
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const city = searchInput.value.trim().toLowerCase();

        if (city) {
          window.location.href = `salonlar.html?city=${encodeURIComponent(city)}`;
        }

      }
    });
  }
});
const observer = new IntersectionObserver((entries, observer) => {
  let delay = 0;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("fade-in-up");
      }, delay);
      delay += 150; // Her öğe 150ms gecikmeli gelir
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('#footer h4, #footer h5, #footer .nav-link, #footer form, #footer i, #footer p, #footer h6')
  .forEach(el => observer.observe(el));


