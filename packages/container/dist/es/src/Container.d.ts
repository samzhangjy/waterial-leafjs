import { LeafComponent } from '@leaf-web/core';
import { WaterialTheme } from '@waterial/base';
declare class Container extends LeafComponent {
    static watchedProps: string[];
    currentTheme: WaterialTheme;
    constructor();
    render(): any;
    css(): string;
}
export default Container;
