import styled from "styled-components";
import { ReactNode } from 'react';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid ${p => p.theme.colors.accent1};
    border-radius: 1rem;
    background-color: ${p => p.theme.colors.backgroundSecondary};
`

export default function Block({ children }: { readonly children?: ReactNode }) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}