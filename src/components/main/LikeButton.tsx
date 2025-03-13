import {MouseEventHandler, useState} from 'react';
import sunImg from '@/assets/sun.svg';
import styled from "styled-components";
import useElementWidth from "@/common/hooks/useElementWidth";

const SunContainer = styled.div<{ $widthPx: number }>`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${({$widthPx}) => $widthPx}px;
    width: 70%;
    z-index: 1;
    overflow: hidden;
`

const SunImageStyled = styled.img<{ $hovered: boolean }>`
    position: absolute;
    width: 60%;
    left: 20%;
    bottom: 80%;
    opacity: ${({$hovered}) => ($hovered ? 1 : 0.5)};
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: ${({$hovered}) => 
            ($hovered ? 'translateY(60%) scale(1.5)' : 'none')};
`

export default function LikeButton({onClick}: {onClick: MouseEventHandler}) {
    const [hovered, setHovered] = useState(false)
    const [widthPx, elementRef] = useElementWidth<HTMLDivElement>()

    return (
        <SunContainer ref={elementRef} $widthPx={widthPx}>
            <SunImageStyled
                src={sunImg} alt="Sun"
                $hovered={hovered}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={onClick}
            />
        </SunContainer>
    )
}