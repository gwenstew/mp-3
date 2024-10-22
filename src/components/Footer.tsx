import styled from "styled-components";

const StyledFooter= styled.footer`
    font-family: Georgia,Times,Times New Roman,serif; 
    background-color: #a45c5c;
    color: #ffc7c7;
    position: relative;
    border-radius: 20px;
    padding: 5px;
    margin-top: 20px;
`;

export function Footer() {
    return(
        <StyledFooter>
            <p>All rights reserved by Gweneth Stewart <a href="">Credits</a>&#169;</p>
        </StyledFooter>
    );
}
