import styled from "styled-components";

const StyledProjects = styled.div`
    padding: 10px;

    div {
        border-left: 5px solid #4f1c4c;
        padding: 10px;
    }
`;

export default function Projects() {
    return(
        <StyledProjects>
        <h3>Projects</h3> 

        <h4>College Kitchen</h4>
            <div>
                <a href="https://github.com/gwenstew/CS411-Project">Github</a>
                <p>
                    Web app to help college students find recipes from their ingredients!
                </p>                
            </div>

        <h4>Research on Collaborative Filtering</h4>
            <div>
                <a href="https://colab.research.google.com/drive/1QjhyYF_5ORUrrMfX0Z0YQwhie3GI1PC4?usp=sharing">Google Colab</a>
            </div>

        </StyledProjects>
    )
}
