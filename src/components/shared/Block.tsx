import styled from "styled-components";
import {ReactNode} from 'react';

const StyledDiv = styled.div<{ $height: string }>`
    height: ${({ $height }) => $height};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid ${p => p.theme.colors.accent1};
    border-radius: 1rem;
    background-color: ${p => p.theme.colors.backgroundSecondary};
`

export default function Block({ children, height = "auto"}: { children?: ReactNode, height?: string }) {
    return (
        <StyledDiv $height={height}>
            {children}
        </StyledDiv>
    )
}