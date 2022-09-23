import { addAlpha, generateFullSpec, lightTheme } from '@waterial/base';
import { generateButtonColorsFromBase } from '@waterial/base';

const ExtendedFABBase = {
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
  height: 'auto',
  minWidth: 'auto',
  iconMarginRight: '0px',
  floatPosition: 'relative',
  floatBottom: '0px',
  floatRight: '0px',
};

const defaultColors = {
  primary: {
    background: lightTheme.colors.primaryContainer,
    stateLayer: lightTheme.colors.onPrimaryContainer,
    textColor: lightTheme.colors.onPrimaryContainer,
  },
  surface: {
    background: lightTheme.surface[3],
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

const defaultEnabled = generateFullSpec(ExtendedFABBase, {
  background: lightTheme.colors.primaryContainer,
  elevation: lightTheme.elevation[1],
  // setting top to (16 - 1)px because of the offset caused by icons
  padding: '0px 20px 0px 20px',
  borderRadius: '16px',
  stateLayer: lightTheme.colors.onPrimaryContainer,
  textColor: lightTheme.colors.onPrimaryContainer,
  iconSize: '24px',
  height: '56px',
  minWidth: '80px',
  iconMarginRight: '12px',
  floatPosition: 'absolute',
  floatBottom: '16px',
  floatRight: '16px',
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

const specs = generateButtonColorsFromBase(
  {
    enabled: defaultEnabled,
    hover: defaultHover,
    active: defaultActive,
    focus: defaultFocus,
    disabled: defaultDisabled,
  },
  defaultColors
);

export default specs;
