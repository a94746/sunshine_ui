import styled from "styled-components";
import {border} from "@/common/Styles";
import {ChangeEventHandler} from "react";

const StyledInput = styled.input`
    width: 15rem;
    height: 2.5rem;
    padding-left: 0.8rem;
    margin: 1rem;
    ${border};
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