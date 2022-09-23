import { WaterialTheme } from '../theme';
export declare type ThemeConfig = 'light' | 'dark' | WaterialTheme;
export declare let currentTheme: ThemeConfig;
declare global {
    interface Window {
        waterialTheme: ThemeConfig;
    }
}
export declare const initializeTheme: () => void;
export declare const getCurrentThemeName: () => "light" | "dark" | "custom";
