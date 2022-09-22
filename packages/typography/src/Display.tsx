import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { typography } from '@waterial/base';

class Display extends LeafComponent {
  static watchedProps = ['size', 'inline', 'as'];

  constructor() {
    super();
  }

  render() {
    const Container = `${this.props.as || 'h1'}`;
    return (
      <Container className={`display-${this.props.size}`}>
        <slot></slot>
      </Container>
    );
  }

  css() {
    const currentSpec = typography.display[this.props.size ?? 'medium'];
    return css`
      .display-${this.props.size} {
        font-family: ${currentSpec.family};
        font-size: ${currentSpec.size};
        font-weight: ${currentSpec.weight};
        font-style: ${currentSpec.style};
        letter-spacing: ${currentSpec.letterSpacing};
        line-height: ${currentSpec.lineHeight};
        ${this.props.inline ? 'display: inline;' : 'display: block'};
      }
    `;
  }
}

export default registerComponent('waterial-display', Display);
