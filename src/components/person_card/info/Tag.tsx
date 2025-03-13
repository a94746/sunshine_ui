import styled from "styled-components";

const StyledTag = styled.div`
    display: inline-block;
    transform: translateY(-8%);
    border-radius: 1rem;
    padding: 0 0.5rem;
    margin: 0.3rem;
    background: ${p => p.theme.colors.backgroundTertiary};
    color: ${p => p.theme.colors.textOnTertiary};
`

export default function Tag({children}: {children: string}) {
    return (
        <StyledTag>{children}</StyledTag>
    )
}