import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
gap: 8px;
margin-bottom: 16px;
`
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: orange;
  }
`