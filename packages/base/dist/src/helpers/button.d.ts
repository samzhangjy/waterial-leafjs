export declare const generateTargetCSS: <T extends Record<string, string>>(spec: T, state: string, isFloated?: boolean) => string;
export declare const generateColorCollectionFromBase: <T extends Record<string, string>>(base: Record<string, T>, colors: Record<string, Partial<T>>) => Record<string, Record<string, T>>;
