import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Chart from "./components/ChartEx.tsx";
import PiechartEx from "./components/PiechartEx.tsx";
import StackedBarChart from "./components/StackedBarchart.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // // Pie chart
  // state = {
  //   activeIndex: 0,
  // };

  // onPieEnter = (_, index) => {
  //   this.setState({
  //     activeIndex: index,
  //   });
  // };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h2>Chart Example</h2>
        <Chart />
        <h1>Pie Chart Example</h1>
      </div>
      <div className="piechart-container">
        <PiechartEx />
      </div>
      <StackedBarChart data={data} />
    </>
  );
}

export default App;
