import styled from "styled-components"
import {MouseEventHandler} from "react";

const StyledButton = styled.button`
    height: 100%;
    width: calc(100% - 1rem);
    margin: 0.5rem;
    padding: 0;
    border: 0;
    background: transparent;
`
const StyledImg = styled.img`
    height: 100%;
    width: 100%;
`

const StyledBorderImg = styled(StyledImg)`
    filter: drop-shadow(0 0 1px ${p => p.theme.colors.accent1})
        drop-shadow(0 0 0 ${p => p.theme.colors.accent1})
        drop-shadow(0 0 0 ${p => p.theme.colors.accent1}) 
        drop-shadow(0 0 0 ${p => p.theme.colors.accent1})
`

export function ImgButton({src, alt, onClick} : ImgButtonProps) {
    return (
        <StyledButton onClick={onClick}>
            <StyledImg src={src} alt={alt} />
        </StyledButton>
    )
}

export function ImgButtonWithBorder({src, alt, onClick} : ImgButtonProps) {
    return (
        <StyledButton onClick={onClick}>
            <StyledBorderImg src={src} alt={alt} />
        </StyledButton>
    )
}

export interface ImgButtonProps {
    src: string,
    alt: string,
    onClick: MouseEventHandler
}