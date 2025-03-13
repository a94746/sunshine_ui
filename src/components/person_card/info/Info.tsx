import styled from "styled-components";
import NameAndTags from "@/components/person_card/info/NameAndTags";
import Scrollable from "@/components/shared/Scrollable";
import {useTranslation} from "react-i18next";
import {PersonCard} from "@/components/person_card/PersonCard";

const StyledContainer = styled.div<{$height: string}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({ $height }) => $height};
`

export default function Info({personCard, height = "100%"}: {personCard: PersonCard, height?: string}) {
    const {t}  = useTranslation()
    return (
        <StyledContainer $height={height}>
            <NameAndTags personCard={personCard} />
            <Scrollable>
                {personCard.message && <p><strong>{t("msg-for-you")}:</strong> {personCard.message}</p>}
                <p><strong>{t("description")}:</strong> {personCard.description}</p>
            </Scrollable>
        </StyledContainer>
    )
}