import { addAlpha, generateFullSpec, lightTheme } from '@waterial/base';
import { generateButtonColorsFromBase } from '@waterial/base';
import { WaterialTheme } from '@waterial/base/dist/src/theme';

export const calculateSpec = () => {
  const currentTheme: WaterialTheme = globalThis.waterialTheme || lightTheme;

  const FABBase = {
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

  const defaultEnabled = generateFullSpec(FABBase, {
    background: currentTheme.colors.primaryContainer,
    // TODO: figure out what the heck is `elevation (lower)` and `elevation (default)` in the MD3 specs
    // for now it will be using `elevation (lower)`
    elevation: currentTheme.elevation[1],
    padding: '16px',
    borderRadius: '16px',
    stateLayer: currentTheme.colors.onPrimaryContainer,
    textColor: currentTheme.colors.onPrimaryContainer,
    iconSize: '24px',
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

  const smallColors = {
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

  const smallEnabled = generateFullSpec(FABBase, {
    background: currentTheme.colors.primaryContainer,
    elevation: currentTheme.elevation[1],
    padding: '8px',
    borderRadius: '12px',
    stateLayer: currentTheme.colors.onPrimaryContainer,
    textColor: currentTheme.colors.onPrimaryContainer,
    iconSize: '24px',
    floatPosition: 'fixed',
    floatBottom: '16px',
    floatRight: '16px',
    zIndex: '100',
  });

  const smallHover = generateFullSpec(smallEnabled, {
    elevation: currentTheme.elevation[2],
  });

  const smallActive = generateFullSpec(smallEnabled, {
    elevation: currentTheme.elevation[1],
  });

  const smallFocus = generateFullSpec(smallEnabled, {
    elevation: currentTheme.elevation[1],
  });

  const smallDisabled = generateFullSpec(
    smallEnabled,
    {
      elevation: currentTheme.elevation[0],
      background: `${addAlpha(currentTheme.colors.onSurface, 0.12)} !preserve`,
      textColor: `${addAlpha(currentTheme.colors.onSurface, 0.38)} !preserve`,
    },
    false
  );

  const largeColors = {
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

  const largeEnabled = generateFullSpec(FABBase, {
    background: currentTheme.colors.primaryContainer,
    elevation: currentTheme.elevation[1],
    padding: '30px',
    borderRadius: '28px',
    stateLayer: currentTheme.colors.onPrimaryContainer,
    textColor: currentTheme.colors.onPrimaryContainer,
    iconSize: '36px',
    floatPosition: 'fixed',
    floatBottom: '16px',
    floatRight: '16px',
    zIndex: '100',
  });

  const largeHover = generateFullSpec(largeEnabled, {
    elevation: currentTheme.elevation[2],
  });

  const largeActive = generateFullSpec(largeEnabled, {
    elevation: currentTheme.elevation[1],
  });

  const largeFocus = generateFullSpec(largeEnabled, {
    elevation: currentTheme.elevation[1],
  });

  const largeDisabled = generateFullSpec(
    largeEnabled,
    {
      elevation: currentTheme.elevation[0],
      background: `${addAlpha(currentTheme.colors.onSurface, 0.12)} !preserve`,
      textColor: `${addAlpha(currentTheme.colors.onSurface, 0.38)} !preserve`,
    },
    false
  );

  return {
    default: generateButtonColorsFromBase(
      {
        enabled: defaultEnabled,
        hover: defaultHover,
        active: defaultActive,
        focus: defaultFocus,
        disabled: defaultDisabled,
      },
      defaultColors
    ),
    small: generateButtonColorsFromBase(
      {
        enabled: smallEnabled,
        hover: smallHover,
        active: smallActive,
        focus: smallFocus,
        disabled: smallDisabled,
      },
      smallColors
    ),
    large: generateButtonColorsFromBase(
      {
        enabled: largeEnabled,
        hover: largeHover,
        active: largeActive,
        focus: largeFocus,
        disabled: largeDisabled,
      },
      largeColors
    ),
  };
};
