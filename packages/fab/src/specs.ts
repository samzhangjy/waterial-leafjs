import { addAlpha, generateFullSpec, lightTheme } from '@waterial/base';
import { generateColorCollectionFromBase } from './helper';

const FABBase = {
  position: 'relative',
  overflow: 'hidden',
  background: 'rgba(0, 0, 0, 0)',
  textColor: lightTheme.colors.onBackground,
  padding: '0px',
  elevation: lightTheme.elevation[0],
  border: 'none',
  borderRadius: '0px',
  stateLayer: 'rgba(0, 0, 0, 0)',
  transition: 'all 200ms',
  iconSize: '24px',
};

const defaultColors = {
  primary: {
    background: lightTheme.colors.primaryContainer,
    stateLayer: lightTheme.colors.onPrimaryContainer,
    textColor: lightTheme.colors.onPrimaryContainer,
  },
  surface: {
    background: lightTheme.colors.surface,
    stateLayer: lightTheme.colors.primary,
    textColor: lightTheme.colors.primary,
  },
  secondary: {
    background: lightTheme.colors.secondaryContainer,
    stateLayer: lightTheme.colors.onSecondaryContainer,
    textColor: lightTheme.colors.onSecondaryContainer,
  },
  tertiary: {
    background: lightTheme.colors.tertiaryContainer,
    stateLayer: lightTheme.colors.onTertiaryContainer,
    textColor: lightTheme.colors.onTertiaryContainer,
  },
};

const defaultEnabled = generateFullSpec(FABBase, {
  background: lightTheme.colors.primaryContainer,
  // TODO: figure out what the heck is `elevation (lower)` and `elevation (default)` in the MD3 specs
  // for now it will be using `elevation (lower)`
  elevation: lightTheme.elevation[1],
  padding: '16px',
  borderRadius: '16px',
  stateLayer: lightTheme.colors.onPrimaryContainer,
  textColor: lightTheme.colors.onPrimaryContainer,
  iconSize: '24px',
});

const defaultHover = generateFullSpec(defaultEnabled, {
  elevation: lightTheme.elevation[2],
});

const defaultActive = generateFullSpec(defaultEnabled, {
  elevation: lightTheme.elevation[1],
});

const defaultFocus = generateFullSpec(defaultEnabled, {
  elevation: lightTheme.elevation[1],
});

const defaultDisabled = generateFullSpec(
  defaultEnabled,
  {
    elevation: lightTheme.elevation[0],
    background: `${addAlpha(lightTheme.colors.onSurface, 0.12)} !preserve`,
    textColor: `${addAlpha(lightTheme.colors.onSurface, 0.38)} !preserve`,
  },
  false
);

const smallColors = {
  primary: {
    background: lightTheme.colors.primaryContainer,
    stateLayer: lightTheme.colors.onPrimaryContainer,
    textColor: lightTheme.colors.onPrimaryContainer,
  },
  surface: {
    background: lightTheme.colors.surface,
    stateLayer: lightTheme.colors.primary,
    textColor: lightTheme.colors.primary,
  },
  secondary: {
    background: lightTheme.colors.secondaryContainer,
    stateLayer: lightTheme.colors.onSecondaryContainer,
    textColor: lightTheme.colors.onSecondaryContainer,
  },
  tertiary: {
    background: lightTheme.colors.tertiaryContainer,
    stateLayer: lightTheme.colors.onTertiaryContainer,
    textColor: lightTheme.colors.onTertiaryContainer,
  },
};

const smallEnabled = generateFullSpec(FABBase, {
  background: lightTheme.colors.primaryContainer,
  elevation: lightTheme.elevation[1],
  padding: '8px',
  borderRadius: '12px',
  stateLayer: lightTheme.colors.onPrimaryContainer,
  textColor: lightTheme.colors.onPrimaryContainer,
  iconSize: '24px',
});

const smallHover = generateFullSpec(smallEnabled, {
  elevation: lightTheme.elevation[2],
});

const smallActive = generateFullSpec(smallEnabled, {
  elevation: lightTheme.elevation[1],
});

const smallFocus = generateFullSpec(smallEnabled, {
  elevation: lightTheme.elevation[1],
});

const smallDisabled = generateFullSpec(
  smallEnabled,
  {
    elevation: lightTheme.elevation[0],
    background: `${addAlpha(lightTheme.colors.onSurface, 0.12)} !preserve`,
    textColor: `${addAlpha(lightTheme.colors.onSurface, 0.38)} !preserve`,
  },
  false
);

const largeColors = {
  primary: {
    background: lightTheme.colors.primaryContainer,
    stateLayer: lightTheme.colors.onPrimaryContainer,
    textColor: lightTheme.colors.onPrimaryContainer,
  },
  surface: {
    background: lightTheme.colors.surface,
    stateLayer: lightTheme.colors.primary,
    textColor: lightTheme.colors.primary,
  },
  secondary: {
    background: lightTheme.colors.secondaryContainer,
    stateLayer: lightTheme.colors.onSecondaryContainer,
    textColor: lightTheme.colors.onSecondaryContainer,
  },
  tertiary: {
    background: lightTheme.colors.tertiaryContainer,
    stateLayer: lightTheme.colors.onTertiaryContainer,
    textColor: lightTheme.colors.onTertiaryContainer,
  },
};

const largeEnabled = generateFullSpec(FABBase, {
  background: lightTheme.colors.primaryContainer,
  elevation: lightTheme.elevation[1],
  padding: '30px',
  borderRadius: '28px',
  stateLayer: lightTheme.colors.onPrimaryContainer,
  textColor: lightTheme.colors.onPrimaryContainer,
  iconSize: '36px',
});

const largeHover = generateFullSpec(largeEnabled, {
  elevation: lightTheme.elevation[2],
});

const largeActive = generateFullSpec(largeEnabled, {
  elevation: lightTheme.elevation[1],
});

const largeFocus = generateFullSpec(largeEnabled, {
  elevation: lightTheme.elevation[1],
});

const largeDisabled = generateFullSpec(
  largeEnabled,
  {
    elevation: lightTheme.elevation[0],
    background: `${addAlpha(lightTheme.colors.onSurface, 0.12)} !preserve`,
    textColor: `${addAlpha(lightTheme.colors.onSurface, 0.38)} !preserve`,
  },
  false
);

const specs = {
  default: generateColorCollectionFromBase(
    {
      enabled: defaultEnabled,
      hover: defaultHover,
      active: defaultActive,
      focus: defaultFocus,
      disabled: defaultDisabled,
    },
    defaultColors
  ),
  small: generateColorCollectionFromBase(
    {
      enabled: smallEnabled,
      hover: smallHover,
      active: smallActive,
      focus: smallFocus,
      disabled: smallDisabled,
    },
    smallColors
  ),
  large: generateColorCollectionFromBase(
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

export default specs;
