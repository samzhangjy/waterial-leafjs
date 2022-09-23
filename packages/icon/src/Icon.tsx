import { LeafComponent, registerComponent } from '@leaf-web/core';

class Icon extends LeafComponent {
  static watchedProps = ['size', 'class', 'with-text'];

  render() {
    return (
      <i className={'material-symbols-outlined icon'}>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <slot />
      </i>
    );
  }

  css() {
    return `
      .icon {
        display: inline;
        vertical-align: text-top;
        ${
          // a real hacky way to center the icon
          this.props['with-text']
            ? `margin-top: calc(-${this.props.size} * ${Math.ceil(
                parseInt(this.props.size) / 18
              )} * 0.115)`
            : ''
        };
        font-size: ${this.props.size} !important;
      }
    `;
  }
}

registerComponent('waterial-icon', Icon);

export default Icon;
