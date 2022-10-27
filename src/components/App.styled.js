import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
gap: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[4]}px;
`
export const StyledLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.preBold};
  text-decoration: none;
  color: ${p => p.theme.colors.textDark};
  &.active {
    color: ${p => p.theme.colors.accent};
  }
`