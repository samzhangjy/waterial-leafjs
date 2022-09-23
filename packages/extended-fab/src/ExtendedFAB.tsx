import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { addAlpha, interactionStates } from '@waterial/base';
import Icon from '@waterial/icon';
import createRipple from '@waterial/ripple';
import { Label } from '@waterial/typography';
import { generateButtonCSS } from '@waterial/base';
import specs from './specs';

class ExtendedFAB extends LeafComponent {
  static watchedProps = ['type', 'disabled', 'color', 'icon', 'no-float'];

  constructor() {
    super();
  }

  render() {
    const currentColor = this.props.color ?? 'primary';

    return (
      <button
        onClick={(e) => {
          if (this.props.disabled) return;
          createRipple(
            e,
            addAlpha(
              specs[currentColor]?.active?.stateLayer,
              interactionStates.press
            ),
            400
          );
          this.fireEvent(e);
        }}
        className="button"
        disabled={this.props.disabled}
      >
        {this.props.icon && (
          <Icon
            class="icon"
            size={specs[currentColor].enabled.iconSize ?? '24px'}
            with-text
          >
            {this.props.icon}
          </Icon>
        )}
        <Label size="large" inline>
          <slot></slot>
        </Label>
      </button>
    );
  }

  css() {
    const currentSpec = specs[this.props.color ?? 'primary'];

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

registerComponent('waterial-extended-fab', ExtendedFAB);

export default ExtendedFAB;
