export {
  interactionStates,
  lightTheme,
  darkTheme,
  WaterialTheme,
} from './theme';

export {
  addAlpha,
  blend,
  combineLayers,
  generateFullSpec,
  generateInteractionStates,
  hexToRGB,
  lightenDarkenColor,
  normailzeInteractionState,
  parseRGBA,
  transformCSSKey,
} from './utils';

export {
  generateTargetCSS as generateButtonCSS,
  generateColorCollectionFromBase as generateButtonColorsFromBase,
} from './helpers/button';

export { default as typography } from './typography';
export { default as ref } from './ref';

export {
  initializeTheme,
  getCurrentThemeName,
  CSSMapping,
} from './helpers/theme';
