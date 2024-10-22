import styled from "styled-components";

const StyledEducation = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    div {
        padding: 10px;
        border-left: 5px solid #4f1c4c;
    }
`;

export default function Education() {
    return(
        <>            
                
        <StyledEducation>
            <h3>Education</h3>
            <div>
                <p><b>B.A in Computer Science <ins><i>Boston University MA</i></ins></b></p>
                <p><i>Expected graduation May 2025</i></p>
                <p>INSERT PHOTO HERE</p>                
            </div>

        </StyledEducation>
        
        </>

    )
}
