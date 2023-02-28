import {useState, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("Always run all the time!");
  useEffect(() => {
    console.log("run once time!");
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5)
      console.log("search for ", keyword);
  }, [keyword]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
