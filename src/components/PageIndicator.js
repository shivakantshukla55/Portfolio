import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import get from "lodash/get";
import { STYLE_VAR } from "../constants/cssVariables";

export const PageIndicator = () => {
  const [indicator, setIndicator] = useState(".Error");

  const location = useLocation();

  useEffect(() => {
    const path = get(location, "pathname", "");
    let tempIndicator = "";
    switch (path) {
      case "/about":
        tempIndicator = "about";
        break;
      case "/work":
        tempIndicator = "work";
        break;
      case "/skills":
        tempIndicator = "skills";
        break;
      case "/connect":
        tempIndicator = "connect";
        break;
      default:
        tempIndicator = "error";
    }
    setIndicator(tempIndicator);
  }, [location]);

  return <Container>.{indicator}</Container>;
};

//style
const Container = styled.div`
  height: ${STYLE_VAR.pageIndicatorHeight};
  width: 100%;
  padding: 0 25px 50px 0;
  text-align: right;
  font-size: 30px;
  background: ${(props) => props.theme.body || "red"};
  color: ${(props) => props.theme.subtitle || "red"};
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
`;
