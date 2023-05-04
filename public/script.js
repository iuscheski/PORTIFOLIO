const hamburger = document.querySelector(".hamburger");
const rotulos = document.querySelector(".rotulos");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  rotulos.classList.toggle("active");
});
