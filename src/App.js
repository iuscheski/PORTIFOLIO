import "./App.css";
const hamburger = document.querySelector(".hamburger");
const rotulos = document.querySelector(".rotulos");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  rotulos.classList.toggle("active");
});

function App() {
  return (
    <div className="App">
      <h1> Hello </h1>{" "}
    </div>
  );
}

export default App;
