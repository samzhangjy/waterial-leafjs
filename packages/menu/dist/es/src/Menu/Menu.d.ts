import { LeafComponent } from '@leaf-web/core';
declare class Menu extends LeafComponent {
    static watchedProps: string[];
    specs: {
        background: string;
        minWidth: string;
        maxWidth: string;
        borderRadius: string;
        paddingTop: string;
        paddingBottom: string;
        width: string;
        elevation: string;
    };
    constructor();
    render(): any;
    css(): string;
}
export default Menu;
