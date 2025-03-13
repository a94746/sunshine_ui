import styled from "styled-components";
import {useModal} from "@/components/common/Modal";

const StyledContainer = styled.div`
    display: inline-block;
    cursor: pointer;
`

export default function CopyTextComponent({children, alertText}: {children: string, alertText?: string}) {
    const showModal = useModal()
    async function handleCopy() {
        await navigator.clipboard.writeText(children)
        if (alertText) {
            showModal(alertText, 2000)
        }
    }

    return (
        <StyledContainer onClick={handleCopy}>
            {children}
        </StyledContainer>
    )
}
