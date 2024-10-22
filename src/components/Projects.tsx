import styled from "styled-components";
import Calculator from "./calculator";

const StyledProjects = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 20%;
`;

const StyledEntry = styled.div`
    border-left: 5px solid #4f1c4c;
    padding: 10px;
`;

export default function Projects() {
    return(
        <>
        <StyledProjects>
        <h3>Projects</h3> 
        <h4>College Kitchen</h4>
        <StyledEntry>
            <a href="https://github.com/gwenstew/CS411-Project">Github</a>
            <p>
                Web app to help college students find recipes from their ingredients!
            </p>                

        </StyledEntry>
        <h4>Research on Collaborative Filtering</h4>
            <StyledEntry>
                <a href="https://colab.research.google.com/drive/1QjhyYF_5ORUrrMfX0Z0YQwhie3GI1PC4?usp=sharing">Google Colab</a>
            </StyledEntry>

        </StyledProjects>
        <Calculator/>
        </>
    )
}
