import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { generateMenuCSS } from './helper';
import { calculateSpec } from './specs';

class Menu extends LeafComponent {
  static watchedProps = ['no-icon', 'show'];
  specs = calculateSpec();

  constructor() {
    super();

    window.addEventListener('waterial-theme-change', () => {
      this.specs = calculateSpec();
      this.rerender();
    });
  }

  render() {
    return (
      <div className={`menu ${!this.props.show ? 'hide' : ''}`}>
        <slot></slot>
      </div>
    );
  }

  css() {
    return css`
      ${generateMenuCSS(this.specs)}

      .hide {
        display: none;
      }
    `;
  }
}

registerComponent('waterial-menu', Menu);

export default Menu;
