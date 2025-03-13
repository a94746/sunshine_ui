import styled from "styled-components";
import {MouseEventHandler} from "react";

const StyledArrow = styled.p`
    padding: 1rem;
    font-size: 2rem;
    color: ${p => p.theme.colors.accent2};
    filter: drop-shadow(0 0 1px ${p => p.theme.colors.accent3})
        drop-shadow(0 0 0 ${p => p.theme.colors.accent3})
        drop-shadow(0 0 0 ${p => p.theme.colors.accent3})
        drop-shadow(0 0 0 ${p => p.theme.colors.accent3});
`

const StyledClickArea = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const StyledLeftClickArea = styled(StyledClickArea)`
    left: 0;
    justify-content: left;
`

const StyledRightClickArea = styled(StyledClickArea)`
    right: 0;
    justify-content: right;
`

function LeftArrow({onClick} : { onClick: MouseEventHandler }) {
    return (
        <StyledLeftClickArea onClick={onClick}>
            <StyledArrow>&lt;</StyledArrow>
        </StyledLeftClickArea>
    );
}

function RightArrow({onClick} : { onClick: MouseEventHandler }) {
    return (
        <StyledRightClickArea onClick={onClick}>
            <StyledArrow>&gt;</StyledArrow>
        </StyledRightClickArea>
    );
}

export default function Arrows({onLeftClick, onRightClick} : { onLeftClick: MouseEventHandler, onRightClick: MouseEventHandler }) {
    return (
        <>
            <LeftArrow onClick={onLeftClick} />
            <RightArrow onClick={onRightClick} />
        </>
    );
}