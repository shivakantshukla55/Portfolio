import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppRoutes } from "./router";
import { dark, light } from "./constants/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <StyledApp>
          <nav>Nav bar</nav>
          <AppRoutes />
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;

//style

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  nav {
    text-align: right;
  }
`;
