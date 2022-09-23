import { LeafComponent } from '@leaf-web/core';
declare class Fab extends LeafComponent {
    static watchedProps: string[];
    specs: {
        default: Record<string, Record<string, {
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
            floatPosition: string;
            floatBottom: string;
            floatRight: string;
            zIndex: string;
        }>>;
        small: Record<string, Record<string, {
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
            floatPosition: string;
            floatBottom: string;
            floatRight: string;
            zIndex: string;
        }>>;
        large: Record<string, Record<string, {
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
            floatPosition: string;
            floatBottom: string;
            floatRight: string;
            zIndex: string;
        }>>;
    };
    constructor();
    render(): any;
    css(): string;
}
export default Fab;
