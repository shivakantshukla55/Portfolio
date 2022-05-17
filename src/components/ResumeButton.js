import styled from "styled-components";
import { resumeLink } from "../constants/ResumeLink";

export const ResumeButton = () => {
  return (
    <Button href={resumeLink} target="_blank">
      Resume
    </Button>
  );
};

//style
const Button = styled.a`
  padding: 7px 14px;
  background-color: ${(props) => props.theme.subtitle || "red"};
  color: ${(props) => props.theme.title || "red"};
  border: 2px solid ${(props) => props.theme.title || "red"};
  border-radius: 2px;
  font-size: 18px;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
`;
