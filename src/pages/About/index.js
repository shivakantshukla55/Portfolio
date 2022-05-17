import styled from "styled-components";
import { Typewriter } from "../../components/TypeWriter";

export const About = () => {
  return (
    <StyledAbout>
      <div className="middle">
        <div className="inner">
          <h1>
            Hello, my name is <Typewriter />
          </h1>
          <p>I am a JavaScript Developer</p>
        </div>
      </div>
    </StyledAbout>
  );
};

//style
const StyledAbout = styled.div`
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .middle {
    display: table-cell;
    vertical-align: middle;
  }

  .inner {
    text-align: center;
  }

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
