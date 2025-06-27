function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in-up');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) { 
      el.classList.add('visible');
    }
  });
}
const input = document.querySelector('input[type="text"]');

input.addEventListener('input', () => {
  let val = input.value;
  if(val.length > 0){
    input.value = val.charAt(0).toUpperCase() + val.slice(1);
  }
});


window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, null, '#contact');
    });
  });
});
 document.getElementById("btn-site").addEventListener("click", function () {
    window.location.href = "sinema-haritaları.html";
  });

  document.getElementById("btn-youtube").addEventListener("click", function () {
    window.location.href = "https://youtube.com/@filmograf";
  });
