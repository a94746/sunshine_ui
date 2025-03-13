import {MouseEventHandler, ReactNode} from "react";
import styled from "styled-components";

const StyledContainer = styled.div<{ $isOpen: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
`

const StyledBigImg = styled.img`
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
`

export default function BigImg({ children, isOpen, onClick, currentIndex, currentImage} : BigImgProps) {
    return (
        <StyledContainer $isOpen={isOpen}>
            <StyledBigImg onClick={onClick} src={currentImage} alt={`Image ${currentIndex + 1}`} />
            {children}
        </StyledContainer>
    );
}

interface BigImgProps {
    children?: ReactNode;
    isOpen: boolean,
    onClick?: MouseEventHandler,
    currentIndex: number,
    currentImage: string | undefined,
}