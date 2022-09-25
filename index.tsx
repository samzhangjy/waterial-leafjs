import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import Fab from '@waterial/fab';
import Button from '@waterial/button';
import ExtendedFAB from '@waterial/extended-fab';
import { initializeTheme } from '@waterial/base';
import Container from '@waterial/container';
import { Menu, MenuItem } from '@waterial/menu';
import { Label } from '@waterial/typography';

class Home extends LeafComponent {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };
  }

  onMounted() {
    initializeTheme();
  }

  render() {
    return (
      <Container class="container">
        <Fab type="large">add</Fab>
        <Button
          type="elevated"
          icon="add"
          onClick={() => (this.state.showMenu = !this.state.showMenu)}
        >
          Button
        </Button>
        <Button type="text">Button</Button>
        <Menu show={this.state.showMenu}>
          {[...Array(3).keys()].map((val) => (
            <MenuItem icon="add" trailing-text="⌘C">
              Item {val + 1}
            </MenuItem>
          ))}
        </Menu>
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
