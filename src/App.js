import logo from './logo.svg';
import './App.css';
import "./styles.css"
import React,{useState}  from 'react';
// import {useState} from react
function App() {
  const[current,setCurrent]=useState('');
  const[prevoius,setPrevoius]=useState('');
  const[operations,setOperations]=useState('')

  const appendValue=(ele)=>{
    const value = ele.target.getAttribute('data')
    if(value==='.' && current.includes('.')) return
    setCurrent(current+value);
  }
  const deleteHandler=()=>{
    setCurrent(String(current).slice(0,-1))
  }
  const allClear=()=>{
    // setCurrent(String(current.clear()))
    setCurrent("");
    setPrevoius("")
    setOperations("")

  }
  const chooseOperation=(ele)=>{
    if(current==='')return
    if(prevoius!==''){
      let value = compute()
      setPrevoius(value);
    }else{
      setPrevoius(current)
      // laxmi holidays 17 5:30

    }
    setCurrent('')
    setOperations(ele.target.getAttribute('data'))
  }
 const equalHandler=(ele)=>{
    let value = compute();
    if(value===undefined|| value==null)return 
    setCurrent(value)
    setPrevoius('')
    setOperations('')
  }
  const compute=()=>{
    let result;
    let previousNumber = parseFloat(prevoius)
    let currentNumber = parseFloat(current)
    if(isNaN(previousNumber)|| isNaN(currentNumber))return 
    switch(operations){
      case '/':
        result=previousNumber/currentNumber;
        break;
        case '+':
        result=previousNumber+currentNumber;
        break;
        case '-':
        result=previousNumber-currentNumber;
        break;
        case '*':
        result=previousNumber*currentNumber;
        break;
      default: return;
    }
    return result;
  };
  return (
    <div className="calculator-grid">
      <div className="output">

        <div className="previous-operand">{prevoius} {operations}{current}</div>
      </div>
      <button className="span-two" onClick={allClear}>AC</button>
      <button onClick={deleteHandler}>DEL</button>
      <button data={'/'} onClick={chooseOperation}>/</button>
      
      <button data={1} onClick={appendValue}>1</button>
      <button data={2} onClick={appendValue}>2</button>
      <button data={3} onClick={appendValue}>3</button>
      <button data={'*'} onClick={chooseOperation}>*</button>
      <button data={4} onClick={appendValue}>4</button>
      <button data={5} onClick={appendValue}>5</button>
      <button data={6} onClick={appendValue}>6</button>
      <button data={'+'} onClick={chooseOperation}>+</button>
      <button data={7} onClick={appendValue}>7</button>
      <button data={8} onClick={appendValue}>8</button>
      <button data={9} onClick={appendValue}>9</button>
      <button data={'-'} onClick={chooseOperation}>-</button>
      <button data={'.'} onClick={appendValue}>.</button>
      <button data={0} onClick={appendValue}>0</button>
      <button className="span-two" onClick={equalHandler}>=</button>
    </div>
  );
}
export default App;
