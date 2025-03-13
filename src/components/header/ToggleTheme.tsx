import {useThemeChange} from "@/components/common/Theme";
import themeToggleLightImg from "@/assets/header/light/theme-toggle-light.png";
import themeToggleDarkImg from "@/assets/header/dark/theme-toggle-dark.png";
import styled from "styled-components";
import {ImgButtonWithBorder} from "@/components/shared/ImgButton";

const StyledContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function ToggleTheme() {
    const {isLightThemeNow, toggleTheme} = useThemeChange()

    return (
        <StyledContainer>
            <ImgButtonWithBorder src={isLightThemeNow ? themeToggleLightImg : themeToggleDarkImg}
                       onClick={toggleTheme}
                       alt={"Toggle theme"}/>
        </StyledContainer>
    )
}