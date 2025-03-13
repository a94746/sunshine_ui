import {createContext, ReactNode, useCallback, useContext, useState} from "react";
import styled from "styled-components";

const ModalContainer = styled.div<{ $visible: boolean }>`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    border-radius: 1rem;
    opacity: ${({$visible}) => ($visible ? 1 : 0)};
    transition: opacity 0.5s ease;
    z-index: 100;

    background: ${p => p.theme.colors.backgroundTertiary};
    color: ${p => p.theme.colors.textOnTertiary};
`

const ModalContext = createContext<((text: string, timeMs: number) => void) | undefined>(undefined);

export const useModal = ()  => {
    const context = useContext(ModalContext)
    if (!context) throw new Error("context error")
    return context
}

export default function Modal({ children } : { children? : ReactNode }) {
    const [visible, setVisible] = useState(false);
    const [alertText, setAlertText] = useState("");

    const showModal = useCallback((text: string, timeMs: number) => {
            setAlertText(text);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setTimeout(() => {
                setAlertText("");
            }, 1000)
        }, timeMs)},
        [visible]
    )

    return (
        <ModalContext.Provider value={showModal}>
            <ModalContainer $visible={visible}>
                {alertText}
            </ModalContainer>
            {children}
        </ModalContext.Provider>
    )
}