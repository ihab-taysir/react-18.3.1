// import React, { Component } from "react";
// import "./style.css";
// export default class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   };

//   render() {
//     return (
//       <div className="counter">
//         <h1>Counter</h1>
//         <span>{this.state.count}</span>
//         <button onClick={this.handleIncrement}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//       </div>
//     );
//   }
// }

//_______________________________________________________________________________
//_______________________________________________________________________________
//_______________________________________________________________________________
//_______________________________________________________________________________

// import React, { useReducer, useState } from "react";
// import "./style.css";

// const Counter = () => {
//   const initialState = { count: 0 };

//   const TYPES = {
//     INCREMENT: "increment",
//     DECREMENT: "decrement",
//   };
//   const [amount, setAmount] = useState();

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case TYPES.INCREMENT:
//         return {
//           count: state.count + amount,
//         };
//       case TYPES.DECREMENT:
//         return {
//           count: state.count - amount,
//         };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="counter">
//       <h1>Counter</h1>
//       <button onClick={() => dispatch({ type: TYPES.INCREMENT })}>
//         {TYPES.INCREMENT} with {amount}
//       </button>
//       <span>{state.count}</span>
//       <button onClick={() => dispatch({ type: TYPES.DECREMENT })}>
//         {TYPES.DECREMENT} with {amount}
//       </button>
//       <input type="number" onChange={(e) => setAmount(+e.target.value)} />
//     </div>
//   );
// };

// export default Counter;

//_______________________________________________________________________________
//_______________________________________________________________________________
//_______________________________________________________________________________
//_______________________________________________________________________________



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decremet,
  increment,
  incrementByAmount,
} from "../../redux/slices/counterSlice";

const CounterPage = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>Incremet</button>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(decremet())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment By 5
      </button>
    </div>
  );
};

export default CounterPage;
