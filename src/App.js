import "./style.css";
const hamburger = document.querySelector(".hamburger");
const rotulos = document.querySelector(".rotulos");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  rotulos.classList.toggle("active");
});

document.querySelectorAll(".rotulos-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    rotulos.classList.remove("active");
  })
);

function App() {}

export default App;
