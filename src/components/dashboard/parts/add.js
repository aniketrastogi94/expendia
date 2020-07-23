import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    };

  return (
    <>
      <h5>Add new transaction</h5>
      <form onSubmit={onSubmit}>
        {/* <label htmlFor="text">Text</label> */}
        <input
          className="input"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter text..."
        />
        <br />
        <div>
          <div>
            <span htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </span>
          </div>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn pink lighten-1 z-depth-0 btn1">Add transaction</button>
      </form>
    </>
  );
};
export default AddTransaction;
