import styled from "styled-components";
import { Typewriter } from "../../components/TypeWriter";

export const About = () => {
  return (
    <StyledAbout>
      <div>
        <h1>
          Hello, my name is <Typewriter />
        </h1>
        <p>I am a JavaScript Developer</p>
      </div>
    </StyledAbout>
  );
};

//style
const StyledAbout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    display: inline-block;
    color: ${(props) => props.theme.title || "red"};
  }

  p {
    display: block;
    text-align: center;
    color: ${(props) => props.theme.subtitle || "red"};
  }
`;
