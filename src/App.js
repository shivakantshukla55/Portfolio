import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppRoutes } from "./router";
import { dark, light } from "./constants/theme";
import { Navbar } from "./components/Nav";
import { PageIndicator } from "./components/PageIndicator";
import { STYLE_VAR } from "./constants/cssVariables";

function App() {
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
  height: calc(100vh - ${STYLE_VAR.pageIndicatorHeight});
  width: 100%;
  background-color: ${(props) => props.theme.body};
  nav {
    text-align: right;
  }
`;
