import styled from "styled-components";

const StyledHome= styled.div`
    padding: 10px;
`;

const StyledImg = styled.img`
    max-width:30%;
    height: auto;
    display: block;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 20px;
    padding: auto;
    float: left;
`;
export default function Home() {
    return(
        <StyledHome>
            <h3>Home</h3>
            <StyledImg src="/imgs/BizProfPhoto.jpg" alt="Profile Photo"></StyledImg>
            <p>My name is Gweneth Stewart and I am a current senior studying Computer Science at Boston University.
                    I am seeking entry-level opportunities to apply my skills in a collaborative and creative environment.</p>
            <p>To learn more about my skills and how I can add value to your team, explore my portfolio!</p>
        </StyledHome>
    );
}
