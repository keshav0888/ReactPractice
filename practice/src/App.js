import logo from "./logo.svg";
import "./App.css";
import HtmlTag from "./components/htmlTag";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "./redux/Actions";
import { useState,useEffect } from "react";
const App = () => {
  const state = useSelector((state) => state);
  const [count,setCount]=useState(0)
  const dispatch = useDispatch();
  console.log("keshav", state.submitForm);

  useEffect(() => {
    // Use useEffect for setting up intervals
    const intervalId = setInterval(() => {
      console.log("This code runs repeatedly at the specified interval.");
      setCount((prevCount) => prevCount + 1); // Use functional update for state updates
    }, 1000); // Executes every 1 second

    // To stop the interval after a certain condition
    if (count === 5) {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
    
  });
  const onClickButton = () => {
    // Executes after 2 seconds
    dispatch(submitForm());
  };
  return (
    <div className="App">
      <HtmlTag />
      <button onClick={onClickButton}>click me for action dispatch</button>
    </div>
  );
};

export default App;
