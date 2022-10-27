import styled from "styled-components";

export const TodoInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const TodoItemsWrap = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const TodoItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 250px;
    padding: 4px;
    border: 1px solid black;
`
export const TodoInput = styled.input`
    display: inline-block;
    width: 16px;
    height: 16px;
`