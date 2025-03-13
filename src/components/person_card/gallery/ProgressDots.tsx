import styled from "styled-components";

const StyledDotsContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.5rem;
    display: flex;
    gap: 5px;
`

const StyledDot = styled.div<{ $active: boolean }>`
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: ${({ $active, theme }) => (
        $active ? theme.colors.accent2 : theme.colors.backgroundSecondary)};
    transition: 0.5s ease;
`

export default function ProgressDots({ currentIndex, size } : { currentIndex: number, size: number }) {
    return (
        <StyledDotsContainer>
            {[ ...Array(size).keys() ].map(num => (
                <StyledDot key={num} $active={currentIndex === num} />
            ))}
        </StyledDotsContainer>
    );
}