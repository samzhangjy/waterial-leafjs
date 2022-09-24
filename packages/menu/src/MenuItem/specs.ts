import { generateFullSpec, lightTheme } from '@waterial/base';
import { WaterialTheme } from '@waterial/base/src/theme';

export const calculateSpec = () => {
  const currentTheme: WaterialTheme = globalThis.waterialTheme || lightTheme;

  const menuItemBase = {
    background: 'rgba(0, 0, 0, 0)',
    padding: 'none',
    fontSize: '1rem',
    height: 'auto',
    border: 'none',
    outline: 'none',
    maxWidth: '280px',
    minWidth: '112px',
    width: 'fit-content',
    textAlign: 'left',
    stateLayer: 'rgba(0, 0, 0, 0)',
    position: 'relative',
    transition: 'all 200ms',
    // overflow: 'hidden',
    display: 'block',
    textColor: 'auto',
    leadingIconColor: 'auto',
    leadingIconMargin: 'auto',
    trailingIconColor: 'auto',
    trailingIconMargin: 'auto',
    trailingIconFloat: 'right',
    iconPaddingLeft: 'none',
    fullWidth: 'auto',
  };

  const menuItemEnabled = generateFullSpec(menuItemBase, {
    background: currentTheme.surface[2],
    height: '48px',
    padding: '0 12px 0 12px',
    textColor: currentTheme.colors.onSurface,
    leadingIconColor: currentTheme.colors.onSurfaceVariant,
    leadingIconMargin: '0 12px 0 0',
    trailingIconColor: currentTheme.colors.onSurfaceVariant,
    trailingIconMargin: '0 0 0 30px',
    iconPaddingLeft: '36px',
    width: '100%',
  });

  const menuItemHover = generateFullSpec(menuItemEnabled, {
    background: currentTheme.surface[2],
    stateLayer: currentTheme.colors.onSurface,
  });

  const menuItemActive = generateFullSpec(menuItemEnabled, {
    background: currentTheme.surface[2],
    stateLayer: currentTheme.colors.onSurface,
  });

  const menuItemFocus = generateFullSpec(menuItemEnabled, {
    background: currentTheme.surface[2],
    stateLayer: currentTheme.colors.onSurface,
  });

  return {
    enabled: menuItemEnabled,
    hover: menuItemHover,
    active: menuItemActive,
    focus: menuItemFocus,
  };
};
