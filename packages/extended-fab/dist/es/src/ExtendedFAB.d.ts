import { LeafComponent } from '@leaf-web/core';
declare class ExtendedFAB extends LeafComponent {
    static watchedProps: string[];
    specs: Record<string, Record<string, {
        position: string;
        overflow: string;
        background: string;
        textColor: string;
        padding: string;
        elevation: string;
        border: string;
        borderRadius: string;
        stateLayer: string;
        transition: string;
        iconSize: string;
        height: string;
        minWidth: string;
        iconMarginRight: string;
        floatPosition: string;
        floatBottom: string;
        floatRight: string;
        zIndex: string;
    }>>;
    constructor();
    render(): any;
    css(): string;
}
export default ExtendedFAB;
