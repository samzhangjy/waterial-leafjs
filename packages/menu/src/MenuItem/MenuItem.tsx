import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { interactionStates } from '@waterial/base';
import { addAlpha } from '@waterial/base';
import Icon from '@waterial/icon';
import createRipple from '@waterial/ripple';
import { Label } from '@waterial/typography';
import { calculateSpec } from './specs';
import { generateMenuItemCSS } from './helper';
import Menu from '../Menu';

class MenuItem extends LeafComponent {
  static watchedProps = [
    'type',
    'disabled',
    'icon',
    'trailing-icon',
    'rtext',
    'submenu',
  ];
  specs = calculateSpec();

  constructor() {
    super();

    window.addEventListener('waterial-theme-change', () => {
      this.specs = calculateSpec();
      this.rerender();
    });
  }

  render() {
    const hasIcon = !this.parentElement.hasAttribute('no-icon');

    return (
      <button
        onClick={(e) => {
          if (this.props.disabled) return;
          createRipple(
            e,
            addAlpha(this.specs.active.stateLayer, interactionStates.press)
          );
          this.fireEvent(e);
        }}
        className={`menu-item ${
          hasIcon && !this.props.icon ? 'menu-item-icon' : ''
        } ${this.props['trailing-icon'] ? 'menu-item-full' : ''}`}
        disabled={this.props.disabled}
      >
        <Icon class="leading-icon" size="24px" with-text top="-3px">
          {this.props.icon}
        </Icon>
        {!this.props.submenu ? (
          <Label
            size="large"
            class={this.props['trailing-icon'] ? 'trailing-margin' : ''}
            inline
          >
            <slot></slot>
          </Label>
        ) : (
          <Menu class="submenu" show>
            <slot></slot>
          </Menu>
        )}
        <Label size="small" inline>
          {this.props.rtext}
        </Label>
        <Icon class="trailing-icon" size="24px" with-text top="-3px">
          {!this.props.submenu ? this.props['trailing-icon'] : 'arrow_right'}
        </Icon>
      </button>
    );
  }

  css() {
    return css`
      ${Object.keys(this.specs)
        .map((state) => generateMenuItemCSS(this.specs[state], state))
        .join('')}

      .submenu {
        display: none;
        left: 100%;
      }

      .menu-item:hover .submenu {
        display: block;
        position: absolute;
        top: 0px;
      }
    `;
  }
}

registerComponent('waterial-menu-item', MenuItem);

export default MenuItem;
