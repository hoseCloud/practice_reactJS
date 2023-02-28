import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [index, setIndex] = useState("0");
  const [amount, setAmount] = useState(0);
  const [coinValue, setCoinValue] = useState(1);

  const onIndexChange = (event) => {
    setIndex(event.target.value);
  };
  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const onCoinChange = (event) => {
    setCoinValue(event.target.value);
  };
  const Input = () => {
    return (
      <div>
        <select value={index} onChange={onIndexChange}>
          <option value="0">dollar to coin</option>
          <option value="1">coin to dollar</option>
        </select>
        <br />
        <label htmlFor="dollar">dollar </label>
        <input
          id="dollar"
          value={index === "0" ? amount : amount * coinValue}
          type="number"
          placeholder="dollar"
          onChange={onAmountChange}
          disabled={index === "0" ? false : true}
        ></input>
        <br />
        <label htmlFor="coin ">coin </label>
        <input
          id="coin"
          value={index === "0" ? amount * coinValue : amount}
          type="number"
          placeholder="coin"
          onChange={onAmountChange}
          disabled={index === "0" ? true : false}
        ></input>
      </div>
    );
  };
  const Select = () => {
    return (
      <div>
        <select value={coinValue} onChange={onCoinChange}>
          <option key="0" value="1">
            Select coin
          </option>
          {coins.map((value) => (
            <option key={value.id} value={value.quotes.USD.price}>
              {value.name} ({value.symbol}) : ${value.quotes.USD.price} USD
            </option>
          ))}
        </select>
      </div>
    );
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <Input />
          <Select />
        </div>
      )}
    </div>
  );
}

export default App;
