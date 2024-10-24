import styled from "styled-components";

const StyledHeader = styled.header`
    font-family: Georgia,Times,Times New Roman,serif;
    position: relative;
    background-color: #4f1c4c;
    font-size: calc(12px + 0.5vw);
    color: #ffc7c7;
    border-radius: 20px;
    padding: 20px;

    @media screen and (max-width: 750px) {
        text-align: center;
        padding: 10px;
    }
    @media screen and (min-width: 750px) {
        text-align: left;
        margin-bottom: 20px;
    }
`;


export function Header(){
    return(
        <StyledHeader>
            <h1>Gweneth Stewart</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}
