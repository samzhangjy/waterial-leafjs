import { lightTheme, darkTheme, WaterialTheme } from '../theme';

export type ThemeConfig = 'light' | 'dark' | WaterialTheme;
export let currentTheme: ThemeConfig = 'light';

declare global {
  interface Window {
    waterialTheme: ThemeConfig;
  }
}

export const CSSMapping: Record<string, string> = {
  textColor: 'color',
  elevation: 'box-shadow',
};

export const initializeTheme = () => {
  Object.defineProperty(window, 'waterialTheme', {
    get() {
      if (currentTheme === 'light') return lightTheme;
      if (currentTheme === 'dark') return darkTheme;
      return currentTheme;
    },
    set(v: ThemeConfig) {
      currentTheme = v;
      window.dispatchEvent(new CustomEvent('waterial-theme-change'));
    },
  });
};

export const getCurrentThemeName = () => {
  if (typeof currentTheme === 'string') return currentTheme;
  return 'custom';
};
