import {ThemeProvider} from "styled-components";
import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {lightColorScheme, darkColorScheme} from "@/common/Styles.jsx";

const ThemeChangeContext = createContext();

export const useThemeChange = () => useContext(ThemeChangeContext)

const initialTheme = lightColorScheme

export default function Theme({ children }) {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = useCallback(() => {
        switch (theme) {
            case darkColorScheme: setTheme(lightColorScheme); break
            case lightColorScheme: setTheme(darkColorScheme); break
        }},
        [theme]
    )

    const isLightThemeNow = useMemo(() => {
            switch (theme) {
                case darkColorScheme: return false
                case lightColorScheme: return true
            }},
        [theme]
    )
    const themeChangeContextValue = useMemo(() => ({
        isLightThemeNow,
        toggleTheme
    }), [isLightThemeNow, toggleTheme]);

    return (
        <ThemeChangeContext.Provider value={themeChangeContextValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeChangeContext.Provider>
    )
}