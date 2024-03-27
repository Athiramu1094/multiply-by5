import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);

  function count() {
    setNumber(number * 5);
  }
  return (
    <>
      <header></header>
      <main>
        <h1>{number}</h1>
        <span className="multiply">x</span>
        <span>5</span>
        <button onClick={count}>Multiply</button>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
