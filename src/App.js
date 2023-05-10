import "./style.css";
const hamburger = document.querySelector(".hamburger");
const rotulos = document.querySelector(".rotulos");
const enhamburger = document.querySelector(".en-hamburger");
const enrotulos = document.querySelector(".en-rotulos");
const frhamburger = document.querySelector(".fr-hamburger");
const frrotulos = document.querySelector(".fr-rotulos");

document.addEventListener("touchstart", function () {}, true);
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  rotulos.classList.toggle("active");
});
document.addEventListener("touchstart", function () {}, true);
enhamburger.addEventListener("click", () => {
  enhamburger.classList.toggle("active");
  enrotulos.classList.toggle("active");
});
document.addEventListener("touchstart", function () {}, true);
frhamburger.addEventListener("click", () => {
  frhamburger.classList.toggle("active");
  frrotulos.classList.toggle("active");
});
function App() {}

export default App;
