import { css, LeafComponent, registerComponent } from "@leaf-web/core";
import { interactionStates } from "../../tokens";
import { addAlpha } from "../../utils";
import Icon from "../Icon";
import { createRipple } from "../Ripple";
import Label from "../Typography/Label";
import specs, { generateTargetCSS } from "./specs";

class Button extends LeafComponent {
  static watchedProps = ["type", "disabled", "icon"];

  constructor() {
    super();
  }

  render() {
    return (
      <button
        onClick={(e) => {
          if (this.props.disabled) return;
          createRipple(
            e,
            addAlpha(
              specs[this.props.type]?.active?.stateLayer,
              interactionStates.press
            )
          );
          this.fireEvent(e);
        }}
        className={`button ${`button-${this.props.type}`} ${
          this.props.icon && "button-icon"
        }`}
        disabled={this.props.disabled}
      >
        <Icon class="icon" size="18px">
          {this.props.icon}
        </Icon>
        <Label size="large" inline>
          <slot></slot>
        </Label>
      </button>
    );
  }

  css() {
    const currentSpec =
      specs[`${this.props.type}${this.props.icon ? "Icon" : ""}`];
    if (!currentSpec) return css``;
    return css`
      ${Object.keys(currentSpec)
        .map((state) => generateTargetCSS(currentSpec[state], state))
        .join("")}
    `;
  }
}

registerComponent("waterial-button", Button);

export default Button;
