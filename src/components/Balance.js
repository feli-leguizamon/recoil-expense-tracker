import React from "react";
import { useRecoilValue } from "recoil";

import { balanceState } from "../recoil/selectors";

const Balance = () => {
  const balance = useRecoilValue(balanceState);

  return (
    <>
      <h4>Your balance</h4>
      <h5>{balance}</h5>
    </>
  );
};

export default Balance;
