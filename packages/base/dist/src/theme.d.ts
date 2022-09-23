export declare const interactionStates: {
    enabled: number;
    disabled: number;
    hover: number;
    focus: number;
    press: number;
    drag: number;
};
export declare type WaterialTheme = {
    colors: {
        primary: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        shadow: string;
        surfaceTint: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        scrim: string;
    };
    surface: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    surfaceBackdrops: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    elevation: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        lowered: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        default: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
    };
};
export declare const lightTheme: WaterialTheme;
export declare const darkTheme: WaterialTheme;
