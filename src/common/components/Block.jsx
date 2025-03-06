import styled from "styled-components";

const StyledDiv = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 2px solid ${p => p.theme.colors.accent1};
    border-radius: 1rem;
    background-color: ${p => p.theme.colors.backgroundSecondary};
`

export default function Block({children}) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}