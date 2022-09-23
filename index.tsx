import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import Fab from '@waterial/fab';
import Button from '@waterial/button';
import ExtendedFAB from '@waterial/extended-fab';

class Home extends LeafComponent {
  render() {
    return (
      <div>
        <Fab>add</Fab>
        <Button type="elevated" icon="add">
          Button
        </Button>
        <div className="fab-container">
          <ExtendedFAB icon="edit" color="tertiary">
            Extended FAB
          </ExtendedFAB>
          <ExtendedFAB no-float>Extended</ExtendedFAB>
        </div>
      </div>
    );
  }

  css() {
    return css`
      .fab-container {
        position: relative;
        height: 50vh;
      }
    `;
  }
}

export default registerComponent('waterial-home', Home);
