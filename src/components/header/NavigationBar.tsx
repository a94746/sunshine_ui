import {ImgButton} from "@/components/shared/ImgButton";
import useNavigationButton from "@/components/header/useNavigationButton";
import Tooltip from "@/components/shared/Tooltip";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";
import {editProfilePagePath, profilePagePath} from "@/components/common/Navigation";

export default function NavigationBar() {
    const {pathname} = useLocation();
    const {t}  = useTranslation()
    const mainButton = useNavigationButton("main")
    const matchButton = useNavigationButton("match")
    const profileButton = useNavigationButton("profile")
    const editProfileButton = useNavigationButton("editProfile")
    
    return (
        <div>
            <Tooltip text={t("daily-cards")}><ImgButton {...mainButton} /></Tooltip>
            <Tooltip text={t("matches")}><ImgButton {...matchButton} /></Tooltip>
            <Tooltip text={t("profile")}><ImgButton {...profileButton} /></Tooltip>
            {(pathname === profilePagePath || pathname === editProfilePagePath)
                && <Tooltip text={t("editProfile")}><ImgButton {...editProfileButton} /></Tooltip>}
        </div>
    )
}
