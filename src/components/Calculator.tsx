import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledCalculator= styled.div`
    font-size: calc(16px + 0.5vw);
    text-align: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    background-color:#a45c5c;
`;

function Calculator() {
    const [firstNum, setFirstNum] = useState(0);
    const [secNum, setSecNum] = useState(0);
    const [result, setResult] = useState(0);
    const [resColor, setResColor] = useState('#4f1c4c');

    const handleAddition = () => {

    }
    const handleSubtraction = () => {
        
    }
    const handleDivision = () => {
        
    }
    const handleMultiplication = () => {
        
    }
    const handlePower = () => {
        
    }
    const clear = () => {
        
    }
    return(
        <>
        </>
    )
}

export default Calculator;
