import styled from "styled-components";

const StyledReferences = styled.div`
    padding: 20px;
`;
const StyledTable = styled.table`
    border-collapse: collapse;

    th,td {
        border: 2px solid #4f1c4c;
        padding: 15px;
        text-align: center;
    }
`;

export default function References() {
    return (
        <StyledReferences>
            <h3>References</h3>
            <h4>Professional</h4>
            <StyledTable>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Contact</th>
                </tr>

                <tr>
                    <td>Brett Sizemore</td>
                    <td> Current Boss</td>
                    <td>(610)-789-1889</td>
                </tr>
            </StyledTable>
            <h4>Academic</h4>
            <StyledTable>
                <tr>
                    <th>Name</th>
                    <th>Relation</th>
                    <th>Contact</th>
                </tr>

                <tr>
                    <td>Derek Briand</td>
                    <td>Academic Advisor</td>
                    <td>dbriand@bu.edu</td>
                </tr>
            </StyledTable>
        </StyledReferences>
    )
}
