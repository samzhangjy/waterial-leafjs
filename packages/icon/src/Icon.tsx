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
        vertical-align: top;
        display: inline;
        position: relative;
        ${
          this.props['with-text']
            ? `top: calc(${this.props.size} * 0.115) !important;`
            : ''
        }
        font-size: ${this.props.size} !important;
      }
    `;
  }
}

registerComponent('waterial-icon', Icon);

export default Icon;
