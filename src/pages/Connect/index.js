import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { device } from "../../constants/screenSize";

export const Connect = () => {
  return (
    <StyledConnect>
      <div className="middle">
        <div className="inner">
          <h3>
            Feel free to contact me through the email below, I'd love to chat.
          </h3>
          <div>
            <a className="gmail-link" href="mailto:shivakantshukla55@gmail.com">
              shivakantshukla55@gmail.com
            </a>
          </div>
          <div className="connect-linkedin">
            <a
              href="https://www.linkedin.com/in/shivakant-shukla-sks1995/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </StyledConnect>
  );
};

//style
const StyledConnect = styled.div`
  padding: 10px;
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

  h3 {
    margin-bottom: 12px;
    display: inline-block;
    color: ${(props) => props.theme.subtitle || "red"};
    font-size: 23px;

    @media ${device.tablet} {
      font-size: 16px;
    }
  }

  .gmail-link {
    color: ${(props) => props.theme.title || "red"};
  }

  .connect-linkedin {
    position: absolute;
    z-index: 1;
    left: 13px;
    bottom: 29px;
    svg {
      width: 40px;
      height: 40px;
      fill: ${(props) => props.theme.title || "red"};
    }
  }
`;
