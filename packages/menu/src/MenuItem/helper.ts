import {
  addAlpha,
  blend,
  CSSMapping,
  interactionStates,
  normailzeInteractionState,
  transformCSSKey,
} from '@waterial/base';

export const generateMenuItemCSS = <T extends Record<string, string>>(
  spec: T,
  state: string
) => {
  if (state === 'active') state = 'press';
  let generated = '';
  let leadingIcon = '';
  let trailingIcon = '';
  let withIcon = '';
  let fullWidth = '';

  for (const key in spec) {
    if (!spec[key]) continue;
    if (key === 'stateLayer') {
      generated += `background: ${blend(
        spec.background,
        addAlpha(spec[key], interactionStates[state])
      )};`;
      continue;
    }
    if (key.startsWith('leadingIcon')) {
      const actualKey = key.slice(11).charAt(0).toLowerCase() + key.slice(12);
      leadingIcon += `${transformCSSKey(actualKey)}: ${spec[key]} !important;`;
      continue;
    }
    if (key.startsWith('trailingIcon')) {
      const actualKey = key.slice(12).charAt(0).toLowerCase() + key.slice(13);
      trailingIcon += `${transformCSSKey(actualKey)}: ${spec[key]} !important;`;
      continue;
    }
    if (key.startsWith('icon')) {
      const actualKey = key.slice(4).charAt(0).toLowerCase() + key.slice(5);
      withIcon += `${transformCSSKey(actualKey)}: ${spec[key]} !important;`;
      continue;
    }
    if (key.startsWith('full')) {
      const actualKey = key.slice(4).charAt(0).toLowerCase() + key.slice(5);
      fullWidth += `${transformCSSKey(actualKey)}: ${spec[key]} !important;`;
      continue;
    }
    if (key in CSSMapping) {
      generated += `${CSSMapping[key]}: ${spec[key]};`;
      continue;
    }
    generated += `${transformCSSKey(key)}: ${spec[key]};`;
  }

  if (state === 'hover') generated += 'cursor: pointer;';
  if (state === 'disabled') generated += 'cursor: not-allowed;';

  if (state !== 'enabled') {
    return `.menu-item:${normailzeInteractionState(state)}{${generated}}`;
  }

  return `
    .menu-item:${normailzeInteractionState(state)}{${generated}}
    .leading-icon{${leadingIcon}}
    .trailing-icon{${trailingIcon}}
    .menu-item-icon{${withIcon}}
    .menu-item-full{${fullWidth}}
  `;
};
