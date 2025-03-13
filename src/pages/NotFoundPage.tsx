import styled from "styled-components";
import {useTranslation} from "react-i18next";

const StyledHeader = styled.h1`
    font-size: 3rem;
`

export default function NotFoundPage() {
    const {t}  = useTranslation();
    return (
        <StyledHeader>{t("not-found")}</StyledHeader>
    )
}