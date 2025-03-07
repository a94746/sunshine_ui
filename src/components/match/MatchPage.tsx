import Block from "@/common/components/Block";
import {testInstanceLikedMatch} from "@/common/dto/LikedMatch";
import styled from "styled-components";
import testPic from "@/assets/theme-toggle-light.png"

const StyledDiv = styled.div`
    width: 100%;
    max-width: 800px;
`

const StyledImg = styled.img`
    height: 50px;
    width: 50px;
`

export default function MatchPage() {
    const matches = [testInstanceLikedMatch, {...testInstanceLikedMatch, id: 11}]
    const pics = new Map<number, string>();
    pics.set(1, testPic)

    return (
        <StyledDiv>
            {matches.map(match =>
                <Block key={match.id}>
                    {match.picInfos.map(pI =>
                        <StyledImg key={pI.id} src={pics.get(pI.id)} alt="Photo"/>
                    )}
                    <hr/>
                    <h2>{match.name}, {match.age} {match.chatPrefs.join(", ")}</h2>
                    <p>{match.relations.join(", ")}</p>
                    <p>{match.description}</p>
                    <p>{match.message}</p>
                    {match.contacts.map(c =>
                        <p key={c.id}>{c.key}: {c.value}</p>
                    )}
                </Block>
            )}
        </StyledDiv>
    )
}