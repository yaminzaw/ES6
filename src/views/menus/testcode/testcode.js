import React,{useState} from "react";
import Welcome from "./Welcome";
import Minus from "./Minus";
import Multiple from "./Multiple";
import Divide from "./Divide";
import './styleTest.css';

const TestCode = () =>{
    const [numOne,setNumOne] = useState("");
    const [numTwo,setNumTwo] = useState("");
    const [result,setResult] = useState("");

    const handleChangeOne=(e)=>{
        setNumOne(e.target.value);
    }
    const handleChangeTwo=(e)=>{
        setNumTwo(e.target.value);
    }
    
    const calculateFun=()=>{
        let res = parseInt(numOne)+parseInt(numTwo);
        setResult(res);
    }

    const [minusOne,setMinusOne] = useState("");
    const [minusTwo,setMinusTwo] = useState("");
    const [minusRes,setMinusRes] = useState("");

    const handleChangeMinusOne=(e)=>{
        setMinusOne(e.target.value);
    }
    const handleChangeMinusTwo=(e)=>{
        setMinusTwo(e.target.value);
    }
    
    const calculateMinusFun=()=>{
        let res = parseInt(minusOne)-parseInt(minusTwo);
        setMinusRes(res);
    }

    const [multipleOne,setMultipleOne] = useState("");
    const [multipleTwo,setMultipleTwo] = useState("");
    const [multipleRes,setMultipleRes] = useState("");

    const handleChangeMultipleOne=(e)=>{
        setMultipleOne(e.target.value);
    }
    const handleChangeMultipleTwo=(e)=>{
        setMultipleTwo(e.target.value);
    }
    
    const calculateMultipleFun=()=>{
        let res = parseInt(multipleOne)*parseInt(multipleTwo);
        setMultipleRes(res);
    }

    const [divideOne,setDivideOne] = useState("");
    const [divideTwo,setDivideTwo] = useState("");
    const [divideRes,setDivideRes] = useState("");

    const handleChangeDivideOne=(e)=>{
        setDivideOne(e.target.value);
    }
    const handleChangeDivideTwo=(e)=>{
        setDivideTwo(e.target.value);
    }
    
    const calculateDivideFun=()=>{
        let res = parseInt(divideOne)/parseInt(divideTwo);
        setDivideRes(res);
    }


    return(<>
     
        <Welcome
            numOne={numOne} numTwo={numTwo}  result={result}
            handleChangeOne={handleChangeOne} 
            handleChangeTwo={handleChangeTwo} 
            calculateFun={calculateFun}
        />
        <Minus  minusOne={minusOne} minusTwo={minusTwo}  minusRes={minusRes}  
            handleChangeMinusOne={handleChangeMinusOne} 
            handleChangeMinusTwo={handleChangeMinusTwo} 
            calculateMinusFun={calculateMinusFun} />
        <Multiple   multipleOne={multipleOne} multipleTwo={multipleTwo} multipleRes={multipleRes} 
            handleChangeMultipleOne={handleChangeMultipleOne} 
            handleChangeMultipleTwo={handleChangeMultipleTwo} 
            calculateMultipleFun={calculateMultipleFun}/>
        <Divide  divideOne={divideOne} divideTwo={divideTwo} divideRes={divideRes}  
            handleChangeDivideOne={handleChangeDivideOne} 
            handleChangeDivideTwo={handleChangeDivideTwo} 
            calculateDivideFun={calculateDivideFun} />
        
    </>)
}

export default TestCode;