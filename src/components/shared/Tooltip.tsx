import React, {ReactNode, useState} from 'react';
import styled from "styled-components";

const StyledText = styled.p`
    position: absolute;
    transform: translateX(+50%);
    padding: 0.5rem;
    border-radius: 1rem;
    z-index: 10;
    background: ${p => p.theme.colors.backgroundTertiary};
    color: ${p => p.theme.colors.textOnTertiary};
`

export default function Tooltip({text, children} : {text: string; children: ReactNode}) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} >
                {children}
            </div>
            {visible && (<StyledText>{text}</StyledText>)}
        </>
    );
};

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}