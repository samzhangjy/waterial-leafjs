import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { lightTheme, WaterialTheme } from '@waterial/base';

class Container extends LeafComponent {
  static watchedProps = ['bg'];
  currentTheme: WaterialTheme = globalThis.waterialTheme || lightTheme;

  constructor() {
    super();

    window.addEventListener('waterial-theme-change', () => {
      this.currentTheme = globalThis.waterialTheme;
      this.rerender();
    });
  }

  render() {
    return (
      <div className="container">
        <slot />
      </div>
    );
  }

  css() {
    const currentBackground =
      this.props.bg || this.currentTheme.colors.background;

    return css`
      .container {
        background: ${currentBackground};
        width: 100%;
        height: 100%;
      }
    `;
  }
}

registerComponent('waterial-container', Container);

export default Container;
