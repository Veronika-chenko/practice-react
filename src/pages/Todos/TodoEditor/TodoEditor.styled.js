import styled from "styled-components";

export const TodoForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 8px;
`

export const TodoTextbox = styled.textarea`
    height: 50px;
    resize: none;
`

export const TodoFormButton = styled.button`
    max-width: 100px;
`