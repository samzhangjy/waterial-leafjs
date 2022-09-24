import { addAlpha, blend, generateFullSpec, interactionStates, normailzeInteractionState, transformCSSKey, } from '../index';
import { CSSMapping } from './theme';
const floatedProperties = ['position', 'right', 'bottom'];
export const generateTargetCSS = (spec, state, isFloated = false) => {
    let generated = '';
    let icons = '';
    if (state === 'active')
        state = 'press';
    for (const key in spec) {
        if (!spec[key])
            continue;
        if (key === 'background' && !spec.stateLayer) {
            generated += `background: ${spec[key]};`;
            continue;
        }
        if (key === 'stateLayer') {
            generated += `background: ${blend(spec.background, addAlpha(spec[key], interactionStates[state]))};`;
            continue;
        }
        if (key.startsWith('icon')) {
            const actualKey = key.slice(4).charAt(0).toLowerCase() + key.slice(5);
            icons += `.icon { ${transformCSSKey(actualKey)}: ${spec[key]} !important; }`;
            continue;
        }
        if (key in CSSMapping) {
            generated += `${CSSMapping[key]}: ${spec[key]};`;
            continue;
        }
        if (key in floatedProperties && !isFloated)
            continue;
        if (key.startsWith('float') && isFloated) {
            generated += `${key.slice(5).charAt(0).toLowerCase() + key.slice(6)}: ${spec[key]};`;
            continue;
        }
        generated += `${transformCSSKey(key)}: ${spec[key]};`;
    }
    if (state === 'hover')
        generated += 'cursor: pointer;';
    if (state === 'disabled')
        generated += 'cursor: not-allowed;';
    return `.button:${normailzeInteractionState(state)} {${generated}}${icons}`;
};
export const generateColorCollectionFromBase = (base, colors) => {
    const collection = {};
    for (const color in colors) {
        collection[color] = {};
        for (const state in base) {
            collection[color][state] = generateFullSpec(base[state], colors[color]);
        }
    }
    return collection;
};
//# sourceMappingURL=button.js.map