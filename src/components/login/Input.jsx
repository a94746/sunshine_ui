import styled from "styled-components";
import {border} from "@/common/Styles.jsx";

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

export default function InputText({ onChange, value, placeholder }) {
    return (
        <StyledInput type="text" onChange={onChange} value={value} placeholder={placeholder} />
    )
}

export function InputPassword({ onChange, value, placeholder }) {
    return (
        <StyledInput type="password" onChange={onChange} value={value} placeholder={placeholder} />
    )
}