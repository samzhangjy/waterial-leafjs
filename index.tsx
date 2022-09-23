import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import Fab from '@waterial/fab';
import Button from '@waterial/button';
import ExtendedFAB from '@waterial/extended-fab';
import { initializeTheme } from '@waterial/base';
import Container from '@waterial/container';

class Home extends LeafComponent {
  onMounted() {
    initializeTheme();
  }
  render() {
    return (
      <Container class="container">
        <Fab type="large">add</Fab>
        <Button type="elevated" icon="add">
          Button
        </Button>
        <div className="fab-container">
          <ExtendedFAB icon="edit" color="tertiary" no-float>
            Extended FAB
          </ExtendedFAB>
          <ExtendedFAB no-float>Extended</ExtendedFAB>
        </div>
      </Container>
    );
  }

  css() {
    return css`
      .fab-container {
        position: relative;
        height: 500vh;
      }

      .container {
        height: 100vh;
      }
    `;
  }
}

export default registerComponent('waterial-home', Home);
