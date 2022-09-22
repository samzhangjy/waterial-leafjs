import { LeafComponent, registerComponent } from '@leaf-web/core';
import Fab from '@waterial/fab';
import Button from '@waterial/button';
import Icon from '@waterial/icon';

class Home extends LeafComponent {
  render() {
    return (
      <div>
        <Fab>add</Fab>
        <Button type="elevated" icon="add">
          Button
        </Button>
        <Icon>add</Icon>
      </div>
    );
  }
}

export default registerComponent('waterial-home', Home);
