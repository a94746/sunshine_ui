import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function Title() : null {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/login') {
            document.title = 'Login Sunshine';
        }
    }, [location]);
    return null
}