import React, {useState} from 'react';
import styled from "styled-components";
import {StyledSecondaryButton} from "@/components/login/Button";
import CopyTextComponent from "@/components/shared/CopyTextComponent";
import {useTranslation} from "react-i18next";
import Scrollable from "@/components/shared/Scrollable";

const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 1rem;
    z-index: 10;
`

const StyledContentContainer = styled.div`
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem;
    background-color: ${p => p.theme.colors.backgroundSecondary};
    color: ${p => p.theme.colors.textOnSecondary};
`

const StyledButton = styled(StyledSecondaryButton)`
    margin: 0 0 1rem;
`

const StyledP = styled.p`
    margin-bottom: 0.5rem;
`

export default function SlidingContacts({contacts}: {contacts: Contact[]}) {
    const {t} = useTranslation()
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const button = <StyledButton onClick={togglePanel} >{isOpen ? t("close") : t("contacts")}</StyledButton>

    return (
        <StyledContainer>
            {isOpen ? (
                <StyledContentContainer>
                    <div>{button}</div>
                    <Scrollable>
                        {contacts.map((c) => (
                            <StyledP key={c.id}>
                                {c.key}: <CopyTextComponent alertText={t("contact-copied")}>{c.value}</CopyTextComponent>
                            </StyledP>
                        ))}
                    </Scrollable>
                </StyledContentContainer>
            ) : button}
        </StyledContainer>
    );
}