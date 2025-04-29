import { useDeferredValue, useMemo, useState } from "react";

export const UseMemoComponent = () => {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(0);

  const myDeferredValue = useDeferredValue(start);

  const expensiveOperation = () => {
    console.log("test");
    let sum = 0;
    // for (let i = +myDeferredValue; i <= 9999; i++) {
    //   for (let j = 0; j <= 9999; j++) {
    //     sum += i + j;
    //   }
    // }s
    return sum;
  };

  const myOperation = useMemo(expensiveOperation, [myDeferredValue]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <p>{counter}</p>
      <input
        type="number"
        onChange={(e) => setStart(e.target.value)}
        value={start}
      />
      <p>sum: {myOperation}</p>
    </div>
  );
};
