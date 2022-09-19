import { LeafComponent, registerComponent } from "@leaf-web/core";

class Icon extends LeafComponent {
  static watchedProps = ["size", "class"];

  render() {
    return (
      <i
        className={`material-symbols-outlined icon`}
      >
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
        top: 11.5% !important;
        font-size: ${this.props.size} !important;
      }
    `;
  }
}

export default registerComponent("waterial-icon", Icon);
