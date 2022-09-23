import { addAlpha, generateFullSpec, lightTheme } from '@waterial/base';
import { WaterialTheme } from '@waterial/base/src/theme';

export const calculateSpec = () => {
  const currentTheme: WaterialTheme = globalThis.waterialTheme || lightTheme;

  const buttonBase = {
    height: '40px',
    borderRadius: '20px',
    background: 'rgba(0, 0, 0, 0)',
    elevation: currentTheme.elevation[0],
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 200ms',
    outline: 'none',
    borderWidth: '0px',
    borderStyle: 'solid',
    textColor: currentTheme.colors.primary,
    stateLayer: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 0, 0, 0)',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingRight: '24px',
    paddingLeft: '24px',
    iconMarginRight: '0px',
  };

  const elevatedEnabled = generateFullSpec(buttonBase, {
    background: currentTheme.surface[1],
    textColor: currentTheme.colors.primary,
    elevation: currentTheme.elevation[1],
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
    background: currentTheme.surface[2],
    stateLayer: currentTheme.colors.primary,
    elevation: currentTheme.elevation[2],
  });

  const elevatedActive = generateFullSpec(elevatedEnabled, {
    background: currentTheme.surface[1],
    stateLayer: currentTheme.colors.primary,
    elevation: currentTheme.elevation[1],
  });

  const elevatedFocus = generateFullSpec(elevatedEnabled, {
    stateLayer: currentTheme.colors.primary,
    elevation: currentTheme.elevation[1],
  });

  const elevatedDisabled = generateFullSpec(elevatedEnabled, {
    background: addAlpha(currentTheme.colors.onSurface, 0.12),
    textColor: addAlpha(currentTheme.colors.onSurface, 0.38),
    elevation: currentTheme.elevation[0],
  });

  const filledEnabled = generateFullSpec(buttonBase, {
    background: currentTheme.colors.primary,
    elevation: currentTheme.elevation[0],
    textColor: currentTheme.colors.onPrimary,
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
    elevation: currentTheme.elevation[1],
  });

  const filledActive = generateFullSpec(filledEnabled, {
    stateLayer: currentTheme.colors.onPrimary,
    elevation: currentTheme.elevation[0],
  });

  const filledFocus = generateFullSpec(filledEnabled, {
    stateLayer: currentTheme.colors.onPrimary,
    elevation: currentTheme.elevation[0],
  });

  const filledDisabled = generateFullSpec(filledEnabled, {
    background: addAlpha(currentTheme.colors.onSurface, 0.12),
    textColor: addAlpha(currentTheme.colors.onSurface, 0.38),
  });

  const tonalEnabled = generateFullSpec(buttonBase, {
    background: currentTheme.colors.secondaryContainer,
    elevation: currentTheme.elevation[0],
    textColor: currentTheme.colors.onSecondaryContainer,
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
    elevation: currentTheme.elevation[1],
    background: currentTheme.colors.secondaryContainer,
    stateLayer: currentTheme.colors.onSecondaryContainer,
  });

  const tonalActive = generateFullSpec(tonalEnabled, {
    elevation: currentTheme.elevation[0],
    stateLayer: currentTheme.colors.onSecondaryContainer,
  });

  const tonalFocus = generateFullSpec(tonalEnabled, {
    elevation: currentTheme.elevation[0],
    stateLayer: currentTheme.colors.onSecondaryContainer,
  });

  const tonalDisabled = generateFullSpec(tonalEnabled, {
    background: addAlpha(currentTheme.colors.onSurface, 0.12),
    textColor: addAlpha(currentTheme.colors.onSurface, 0.38),
  });

  const outlineEnabled = generateFullSpec(buttonBase, {
    borderWidth: '1px',
    borderColor: currentTheme.colors.outline,
    textColor: currentTheme.colors.primary,
    elevation: currentTheme.elevation[0],
    stateLayer: currentTheme.colors.primary,
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
    borderColor: currentTheme.colors.outline,
  });

  const outlineFocus = generateFullSpec(outlineEnabled, {
    borderColor: currentTheme.colors.outline,
  });

  const outlineDisabled = generateFullSpec(outlineEnabled, {
    borderColor: addAlpha(currentTheme.colors.onSurface, 0.12),
    textColor: addAlpha(currentTheme.colors.onSurface, 0.38),
    stateLayer: undefined,
  });

  const textEnabled = generateFullSpec(buttonBase, {
    paddingLeft: '12px',
    paddingRight: '12px',
    textColor: currentTheme.colors.primary,
    background: 'rgba(0, 0, 0, 0)',
    stateLayer: currentTheme.colors.primary,
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
    textColor: addAlpha(currentTheme.colors.onSurface, 0.38),
  });

  return {
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
};
