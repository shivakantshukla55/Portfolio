import { useEffect, useState } from "react";
import styled from "styled-components";

export function* textGenerator(sentence) {
  let text = "";

  const sentenceAsCharArray = sentence.split("");

  for (const letter of sentenceAsCharArray) {
    text += letter;
    yield text;
  }
}

export function Typewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    const generator = textGenerator("Shivakant Shukla");

    const interval = window.setInterval(() => {
      const { value, done } = generator.next();

      if (done) {
        window.clearInterval(interval);
      } else {
        setText(value);
      }
    }, 100);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <StyledContainer>
      <span className="typewriter typewriter-blink">{text}</span>
    </StyledContainer>
  );
}

//style
const StyledContainer = styled.div`
  display: inline-block;
  width: 290px;

  .typewriter {
    font-family: inherit;
    font-size: 32px;
    display: inline-block;
    font-style: italic;
    font-weight: 900;
    border-right: 2px solid ${(props) => props.theme.title || "red"};
  }

  .typewriter-blink {
    animation: blink 0.75s step-start infinite;
  }

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${(props) => props.theme.title || "red"};
    }
  }
`;
