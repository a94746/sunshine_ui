import Block from "@/components/shared/Block";
import {testInstanceLikedMatch} from "@/components/match/LikedMatch";
import styled from "styled-components";
import testPic1 from "@/assets/test/test1.jpg"
import testPic2 from "@/assets/test/test2.jpg"
import testPic3 from "@/assets/test/test3.jpg"
import testPic4 from "@/assets/test/test4.jpg"
import Gallery from "@/components/person_card/gallery/Gallery";
import Info from "@/components/person_card/info/Info";
import TextForEmptyPage from "@/components/shared/TextForEmptyPage";
import {useTranslation} from "react-i18next";
import SlidingContacts from "@/components/person_card/SlidingContacts";

const StyledContainer = styled.div`
    width: 100%;
    max-width: 800px;
    min-width: 400px;
`

export default function MatchPage() {
    const {t}  = useTranslation()
    const matches = [testInstanceLikedMatch, {...testInstanceLikedMatch, id: 11}]
    const pics = new Map<number, string>();
    pics.set(1, testPic1)
    pics.set(2, testPic2)
    pics.set(3, testPic3)
    pics.set(4, testPic4)

    return (
        <StyledContainer>
            {matches.map(match =>
                <Block height="calc(100vh - 2rem)" key={match.id}>
                    <SlidingContacts contacts={match.contacts}/>
                    <Gallery images={match.picInfos.map(pI => pics.get(pI.id))} height="70%"/>
                    <Info personCard={match} height="30%"/>
                </Block>
            )}
            {matches.length === 0 && <TextForEmptyPage>{t("you-dont-have-likes")}</TextForEmptyPage>}
        </StyledContainer>
    )
}