import styled from "styled-components";

const StyledSkills = styled.div`
    padding: 10px;

    ul {
        border-left: 5px solid #4f1c4c;
        list-style: none;
    }
        
    ul li {
        margin: 5px;
    }
`;

export default function Skills() {
    return (
        <StyledSkills>
        <h3>Coursework and Skills</h3>

        <h4>Relavant Coursework</h4>
            <ul>
                <li><strong>Programming:</strong> Data Structures, Software Engineering</li>
                <li><strong>Computer Graphics:</strong> Intro to Computer Graphics, Geometric Algorithms</li>
                <li><strong>Algorithms:</strong> Analysis of Algorithms, Distributed Systems</li>
                <li><strong>Data Science</strong> Foundations of Data Science, Probability in Computing</li>
            </ul>


        <h4>Technical Skills</h4>
            <ul>
                <li><strong>Programming Languages:</strong> Python, Java, C, HTML/CSS, Javascript</li>
                <li><strong>Development:</strong> React, Node.js, Firebase</li>
                <li><strong>Tools:</strong> Git</li>
            </ul>
        </StyledSkills>
    )
}
