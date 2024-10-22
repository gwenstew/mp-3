import styled from "styled-components";

const StyledWork= styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const StyledWorkUl = styled.ul`
    list-style: none;
    border-left: 5px solid #4f1c4c;
`;

export default function Work() {
    return(
        <StyledWork>
            <h3>Work Experience</h3>
            <h4>Server</h4>
            <p>Barnaby's | Jul. 2021-Present</p>
            <StyledWorkUl>
                <li>Cooperating with kitchen and bar staff to provide exceptional service for patrons</li>
                <li>Cleaning and maintaining workstations for food safety.</li>
                <li>Mastering point-of-service computer system to quickly and accurately handle transactions.</li>
                <li>In depth knowledge of menu with weekly alterations.</li>
            </StyledWorkUl>
            <h4>Counter Staff</h4>
            <p>Tatte Bakery & Cafe | Apr. 2023-Sept. 2023</p>
            <StyledWorkUl>
                <li>Provided customer service through listening and addressing customer inquiries.</li>
                <li>Collectively working with kitchen staff and fellow team members to ensure customer satisfaction.</li>
                <li>Cleaning and maintaining the dining room and kitchen.</li>
                <li>Attending to daily orders and organization of inventory.</li>
            </StyledWorkUl>

        </StyledWork>
    )
}
