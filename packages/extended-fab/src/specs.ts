import { addAlpha, generateFullSpec, lightTheme } from '@waterial/base';
import { generateButtonColorsFromBase } from '@waterial/base';
import { WaterialTheme } from '@waterial/base/dist/src/theme';

export const calculateSpec = () => {
  const currentTheme: WaterialTheme = globalThis.waterialTheme || lightTheme;

  const ExtendedFABBase = {
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(0, 0, 0, 0)',
    textColor: currentTheme.colors.onBackground,
    padding: '0px',
    elevation: currentTheme.elevation[0],
    border: 'none',
    borderRadius: '0px',
    stateLayer: 'rgba(0, 0, 0, 0)',
    transition: 'all 200ms',
    iconSize: '24px',
    height: 'auto',
    minWidth: 'auto',
    iconMarginRight: '0px',
    floatPosition: 'relative',
    floatBottom: '0px',
    floatRight: '0px',
    zIndex: 'auto',
  };

  const defaultColors = {
    primary: {
      background: currentTheme.colors.primaryContainer,
      stateLayer: currentTheme.colors.onPrimaryContainer,
      textColor: currentTheme.colors.onPrimaryContainer,
    },
    surface: {
      background: currentTheme.surface[3],
      stateLayer: currentTheme.colors.primary,
      textColor: currentTheme.colors.primary,
    },
    secondary: {
      background: currentTheme.colors.secondaryContainer,
      stateLayer: currentTheme.colors.onSecondaryContainer,
      textColor: currentTheme.colors.onSecondaryContainer,
    },
    tertiary: {
      background: currentTheme.colors.tertiaryContainer,
      stateLayer: currentTheme.colors.onTertiaryContainer,
      textColor: currentTheme.colors.onTertiaryContainer,
    },
  };

  const defaultEnabled = generateFullSpec(ExtendedFABBase, {
    background: currentTheme.colors.primaryContainer,
    elevation: currentTheme.elevation[1],
    padding: '0px 20px 0px 20px',
    borderRadius: '16px',
    stateLayer: currentTheme.colors.onPrimaryContainer,
    textColor: currentTheme.colors.onPrimaryContainer,
    iconSize: '24px',
    height: '56px',
    minWidth: '80px',
    iconMarginRight: '12px',
    floatPosition: 'fixed',
    floatBottom: '16px',
    floatRight: '16px',
    zIndex: '100',
  });

  const defaultHover = generateFullSpec(defaultEnabled, {
    elevation: currentTheme.elevation[2],
  });

  const defaultActive = generateFullSpec(defaultEnabled, {
    elevation: currentTheme.elevation[1],
  });

  const defaultFocus = generateFullSpec(defaultEnabled, {
    elevation: currentTheme.elevation[1],
  });

  const defaultDisabled = generateFullSpec(
    defaultEnabled,
    {
      elevation: currentTheme.elevation[0],
      background: `${addAlpha(currentTheme.colors.onSurface, 0.12)} !preserve`,
      textColor: `${addAlpha(currentTheme.colors.onSurface, 0.38)} !preserve`,
    },
    false
  );

  return generateButtonColorsFromBase(
    {
      enabled: defaultEnabled,
      hover: defaultHover,
      active: defaultActive,
      focus: defaultFocus,
      disabled: defaultDisabled,
    },
    defaultColors
  );
};
