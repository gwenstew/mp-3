import styled from "styled-components";

//style iframe with media queries
const StyledDocs = styled.div`
    padding: 10px;

    @media screen and (max-width: 750px) {
        iframe {
            width: 100%;
            height: 70vh;
        }
    }
    
    @media screen and (min-width: 750px) {
        iframe {
            width: 60%;
            height: 100vh;
        }
    }
`;
export default function Documents() {
    return (
        <StyledDocs>
            <h3>Documents</h3>
            <h4> Resume </h4>
            <iframe
                src="docs/Gweneth_Stewart_Resume_spring2024.pdf"
                title="Gweneth's Full Resume"
            ></iframe>
        </StyledDocs>
    )
}
