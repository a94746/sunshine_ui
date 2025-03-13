import {Route, Routes} from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import MatchPage from "@/pages/MatchPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import EditProfilePage from "@/pages/EditProfilePage";

export const loginPagePath = "/login"
export const mainPagePath = "/main"
export const matchPagePath = "/match"
export const profilePagePath = "/profile"
export const editProfilePagePath = "/edit-profile"


export default function Navigation() {
    return (
        <Routes>
            <Route path={loginPagePath} element={<LoginPage/>} />
            <Route path={mainPagePath} element={<MainPage/>} />
            <Route path={matchPagePath} element={<MatchPage/>} />
            <Route path={profilePagePath} element={<ProfilePage/>} />
            <Route path={editProfilePagePath} element={<EditProfilePage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}