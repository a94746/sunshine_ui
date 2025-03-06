import styled from "styled-components";
import {border} from "@/common/Styles.jsx";

const StyledButton = styled.button`
    padding: 0.3rem 1rem;
    margin: 1rem;
    ${border};
`

const StyledSecondaryButton = styled(StyledButton)`
    background-color: ${p => p.theme.colors.backgroundSecondary};
    color: ${p => p.theme.colors.textOnSecondary};

    &:hover {
        background-color: ${p => p.theme.colors.backgroundActiveSecondary};
        border-color: ${p => p.theme.colors.accent2};
    }
`

const StyledMainButton = styled(StyledButton)`
    background-color: ${p => p.theme.colors.backgroundTertiary};
    color: ${p => p.theme.colors.textOnTertiary};

    &:hover {
        background-color: ${p => p.theme.colors.backgroundActiveTertiary};
        border-color: ${p => p.theme.colors.accent2};
    }
`

export default function ButtonMain({children, onClick}) {
    return (
        <StyledMainButton onClick={onClick}>
            {children}
        </StyledMainButton>
    )
}

export function ButtonSecondary({children, onClick}) {
    return (
        <StyledSecondaryButton onClick={onClick}>
            {children}
        </StyledSecondaryButton>
    )
}