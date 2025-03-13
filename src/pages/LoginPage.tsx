import styled from "styled-components";
import {InputPassword, InputText} from "@/components/login/Input";
import {useState} from "react";
import {ButtonMain, ButtonSecondary} from "@/components/login/Button";
import Block from "@/components/shared/Block";
import {useTranslation} from "react-i18next";
import useLoginForm from "@/components/login/useLoginForm";

const StyledH2 = styled.h2`
    margin: 0.5rem;
    text-align: center;
`

export default function LoginPage() {
    const {t}  = useTranslation()
    const [isRegistration, setRegistration] = useState(false)
    const loginForm = useLoginForm()

    function handleButtonSecondaryClick() {
        setRegistration(!isRegistration)
        loginForm.inputPassword.setValue("")
        loginForm.inputPassword2.setValue("")
    }

    return (
        <Block>
            <StyledH2>{t("welcome")}</StyledH2>
            <InputText placeholder={t("email")} {...loginForm.inputEmail.bind}/>
            <InputPassword placeholder={t("password")} {...loginForm.inputPassword.bind}/>
            {isRegistration && <InputPassword placeholder={t("password-again")} {...loginForm.inputPassword2.bind}/>}
            <div>
                <ButtonSecondary onClick={handleButtonSecondaryClick}>
                    {isRegistration ? t("sing-in") : t("sing-up")}
                </ButtonSecondary>
                <ButtonMain onClick={() => {}}>
                    {isRegistration ? t("sing-up") : t("sing-in")}
                </ButtonMain>
            </div>
        </Block>
    )
}