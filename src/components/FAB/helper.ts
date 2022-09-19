import { baseAttributes } from "@leaf-web/types/dist/elements/base";
import { interactionStates } from "src/tokens";
import {
  addAlpha,
  blend,
  generateFullSpec,
  normailzeInteractionState,
  transformCSSKey,
} from "src/utils";

const CSSMapping: Record<string, string> = {
  textColor: "color",
  elevation: "box-shadow",
};

export const generateTargetCSS = <T extends Record<string, string>>(
  spec: T,
  state: string
) => {
  let generated = "";
  let icons = "";
  if (state === "active") state = "press";
  for (const key in spec) {
    if (!spec[key]) continue;
    if (key === "background" && !spec.stateLayer) {
      generated += `background: ${spec[key]};`;
      continue;
    }
    if (key === "stateLayer") {
      generated += `background: ${blend(
        spec.background,
        addAlpha(spec[key], interactionStates[state])
      )};`;
      continue;
    }
    // if (key === "iconSize") continue;
    if (key.startsWith("icon")) {
      const actualKey = key.slice(4).charAt(0).toLowerCase() + key.slice(5);
      icons += `.icon { ${transformCSSKey(actualKey)}: ${
        spec[key]
      } !important; }`;
      continue;
    }
    if (key in CSSMapping) {
      generated += `${CSSMapping[key]}: ${spec[key]};`;
      continue;
    }
    generated += `${transformCSSKey(key)}: ${spec[key]};`;
  }
  if (state === "hover") generated += "cursor: pointer;";
  if (state === "disabled") generated += "cursor: not-allowed;";
  return `.button:${normailzeInteractionState(state)} {${generated}}${icons}`;
};

export const generateColorCollectionFromBase = <
  T extends Record<string, string>
>(
  base: Record<string, T>,
  colors: Record<string, Partial<T>>
): Record<keyof typeof colors, Record<keyof typeof base, T>> => {
  const collection = {};

  for (const color in colors) {
    collection[color] = {};
    for (const state in base) {
      collection[color][state] = generateFullSpec(base[state], colors[color]);
    }
  }

  return collection;
};
