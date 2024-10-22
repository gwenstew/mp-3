
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    font-family: Georgia,Times,Times New Roman,serif; 
    font-weight: bold;
    background-color: #dc7646;
    color: #ffc7c7;
    border-radius: 20px;
    margin: 20px 20px;

    ul {
        list-style-type: none;
        padding: 20px;
    }
    ul li a {
        display: block;
        text-align: center;
        text-decoration: none;
        padding: 20px;
        border-radius: 5px;
    }
    
    ul li a:hover {
        color: #4f1c4c;
        background-color: #ffc7c7;
    }

    @media screen and (max-width: 750px) {
        
        ul {
            display: flex;
            flex-direction: row;
            flex-wrap:wrap;
        }
 
    }
    @media screen and (min-width: 750px) {
        width: 30%;
        float: left;
        margin-bottom: 20px;
    
        ul {
            display: flex;
            flex-direction: column;
        }
    }

    font-size: calc(10px + 0.5vw)
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
                    <Link to={'./Skills'}>Classes & Skills</Link>
                </li>
                <li>
                    <Link to={'./References'}>References</Link>
                </li>
                <li>
                    <Link to={'./Documents'}>Documents</Link>
                </li>
            </ul>
        </StyledNav>
    )

}
