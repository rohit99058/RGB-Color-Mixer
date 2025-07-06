import { useState } from "react";
import "./App.css";

function App() {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [r, setR] = useState(colors && colors.r ? colors.r : 0);
  const [g, setG] = useState(colors && colors.g ? colors.g : 0);
  const [b, setB] = useState(colors && colors.b ? colors.g : 0);

  const save = () => {
    console.log("saved");

    localStorage.setItem("color", JSON.stringify({ r, g, b }));
  };

  return (
    <>
      <h1>RGB color mixer</h1>
      <div
        className="color-box"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      ></div>

      <div className="label-range">
        <label>Red</label>
        <input
          type="range"
          min={0}
          max={255}
          onChange={e => setR(e.target.value)}
          defaultValue={255}
        />
      </div>

      <div className="label-range">
        <label>Green</label>
        <input
          type="range"
          min={0}
          max={255}
          onChange={e => setG(e.target.value)}
          defaultValue={255}
        />
      </div>

      <div className="label-range">
        <label>Blue</label>
        <input
          type="range"
          min={0}
          max={255}
          onChange={e => setB(e.target.value)}
          defaultValue={255}
        />
      </div>

      <br />
      <br />

      <button onClick={save}>Save Color combination</button>
    </>
  );
}

export default App;
