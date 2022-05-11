import styled from "styled-components";

export const About = () => {
  return (
    <StyledAbout>
      <h1>
        Hello, my name is <i>shivakant shukla</i>
      </h1>
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
    color: ${(props) => props.theme.title || "red"};
  }
`;
