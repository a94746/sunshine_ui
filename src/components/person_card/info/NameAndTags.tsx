import styled from "styled-components";
import {useTranslation} from "react-i18next";
import Tag from "@/components/person_card/info/Tag";
import {PersonCard} from "@/components/person_card/PersonCard";

const StyledContainer = styled.div`
    margin: 0.3rem 0 0;
`

const StyledName = styled.h2`
    display: inline-block;
    margin-right: 1rem;
`

export default function NameAndTags({personCard}: {personCard: PersonCard}) {
    const {t}  = useTranslation()
    const tags = getChatPrefsAndRelations(personCard).map(tag => t(tag))
    return (
        <StyledContainer>
            <StyledName>{personCard.name}, {personCard.age}</StyledName>
            {tags.map(tag => (<Tag key={tag}>{tag}</Tag>))}
        </StyledContainer>
    )
}

function getChatPrefsAndRelations(match: PersonCard) {
    return [...match.chatPrefs.map(c => c.toString()),
        ...match.relations.map(c => c.toString())]
}