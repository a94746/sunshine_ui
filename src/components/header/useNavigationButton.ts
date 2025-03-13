import matchImgLight from "@/assets/header/light/match.png";
import mainImgLight from "@/assets/header/light/main.png";
import profileImgLight from "@/assets/header/light/profile.png";
import matchActiveImgLight from "@/assets/header/light/matchActive.png";
import mainActiveImgLight from "@/assets/header/light/mainActive.png";
import profileActiveImgLight from "@/assets/header/light/profileActive.png";
import matchImgDark from "@/assets/header/dark/match.png";
import mainImgDark from "@/assets/header/dark/main.png";
import profileImgDark from "@/assets/header/dark/profile.png";
import matchActiveImgDark from "@/assets/header/dark/matchActive.png";
import mainActiveImgDark from "@/assets/header/dark/mainActive.png";
import profileActiveImgDark from "@/assets/header/dark/profileActive.png";
import editProfileImgLight from "@/assets/header/light/editProfile.png";
import editProfileImgDark from "@/assets/header/dark/editProfile.png";
import editProfileActiveImgLight from "@/assets/header/light/editProfileActive.png";
import editProfileActiveImgDark from "@/assets/header/dark/editProfileActive.png";
import {ImgButtonProps} from "@/components/shared/ImgButton";
import {editProfilePagePath, mainPagePath, matchPagePath, profilePagePath} from "@/components/common/Navigation";
import {useLocation, useNavigate} from "react-router-dom";
import {useThemeChange} from "@/components/common/Theme";

type ButtonType = "main" | "match" | "profile" | "editProfile"

export default function useNavigationButton(type: ButtonType) : ImgButtonProps {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {isLightThemeNow} = useThemeChange()

    const paths = {
        main: mainPagePath,
        match: matchPagePath,
        profile: profilePagePath,
        editProfile: editProfilePagePath,
    }

    return {
        src: getImage(type, isLightThemeNow, pathname === paths[type]),
        onClick: (_) => navigate(paths[type]),
        alt: type + " page",
    }
}

function getImage(type: ButtonType, isLight: boolean, isActive: boolean) {
    const images = {
        main: {
            light: isActive ? mainActiveImgLight : mainImgLight,
            dark: isActive ? mainActiveImgDark : mainImgDark,
        },
        match: {
            light: isActive ? matchActiveImgLight : matchImgLight,
            dark: isActive ? matchActiveImgDark : matchImgDark,
        },
        profile: {
            light: isActive ? profileActiveImgLight : profileImgLight,
            dark: isActive ? profileActiveImgDark : profileImgDark,
        },
        editProfile: {
            light: isActive ? editProfileActiveImgLight : editProfileImgLight,
            dark: isActive ? editProfileActiveImgDark : editProfileImgDark,
        },
    }
    return isLight ? images[type].light : images[type].dark;
}