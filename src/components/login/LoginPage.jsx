import styled from "styled-components";
import InputText, {InputPassword} from "@/components/login/Input.jsx";
import {useState} from "react";
import ButtonMain, {ButtonSecondary} from "@/components/login/Button.jsx";
import Block from "@/common/components/Block.jsx";

const StyledH2 = styled.h2`
    margin: 0.5rem;
    text-align: center;
`

export default function LoginPage() {
    const [isRegistration, setRegistration] = useState(false);

    return (
        <Block>
            <StyledH2>Привет, солнышко!</StyledH2>
            <InputText placeholder="Почта"/>
            <InputPassword placeholder="Пароль"/>
            {isRegistration && <InputPassword placeholder="Пароль ещё раз"/>}
            <div>
                <ButtonSecondary onClick={() => setRegistration(!isRegistration)}>
                    {isRegistration ? "Вход" : "Регистрация"    }
                </ButtonSecondary>
                <ButtonMain>{isRegistration ? "Регистрация" : "Вход"}</ButtonMain>
            </div>
        </Block>
    )
}