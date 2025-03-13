import styled from "styled-components";

const StyledH2 = styled.h2`
    text-align: center;
`

export default function TextForEmptyPage({children}: {children: string}) {
    return (
        <StyledH2>
            {children}
        </StyledH2>
    )
}