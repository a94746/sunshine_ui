import styled from "styled-components";

export const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 0 7rem;

    background: ${p => p.theme.colors.backgroundPrimary};
    color: ${p => p.theme.colors.textOnPrimary};
`