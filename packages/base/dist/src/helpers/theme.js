import { lightTheme, darkTheme } from '../theme';
export let currentTheme = 'light';
export const CSSMapping = {
    textColor: 'color',
    elevation: 'box-shadow',
};
export const initializeTheme = () => {
    Object.defineProperty(window, 'waterialTheme', {
        get() {
            if (currentTheme === 'light')
                return lightTheme;
            if (currentTheme === 'dark')
                return darkTheme;
            return currentTheme;
        },
        set(v) {
            currentTheme = v;
            window.dispatchEvent(new CustomEvent('waterial-theme-change'));
        },
    });
};
export const getCurrentThemeName = () => {
    if (typeof currentTheme === 'string')
        return currentTheme;
    return 'custom';
};
//# sourceMappingURL=theme.js.map