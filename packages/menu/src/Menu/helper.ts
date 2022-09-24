import { CSSMapping, transformCSSKey } from '@waterial/base';

export const generateMenuCSS = <T extends Record<string, string>>(spec: T) => {
  let generated = '';
  for (const key in spec) {
    if (!spec[key]) continue;
    if (key in CSSMapping) {
      generated += `${CSSMapping[key]}: ${spec[key]};`;
      continue;
    }
    generated += `${transformCSSKey(key)}: ${spec[key]};`;
  }
  return `.menu{${generated}}`;
};
