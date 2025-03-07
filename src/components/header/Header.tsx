import styled from "styled-components";
import ToggleTheme from "@/components/header/ToggleTheme";

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    padding: 1rem;
    background: ${p => p.theme.colors.backgroundPrimary};
`

export default function Header() {
    return (
        <StyledHeader>
            <ToggleTheme/>
        </StyledHeader>
    )
}