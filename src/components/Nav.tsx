
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    font-family: Georgia,Times,Times New Roman,serif; 
    font-weight: bold;
    background-color: #dc7646;
    color: #ffc7c7;
    border-radius: 20px;
`;

export default function Nav(){
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to={'./'}>Home</Link>
                </li>
                <li>
                    <Link to={'./Education'}>Education</Link>
                </li>
                <li>
                    <Link to={'./Work'}>Work</Link>
                </li>
                <li>
                    <Link to={'./Projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'./Certifications'}>Classes & Skills</Link>
                </li>
                <li>
                    <Link to={'./References'}>References</Link>
                </li>
            </ul>
        </StyledNav>
    )

}
