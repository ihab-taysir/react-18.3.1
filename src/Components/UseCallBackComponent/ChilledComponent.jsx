import { memo } from "react";

const ChilledComponent = ({ increment }) => {
  const random = () => {
    return Math.round(Math.random() * 1000);
  };

  return <button onClick={increment}>ChilledComponent {random()}</button>;
};

export default memo(ChilledComponent);
