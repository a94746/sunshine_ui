import styled from "styled-components";
import testPic1 from "@/assets/test/test1.jpg";
import testPic2 from "@/assets/test/test2.jpg";
import testPic3 from "@/assets/test/test3.jpg";
import testPic4 from "@/assets/test/test4.jpg";
import Block from "@/components/shared/Block";
import SlidingContacts from "@/components/person_card/SlidingContacts";
import Gallery from "@/components/person_card/gallery/Gallery";
import Info from "@/components/person_card/info/Info";
import {testInstanceMyProfile} from "@/components/profile/MyProfile";

const StyledContainer = styled.div`
    width: 100%;
    max-width: 800px;
    min-width: 400px;
`

export default function ProfilePage() {
    const profile = testInstanceMyProfile
    const pics = new Map<number, string>();
    pics.set(1, testPic1)
    pics.set(2, testPic2)
    pics.set(3, testPic3)
    pics.set(4, testPic4)

    return (
        <StyledContainer>
            <Block height="calc(100vh - 2rem)" >
                <SlidingContacts contacts={profile.contacts}/>
                <Gallery images={profile.picInfos.map(pI => pics.get(pI.id))} height="70%"/>
                <Info personCard={profile} height="30%"/>
            </Block>
        </StyledContainer>
    )
}