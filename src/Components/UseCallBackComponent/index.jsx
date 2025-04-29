import React, { useCallback, useState } from "react";
import ChilledComponent from "./ChilledComponent";

export const UseCallBackComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const handleIncrement = useCallback(increment, []);

  return (
    <div>
      <ChilledComponent increment={handleIncrement} />
      <div>Counter = {counter}</div>
    </div>
  );
};
