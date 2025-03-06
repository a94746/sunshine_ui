import {useThemeChange} from "@/common/Theme.jsx";
import themeToggleLightImg from "@/assets/theme-toggle-light.png";
import themeToggleDarkImg from "@/assets/theme-toggle-dark.png";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 3rem;
    width: 3rem;
    padding: 0;
    border: 0;
    background: transparent;
`
const StyledImg = styled.img`
    height: 100%;
    width: 100%;
    filter: drop-shadow(0 0 1px ${p => p.theme.colors.accent1})
        drop-shadow(0 0 0 ${p => p.theme.colors.accent1})
        drop-shadow(0 0 0 ${p => p.theme.colors.accent1})
        drop-shadow(0 0 0 ${p => p.theme.colors.accent1});
`

export default function ToggleTheme() {
    const {isLightThemeNow, toggleTheme} = useThemeChange()
    return (
        <StyledButton onClick={toggleTheme}>
            <StyledImg src={isLightThemeNow ? themeToggleLightImg : themeToggleDarkImg} alt="toggle theme"/>
        </StyledButton>
    )
}