import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { transactionListState } from "../recoil/atoms";
import { v4 as uuidv4 } from "uuid";

const NewTransaction = () => {
  const [textValue, setTextValue] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionList, setTransactionList] = useRecoilState(
    transactionListState
  );

  const NewTransaction = (e) => {
    e.preventDefault();
    setTransactionList((oldTransactionList) => [
      ...oldTransactionList,
      { id: uuidv4(), amount: +amount, text: textValue },
    ]);
    setAmount(0);
    setTextValue("");
  };

  useEffect(() => {
    localStorage.setItem("TRANSACTION_LIST", JSON.stringify(transactionList));
  }, [transactionList]);

  const handleTextValue = (e) => {
    setTextValue(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div>
          <label htmlFor="text">Description</label>
          <input value={textValue} onChange={handleTextValue} />
        </div>

        <div>
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input value={amount} onChange={handleAmount} />
        </div>
        <button onClick={NewTransaction}>Add transaction</button>
      </form>
    </>
  );
};

export default NewTransaction;
