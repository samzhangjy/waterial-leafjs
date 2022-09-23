import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { interactionStates } from '@waterial/base';
import { addAlpha } from '@waterial/base';
import Icon from '@waterial/icon';
import createRipple from '@waterial/ripple';
import { generateButtonCSS } from '@waterial/base';
import { calculateSpec } from './specs';

class Fab extends LeafComponent {
  static watchedProps = ['type', 'disabled', 'color', 'no-float'];
  specs = calculateSpec();

  constructor() {
    super();

    window.addEventListener('waterial-theme-change', () => {
      this.specs = calculateSpec();
      this.rerender();
    });
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
              this.specs[currentType][color]?.active?.stateLayer,
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
          size={this.specs[currentType][color].enabled.iconSize ?? '24px'}
        >
          <slot></slot>
        </Icon>
      </button>
    );
  }

  css() {
    const currentColor = this.props.color ?? 'primary';
    const currentSpec = this.specs[this.props.type ?? 'default'][currentColor];

    if (!currentSpec) return css``;

    return css`
      ${Object.keys(currentSpec)
        .map((state) =>
          generateButtonCSS(currentSpec[state], state, !this.props['no-float'])
        )
        .join('')}
    `;
  }
}

registerComponent('waterial-fab', Fab);

export default Fab;
