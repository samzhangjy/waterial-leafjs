import { addAlpha, generateFullSpec, lightTheme } from '@waterial/base';

const buttonBase = {
  height: '40px',
  borderRadius: '20px',
  background: 'rgba(0, 0, 0, 0)',
  elevation: lightTheme.elevation[0],
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 200ms',
  outline: 'none',
  borderWidth: '0px',
  borderStyle: 'solid',
  textColor: lightTheme.colors.primary,
  stateLayer: 'rgba(0, 0, 0, 0)',
  borderColor: 'rgba(0, 0, 0, 0)',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingRight: '24px',
  paddingLeft: '24px',
  iconMarginRight: '0px',
};

const elevatedEnabled = generateFullSpec(buttonBase, {
  background: lightTheme.surface[1],
  textColor: lightTheme.colors.primary,
  elevation: lightTheme.elevation[1],
});

const elevatedIconEnabled = generateFullSpec(
  elevatedEnabled,
  {
    iconMarginRight: '8px !preserve',
    paddingLeft: '16px !preserve',
  },
  false
);

const elevatedHover = generateFullSpec(elevatedEnabled, {
  background: lightTheme.surface[2],
  stateLayer: lightTheme.colors.primary,
  elevation: lightTheme.elevation[2],
});

const elevatedActive = generateFullSpec(elevatedEnabled, {
  background: lightTheme.surface[1],
  stateLayer: lightTheme.colors.primary,
  elevation: lightTheme.elevation[1],
});

const elevatedFocus = generateFullSpec(elevatedEnabled, {
  stateLayer: lightTheme.colors.primary,
  elevation: lightTheme.elevation[1],
});

const elevatedDisabled = generateFullSpec(elevatedEnabled, {
  background: addAlpha(lightTheme.colors.onSurface, 0.12),
  textColor: addAlpha(lightTheme.colors.onSurface, 0.38),
  elevation: lightTheme.elevation[0],
});

const filledEnabled = generateFullSpec(buttonBase, {
  background: lightTheme.colors.primary,
  elevation: lightTheme.elevation[0],
  textColor: lightTheme.colors.onPrimary,
});

const filledIconEnabled = generateFullSpec(
  filledEnabled,
  {
    iconMarginRight: '8px !preserve',
    paddingLeft: '16px !preserve',
  },
  false
);

const filledHover = generateFullSpec(filledEnabled, {
  elevation: lightTheme.elevation[1],
});

const filledActive = generateFullSpec(filledEnabled, {
  stateLayer: lightTheme.colors.onPrimary,
  elevation: lightTheme.elevation[0],
});

const filledFocus = generateFullSpec(filledEnabled, {
  stateLayer: lightTheme.colors.onPrimary,
  elevation: lightTheme.elevation[0],
});

const filledDisabled = generateFullSpec(filledEnabled, {
  background: addAlpha(lightTheme.colors.onSurface, 0.12),
  textColor: addAlpha(lightTheme.colors.onSurface, 0.38),
});

const tonalEnabled = generateFullSpec(buttonBase, {
  background: lightTheme.colors.secondaryContainer,
  elevation: lightTheme.elevation[0],
  textColor: lightTheme.colors.onSecondaryContainer,
});

const tonalIconEnabled = generateFullSpec(
  tonalEnabled,
  {
    iconMarginRight: '8px !preserve',
    paddingLeft: '16px !preserve',
  },
  false
);

const tonalHover = generateFullSpec(tonalEnabled, {
  elevation: lightTheme.elevation[1],
  background: lightTheme.colors.secondaryContainer,
  stateLayer: lightTheme.colors.onSecondaryContainer,
});

const tonalActive = generateFullSpec(tonalEnabled, {
  elevation: lightTheme.elevation[0],
  stateLayer: lightTheme.colors.onSecondaryContainer,
});

const tonalFocus = generateFullSpec(tonalEnabled, {
  elevation: lightTheme.elevation[0],
  stateLayer: lightTheme.colors.onSecondaryContainer,
});

const tonalDisabled = generateFullSpec(tonalEnabled, {
  background: addAlpha(lightTheme.colors.onSurface, 0.12),
  textColor: addAlpha(lightTheme.colors.onSurface, 0.38),
});

const outlineEnabled = generateFullSpec(buttonBase, {
  borderWidth: '1px',
  borderColor: lightTheme.colors.outline,
  textColor: lightTheme.colors.primary,
  elevation: lightTheme.elevation[0],
  stateLayer: lightTheme.colors.primary,
});

const outlineIconEnabled = generateFullSpec(
  outlineEnabled,
  {
    iconMarginRight: '8px !preserve',
    paddingLeft: '16px !preserve',
  },
  false
);

const outlineHover = generateFullSpec(outlineEnabled, {});

const outlineActive = generateFullSpec(outlineEnabled, {
  borderColor: lightTheme.colors.outline,
});

const outlineFocus = generateFullSpec(outlineEnabled, {
  borderColor: lightTheme.colors.outline,
});

const outlineDisabled = generateFullSpec(outlineEnabled, {
  borderColor: addAlpha(lightTheme.colors.onSurface, 0.12),
  textColor: addAlpha(lightTheme.colors.onSurface, 0.38),
  stateLayer: undefined,
});

const textEnabled = generateFullSpec(buttonBase, {
  paddingLeft: '12px',
  paddingRight: '12px',
  textColor: lightTheme.colors.primary,
  background: 'rgba(0, 0, 0, 0)',
  stateLayer: lightTheme.colors.primary,
  height: '40px',
});

const textIconEnabled = generateFullSpec(
  textEnabled,
  {
    iconMarginRight: '8px !preserve',
    paddingRight: '16px !preserve',
  },
  false
);

const textHover = generateFullSpec(textEnabled, {});

const textActive = generateFullSpec(textEnabled, {});

const textFocus = generateFullSpec(textEnabled, {});

const textDisabled = generateFullSpec(textEnabled, {
  textColor: addAlpha(lightTheme.colors.onSurface, 0.38),
});

const specs = {
  elevated: {
    enabled: elevatedEnabled,
    hover: elevatedHover,
    active: elevatedActive,
    focus: elevatedFocus,
    disabled: elevatedDisabled,
  },
  elevatedIcon: {
    enabled: generateFullSpec(elevatedEnabled, elevatedIconEnabled),
    hover: generateFullSpec(elevatedIconEnabled, elevatedHover),
    active: generateFullSpec(elevatedIconEnabled, elevatedActive),
    focus: generateFullSpec(elevatedIconEnabled, elevatedFocus),
    disabled: generateFullSpec(elevatedIconEnabled, elevatedDisabled),
  },
  filled: {
    enabled: filledEnabled,
    hover: filledHover,
    active: filledActive,
    focus: filledFocus,
    disabled: filledDisabled,
  },
  filledIcon: {
    enabled: generateFullSpec(filledEnabled, filledIconEnabled),
    hover: generateFullSpec(filledIconEnabled, filledHover),
    active: generateFullSpec(filledIconEnabled, filledActive),
    focus: generateFullSpec(filledIconEnabled, filledFocus),
    disabled: generateFullSpec(filledIconEnabled, filledDisabled),
  },
  tonal: {
    enabled: tonalEnabled,
    hover: tonalHover,
    active: tonalActive,
    focus: tonalFocus,
    disabled: tonalDisabled,
  },
  tonalIcon: {
    enabled: generateFullSpec(tonalEnabled, tonalIconEnabled),
    hover: generateFullSpec(tonalIconEnabled, tonalHover),
    active: generateFullSpec(tonalIconEnabled, tonalActive),
    focus: generateFullSpec(tonalIconEnabled, tonalFocus),
    disabled: generateFullSpec(tonalIconEnabled, tonalDisabled),
  },
  outline: {
    enabled: outlineEnabled,
    hover: outlineHover,
    active: outlineActive,
    focus: outlineFocus,
    disabled: outlineDisabled,
  },
  outlineIcon: {
    enabled: generateFullSpec(outlineEnabled, outlineIconEnabled),
    hover: generateFullSpec(outlineIconEnabled, outlineHover),
    active: generateFullSpec(outlineIconEnabled, outlineActive),
    focus: generateFullSpec(outlineIconEnabled, outlineFocus),
    disabled: generateFullSpec(outlineIconEnabled, outlineDisabled),
  },
  text: {
    enabled: textEnabled,
    hover: textHover,
    active: textActive,
    focus: textFocus,
    disabled: textDisabled,
  },
  textIcon: {
    enabled: generateFullSpec(textEnabled, textIconEnabled),
    hover: generateFullSpec(textIconEnabled, textHover),
    active: generateFullSpec(textIconEnabled, textActive),
    focus: generateFullSpec(textIconEnabled, textFocus),
    disabled: generateFullSpec(textIconEnabled, textDisabled),
  },
};

export default specs;
