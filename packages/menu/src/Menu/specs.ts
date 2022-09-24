import { lightTheme } from '@waterial/base';
import { WaterialTheme } from '@waterial/base/src/theme';

export const calculateSpec = () => {
  const currentTheme: WaterialTheme = globalThis.waterialTheme || lightTheme;

  return {
    background: currentTheme.surface[2],
    minWidth: '112px',
    maxWidth: '280px',
    borderRadius: '4px',
    paddingTop: '8px',
    paddingBottom: '8px',
    width: 'fit-content',
    elevation: currentTheme.elevation[2],
  };
};
