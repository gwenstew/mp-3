import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledCalculator= styled.div`
    display:flex;
    flex-direction: column;
    font-size: calc(16px + 0.5vw);
    text-align: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    background-color:#a45c5c;
`;

const StyledOutput=styled.div`
    width: 80px;
    height: 80px;
    border: 5px solid #4f1c4c;;
    background-color: white;
    margin: 10px auto;
    align-items: center;
    font-weight: bold;
    font-size: calc(16px + 0.5vw);
`;

const StyledInput= styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    input {
        margin: 20px;
        font-weight: bold;
        font-size: calc(16px + 0.5vw);
        color: #4f1c4c;
        width: 80px;
        height: 80px;
        margin: 10px;
        border: 5px solid #4f1c4c;;
        text-align: center;    
    }

`;

const StyledButtons = styled.div`
    padding: 20px
    display:flex;
    flex-direction: row;
    button{
        font-weight: bold;
        font-size: calc(16px + 0.5vw);
        margin: 5px; 
        padding: 10px;
        width: 70px;
        height: 70px; 
        border-radius: 50%; 
        border: 5px solid #4f1c4c;
        background-color: #ffc7c7;
        color: #4f1c4c;

        text-align: center;
    }
`

function Calculator() {
    const [firstNum, setFirstNum] = useState('');
    const [secNum, setSecNum] = useState('');
    const [result, setResult] = useState(0);
    const [resColor, setResColor] = useState('green');

    const checkNeg = (newResult: number) => {
        if (newResult < 0) {
            setResColor('red');
        } else {
            setResColor('green');
        }

    }
    const handleAddition = () => {
        const newResult = Number(firstNum) + Number(secNum);
        setResult(newResult);
        checkNeg(newResult);
        //check negative
    }
    const handleSubtraction = () => {
        const newResult = Number(firstNum) - Number(secNum);
        setResult(newResult);
        checkNeg(newResult);
        
    }
    const handleDivision = () => {
        const newResult = Number(firstNum) / Number(secNum);
        setResult(newResult);
        checkNeg(newResult);
        
    }
    const handleMultiplication = () => {
        const newResult = Number(firstNum) * Number(secNum);
        setResult(newResult)
        checkNeg(newResult);
    }
    const handlePower = () => {
        
    }
    const clear = () => {
        setFirstNum('');
        setSecNum('');
        setResult(0);
    }
    return(
        <StyledCalculator>
            <h3>React Calculator</h3>
            <StyledInput>
                <input value={firstNum} onChange={e => setFirstNum(e.target.value)}/>
                <input value={secNum} onChange={e => setSecNum(e.target.value)}/>
            </StyledInput>
            <StyledButtons>
                <button className="add" onClick={handleAddition}>+</button>
                <button className="add" onClick={handleSubtraction}>-</button>
                <button className="add" onClick={handleMultiplication}>*</button>
                <button className="add" onClick={handleDivision}>/</button>
                <button className="add" onClick={handlePower}>**</button>
                <button className="add" onClick={clear}>clear</button>
            </StyledButtons>
            <StyledOutput>
                Result: {result}
            </StyledOutput>
        </StyledCalculator>
    )
}

export default Calculator;
