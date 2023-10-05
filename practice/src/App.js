import logo from './logo.svg';
import './App.css';
import HtmlTag from "./components/htmlTag"
import { useDispatch, useSelector } from 'react-redux';
import {submitForm} from "./redux/Actions"
const App=()=> {
  const state=useSelector(state=>state)
  const dispatch=useDispatch()
  console.log("keshav",state.submitForm)

  const onClickButton=()=>{
    dispatch(submitForm())
  }
  return (
    <div className="App">
      <HtmlTag/>
      <button onClick={onClickButton}>click me for action dispatch</button>
    </div>
  );
}

export default App;
