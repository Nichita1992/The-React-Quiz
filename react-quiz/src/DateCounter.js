import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "increment":
      /*spread the state object and overwrite the count value*/
      return { ...state, count: state.count + 1 * state.step };
    case "decrement":
      return { ...state, count: state.count - 1 * state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    /*in this case we can update the states at the same time*/
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown action");
  }

  /*  if (action.type === "increment") return state + action.payload;
  if (action.type === "decrement") return state - action.payload;
  if (action.type === "setCount") return action.payload; */
}

function DateCounter() {
  /* const [step, setStep] = useState(1); */
  /* const [count, setCount] = useState(0); */

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStep(e) {
    /* setStep(Number(e.target.value)); */
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }

  function handleCount(e) {
    /* setCount(Number(e.target.value)); */
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  function handleIncrement() {
    /* setCount(count + 1 * step); */
    dispatch({ type: "increment", payload: 1 * step });
  }

  function handleDecrement() {
    /* setCount(count - 1 * step); */
    dispatch({ type: "decrement", payload: 1 * step });
  }

  function handleReset() {
    dispatch({ type: "reset" });
    /* setCount(0); */
    /* setStep(1); */
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          value={step}
          min="1"
          max="10"
          onChange={handleStep}
        ></input>
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <input value={count} onChange={handleCount}></input>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <p></p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default DateCounter;
