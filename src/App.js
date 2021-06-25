import { NumberButton, OperatorButton } from "./components/buttons"
import Screen from "./components/Screen"
import React, {useState} from "react"


const calculate = (left, operationStr, right) => {
    switch (operationStr) {
      case "x":
        return left * right;
      case "-":
        return left - right;
      case "÷":
        return left / right;
      case "+":
        return left + right;
    }
  }



function App() {
  const [leftVal, setLeftVal] = useState("0")
  const [operator, setOperator] = useState("")
  const [rightVal, setRightVal] = useState("")

  const appendNumber = (num) => {
    const setter = operator ? setRightVal : setLeftVal;
    setter(previousValue => previousValue === "0" ? num : `${previousValue}${num}`)
   
  }

  const operatorClickHandler = (operator) => () => {
    if (rightVal) {
      doEquals();
    }
  
    setOperator(operator)
  }

  const clearAll = () =>{
    setOperator("")
    setRightVal("");
    setLeftVal("0");    
  }
 
  const removeLastCharacter = (previousValue) => 
    previousValue.substring(0, previousValue.length-1)
    
  const backSpace = () => {
    if (rightVal) {
      setRightVal(removeLastCharacter)
    } else if (operator) {
      setOperator("")
    } else if (leftVal.length > 1) {
      setLeftVal(removeLastCharacter)
    } else {
      setLeftVal("0");
    }
  }

  const doEquals = () => {
    if (leftVal&& rightVal && operator) {
      const left = parseFloat(leftVal);
      const right = parseFloat(rightVal);
      setLeftVal (calculate(left, operator, right));
      setOperator ("");
      setRightVal ("");
    } else {
      alert("calculation incomplete");
    }
  }


  return <div className="calculator-grid">
     <Screen leftVal={leftVal} operator={operator} rightVal={rightVal}/>
     <OperatorButton label="AC" spanTwo onClick={clearAll} />
     <OperatorButton label="DEL"  onClick={backSpace} />  
     <OperatorButton label="÷"onClick={operatorClickHandler("÷")}/> 
     {[1,2,3].map(num => <NumberButton key={num} value={num} appendNumber={appendNumber}/>)}
      <OperatorButton label="x"onClick={operatorClickHandler("x")}/>  
     {[4,5,6].map(num => <NumberButton key={num} value={num} appendNumber={appendNumber}/>)}
     <OperatorButton label="+" onClick={operatorClickHandler("+")}/>
     {[7,8,9].map(num => <NumberButton key={num} value={num} appendNumber={appendNumber}/>)}
      <OperatorButton label="-" onClick={operatorClickHandler("-")}/>
      <OperatorButton label="."onClick={operatorClickHandler(".")}/>
     <NumberButton value={0} appendNumber={appendNumber}/>
      <OperatorButton label="=" onClick={doEquals} spanTwo/>


    
  </div>;
}

export default App;
