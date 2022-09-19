import { css, LeafComponent, registerComponent } from "@leaf-web/core";
import { typography } from "../../tokens";

class Label extends LeafComponent {
  static watchedProps = ["size", "inline"];

  constructor() {
    super();
  }

  render() {
    return (
      <span className={`label-${this.props.size}`}>
        <slot></slot>
      </span>
    );
  }

  css() {
    const currentSpec = typography.label[this.props.size ?? "medium"];
    return css`
      .label-${this.props.size} {
        font-family: ${currentSpec.family};
        font-size: ${currentSpec.size};
        font-weight: ${currentSpec.weight};
        font-style: ${currentSpec.style};
        letter-spacing: ${currentSpec.letterSpacing};
        line-height: ${currentSpec.lineHeight};
        ${this.props.inline ? "display: inline;" : "display: block"};
      }
    `;
  }
}

export default registerComponent("waterial-label", Label);
