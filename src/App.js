import "./style.css";
const hamburger = document.querySelector(".hamburger");
const rotulos = document.querySelector(".rotulos");

document.addEventListener("touchstart", function () {}, true);
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  rotulos.classList.toggle("active");
});
function App() {}

export default App;
