import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { interactionStates } from '@waterial/base';
import { addAlpha } from '@waterial/base';
import Icon from '@waterial/icon';
import createRipple from '@waterial/ripple';
import { generateTargetCSS } from './helper';
import specs from './specs';

class Fab extends LeafComponent {
  static watchedProps = ['type', 'disabled', 'color'];

  constructor() {
    super();
  }

  render() {
    const currentType = this.props.type ?? 'default';
    const color = this.props.color ?? 'primary';

    return (
      <button
        onClick={(e) => {
          if (this.props.disabled) return;
          createRipple(
            e,
            addAlpha(
              specs[currentType][color]?.active?.stateLayer,
              interactionStates.press
            ),
            400
          );
          this.fireEvent(e);
        }}
        className={`button ${`button-${currentType}`}`}
        disabled={this.props.disabled}
      >
        <Icon
          class="icon"
          size={specs[currentType][color].enabled.iconSize ?? '24px'}
        >
          <slot></slot>
        </Icon>
      </button>
    );
  }

  css() {
    const currentColor = this.props.color ?? 'primary';
    const currentSpec = specs[this.props.type ?? 'default'][currentColor];

    if (!currentSpec) return css``;

    return css`
      ${Object.keys(currentSpec)
        .map((state) => generateTargetCSS(currentSpec[state], state))
        .join('')}
    `;
  }
}

registerComponent('waterial-fab', Fab);

export default Fab;
