export declare const addAlpha: (color: string, opacity: number) => string;
export declare const hexToRGB: (hex: string, alpha?: number) => string;
export declare const parseRGBA: (rgba: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const blend: (colorA: string, colorB: string, ...otherColors: string[]) => string;
export declare const generateInteractionStates: (baseColor: string) => {
    hover: string;
    focus: string;
    press: string;
    drag: string;
};
export declare const lightenDarkenColor: (col: string, amt: number) => string;
export declare const generateFullSpec: <T extends Record<string, string>>(baseSpec: T, detailSpec: Partial<T>, normalize?: boolean) => T;
export declare const combineLayers: (...layers: string[]) => string;
export declare const transformCSSKey: (key: string) => string;
export declare const normailzeInteractionState: (state: string) => string;
