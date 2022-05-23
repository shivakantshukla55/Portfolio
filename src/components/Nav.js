import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <Container>
      <Menu right>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/work">Work</StyledLink>
        <StyledLink to="/skills">Skills</StyledLink>
        <StyledLink to="/connect">Connect</StyledLink>
      </Menu>
    </Container>
  );
};

//style
const Container = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    display: inline-block;
    right: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${(props) => props.theme.subtitle || "red"};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${(props) => props.theme.title || "red"};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${(props) => props.theme.title || "red"};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${(props) => props.theme.subtitle || "red"};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.body};
  margin-bottom: 10px;
`;
