import {useState, useEffect} from "react";

import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("Always run all the time!");
  const iRunOnlyOnce = () => {
    console.log("run once time!");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
