import styled from "styled-components";
// use in Counter Component

export const CounterWrap = styled.div`
    display: grid;
    grid-row-gap: ${p => p.theme.space[3]}px;
    max-width: 300px;
    /* margin-bottom: ${p => p.theme.space[3]}px; */
    padding: 10px 8px;
    border: 1px solid #000;
    border-radius: 4px;

`

export const CounterValue = styled.span`
    font-size: 28px;
    text-align: center;
`

export const ButtonWrapp = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`
export const CounterButton = styled.button`
    
    height: 30px;
    width: 140px;
`

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
`;