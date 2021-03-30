import React, {useEffect} from "react";
import { useRecoilState } from "recoil";

import Transaction from "./Transaction";
import { transactionListState } from "../recoil/atoms";

const TransactionList = () => {
  const [transactionList, setTransactionList] = useRecoilState(transactionListState);

  useEffect(() => {
    setTransactionList(JSON.parse(localStorage.getItem("TRANSACTION_LIST")))
  }, [setTransactionList])

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactionList.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
