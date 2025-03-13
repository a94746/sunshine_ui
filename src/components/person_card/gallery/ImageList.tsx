import styled from "styled-components";
import {MouseEventHandler, ReactNode} from "react";

const StyledImageList = styled.div`
    display: flex;
`

const StyledImageItem = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
`

export default function ImageList({children, onClick, currentIndex, currentImage} : ImageListProps) {
    return (
        <StyledImageList>
            <StyledImageItem
                src={currentImage}
                alt={`Image ${currentIndex + 1}`}
                onClick={onClick}/>
            {children}
        </StyledImageList>
    );
}

interface ImageListProps {
    children?: ReactNode;
    onClick?: MouseEventHandler,
    currentIndex: number,
    currentImage: string | undefined,
}