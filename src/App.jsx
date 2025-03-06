import styled from "styled-components";
import Theme from "./common/Theme.jsx";
import {Route, Routes} from "react-router-dom";
import Title from "./components/header/Title.jsx";
import LoginPage from "./components/login/LoginPage.jsx";
import MainPage from "./components/main/MainPage.jsx";
import MatchPage from "./components/match/MatchPage.jsx";
import ProfilePage from "./components/profile/ProfilePage.jsx";
import NotFoundPage from "./components/not_found/NotFoundPage.jsx";
import Header from "./components/header/Header.jsx";

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${p => p.theme.colors.backgroundPrimary};
    color: ${p => p.theme.colors.textOnPrimary};
`

export default function App() {
    return (
        <Theme>
            <Title/>
            <AppWrapper>
                <Header/>
                <Routes>
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/main" element={<MainPage/>} />
                    <Route path="/match" element={<MatchPage/>} />
                    <Route path="/profile" element={<ProfilePage/>} />
                    <Route path="*" element={<NotFoundPage/>} />
                </Routes>
            </AppWrapper>
        </Theme>
    )
}
