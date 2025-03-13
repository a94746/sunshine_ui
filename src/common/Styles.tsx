export const lightColorScheme : ColorScheme = {
    colors: {
        backgroundPrimary: "rgb(255, 255, 190)",
        textOnPrimary: "rgb(20, 20, 20)",

        backgroundSecondary: "rgb(255, 255, 240)",
        backgroundActiveSecondary: "rgb(255, 255, 255)",
        textOnSecondary: "rgb(20, 20, 20)",

        backgroundTertiary: "rgb(20, 20, 20)",
        backgroundActiveTertiary: "rgb(50, 50, 50)",
        textOnTertiary: "rgb(255, 255, 240)",

        accent1: "rgb(20, 20, 20)",
        accent2: "rgb(255, 255, 0)",
        accent3: "rgb(20, 20, 20)", // opposite to accent1
        error: "rgb(255, 69, 0)",
    }
}
export const darkColorScheme : ColorScheme = {
    colors: {
        backgroundPrimary: "rgb(30, 30, 30)",
        textOnPrimary: "rgb(245, 245, 220)",

        backgroundSecondary: "rgb(50, 50, 50)",
        backgroundActiveSecondary: "rgb(60, 60, 60)",
        textOnSecondary: "rgb(245, 245, 220)",

        backgroundTertiary: "rgb(245, 245, 220)",
        backgroundActiveTertiary: "rgb(215, 215, 190)",
        textOnTertiary: "rgb(50, 50, 50)",

        accent1: "rgb(245, 245, 220)",
        accent2: "rgb(220, 220, 0)",
        accent3: "rgb(20, 20, 20)", // opposite to accent1
        error: "rgb(128, 0, 0)",
    }
}

interface ColorScheme {
    colors: {
        [key: string]: string;
    }
}