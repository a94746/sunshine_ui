import {ThemeProvider} from "styled-components";
import {createContext, ReactNode, useCallback, useContext, useMemo, useState} from "react";
import {darkColorScheme, lightColorScheme} from "@/common/Styles";

const ThemeChangeContext = createContext<ThemeContext | undefined>(undefined);

export const useThemeChange = ()  => {
    const context = useContext(ThemeChangeContext)
    if (!context) throw new Error("context error")
    return context
}

const initialTheme = lightColorScheme

export default function Theme({ children } : { children? : ReactNode }) {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = useCallback(() => {
        switch (theme) {
            case darkColorScheme: setTheme(lightColorScheme); break
            case lightColorScheme: setTheme(darkColorScheme); break
            default: throw new Error("Unknown theme was set")
        }},
        [theme]
    )

    const isLightThemeNow = useMemo(() => {
            switch (theme) {
                case darkColorScheme: return false
                case lightColorScheme: return true
                default: throw new Error("Unknown theme was set")
            }},
        [theme]
    )
    const themeChangeContextValue : ThemeContext = useMemo(() => ({
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

interface ThemeContext {
    isLightThemeNow: boolean;
    toggleTheme: () => void;
}