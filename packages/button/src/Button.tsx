import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { interactionStates } from '@waterial/base';
import { addAlpha } from '@waterial/base';
import Icon from '@waterial/icon';
import createRipple from '@waterial/ripple';
import { Label } from '@waterial/typography';
import { calculateSpec } from './specs';
import { generateButtonCSS } from '@waterial/base';

class Button extends LeafComponent {
  static watchedProps = ['type', 'disabled', 'icon'];
  specs = calculateSpec();

  constructor() {
    super();

    window.addEventListener('waterial-theme-change', () => {
      this.specs = calculateSpec();
      this.rerender();
    });
  }

  render() {
    const currentType = this.props.type || 'filled';

    return (
      <button
        onClick={(e) => {
          if (this.props.disabled) return;
          createRipple(
            e,
            addAlpha(
              this.specs[currentType]?.active?.stateLayer,
              interactionStates.press
            )
          );
          this.fireEvent(e);
        }}
        className={`button ${`button-${this.props.type}`} ${
          this.props.icon && 'button-icon'
        }`}
        disabled={this.props.disabled}
      >
        <Icon class="icon" size="18px" with-text>
          {this.props.icon}
        </Icon>
        <Label size="large" inline>
          <slot></slot>
        </Label>
      </button>
    );
  }

  css() {
    const currentColor = this.props.type || 'filled';
    const currentSpec =
      this.specs[`${currentColor}${this.props.icon ? 'Icon' : ''}`];

    if (!currentSpec) return css``;

    return css`
      ${Object.keys(currentSpec)
        .map((state) => generateButtonCSS(currentSpec[state], state))
        .join('')}
    `;
  }
}

registerComponent('waterial-button', Button);

export default Button;
