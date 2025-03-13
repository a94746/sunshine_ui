import styled from "styled-components";
import ToggleTheme from "@/components/header/ToggleTheme";
import NavigationBar from "@/components/header/NavigationBar";
import {useLocation} from "react-router-dom";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 5rem;
    text-align: center;
    padding: 0;
    border-right: 2px solid ${p => p.theme.colors.accent1};
    background: ${p => p.theme.colors.backgroundSecondary};
    color: ${p => p.theme.colors.textOnSecondary};
`

export default function Header() {
    const {pathname} = useLocation();
    return (
        <StyledHeader>
            {pathname != "/login"
                && (<NavigationBar/>)}
            <ToggleTheme/>
        </StyledHeader>
    )
}