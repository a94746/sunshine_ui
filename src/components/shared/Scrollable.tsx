import styled from "styled-components";
import {ReactNode} from "react";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    overflow: auto;
`

export default function Scrollable({children}: {children: ReactNode}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}