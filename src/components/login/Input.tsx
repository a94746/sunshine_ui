import styled from "styled-components";
import {ChangeEventHandler} from "react";

const StyledInput = styled.input`
    width: 15rem;
    height: 2.5rem;
    padding-left: 0.8rem;
    margin: 1rem;
    border: 2px solid ${p => p.theme.colors.accent1};
    border-radius: 1rem;
    outline: none;
    background-color: ${p => p.theme.colors.backgroundSecondary};
    color: ${p => p.theme.colors.textOnSecondary};

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.backgroundActiveSecondary};
        border-color: ${p => p.theme.colors.accent2};
    }
`

export function InputText(props: InputProps)  {
    return (
        <StyledInput type="text" {...props} />
    )
}

export function InputPassword(props: InputProps) {
    return (
        <StyledInput type="password" {...props} />
    )
}

interface InputProps {
    onChange: ChangeEventHandler,
    value: string,
    placeholder?: string
}