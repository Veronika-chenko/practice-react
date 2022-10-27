import styled from 'styled-components';

const SyledButton = styled.button`
  margin: ${p => p.theme.space[0]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.small};
  color: ${p => p.theme.colors.black};
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.secondaryBg};

  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    color: ${p => p.theme.colors.textLight};
    background-color: ${p => p.theme.colors.accentBg};
  }
`;

export const Button = ({ type = 'button', disabled = false, children }) => {
  return (
    <SyledButton type={type} disabled={disabled}>
      {children}
    </SyledButton>
  );
};
