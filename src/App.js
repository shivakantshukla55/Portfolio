import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppRoutes } from "./router";
import { dark, light } from "./constants/theme";
import { Navbar } from "./components/Nav";
import { PageIndicator } from "./components/PageIndicator";
import { STYLE_VAR } from "./constants/cssVariables";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.add("dark");
  }, []);
  return (
    <>
      <ThemeProvider theme={dark}>
        <StyledApp>
          <Navbar />
          <AppRoutes />
          <PageIndicator />
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;

//style

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.body};
  nav {
    text-align: right;
  }
`;
