import { css, LeafComponent, registerComponent } from "@leaf-web/core";
import { lightTheme } from "./tokens";
import Button from "./components/Button/Button";
import Display from "./components/Typography/Display";
import Fab from "./components/FAB";

class MyApp extends LeafComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Display size="large">Buttons</Display>
        <Button type="elevated">Elevated button</Button>
        <Button type="filled">Filled button</Button>
        <Button type="tonal">Tonal button</Button>
        <Button type="outline">Outline button</Button>
        <Button type="text">Text button</Button>
        <br />
        <br />
        <Button type="elevated" disabled>
          Elevated button
        </Button>
        <Button type="filled" disabled>
          Filled button
        </Button>
        <Button type="tonal" disabled>
          Tonal button
        </Button>
        <Button type="outline" disabled>
          Outline button
        </Button>
        <Button type="text" disabled>
          Text button
        </Button>
        <br />
        <br />
        <Button type="elevated" icon="add">
          Elevated button
        </Button>
        <Button type="filled" icon="add">
          Filled button
        </Button>
        <Button type="tonal" icon="add">
          Tonal button
        </Button>
        <Button type="outline" icon="add">
          Outline button
        </Button>
        <Button type="text" icon="add">
          Text button
        </Button>
        <br />
        <br />
        <Button type="elevated" icon="add" disabled>
          Elevated button
        </Button>
        <Button type="filled" icon="add" disabled>
          Filled button
        </Button>
        <Button type="tonal" icon="add" disabled>
          Tonal button
        </Button>
        <Button type="outline" icon="add" disabled>
          Outline button
        </Button>
        <Button type="text" icon="add" disabled>
          Text button
        </Button>
        <br /><br />
        <Fab>edit</Fab>
        <Fab color="secondary">edit</Fab>
        <Fab color="surface">edit</Fab>
        <Fab color="tertiary">edit</Fab>
        <br /><br />
        <Fab disabled>edit</Fab>
        <Fab color="secondary" disabled>edit</Fab>
        <Fab color="surface" disabled>edit</Fab>
        <Fab color="tertiary" disabled>edit</Fab>
        <br /><br />
        <Fab type="small">edit</Fab>
        <Fab color="secondary" type="small">edit</Fab>
        <Fab color="surface" type="small">edit</Fab>
        <Fab color="tertiary" type="small">edit</Fab>
        <br /><br />
        <Fab type="small" disabled>edit</Fab>
        <Fab color="secondary" type="small" disabled>edit</Fab>
        <Fab color="surface" type="small" disabled>edit</Fab>
        <Fab color="tertiary" type="small" disabled>edit</Fab>
        <br /><br />
        <Fab type="large">edit</Fab>
        <Fab color="secondary" type="large">edit</Fab>
        <Fab color="surface" type="large">edit</Fab>
        <Fab color="tertiary" type="large">edit</Fab>
        <br /><br />
        <Fab type="large" disabled>edit</Fab>
        <Fab color="secondary" type="large" disabled>edit</Fab>
        <Fab color="surface" type="large" disabled>edit</Fab>
        <Fab color="tertiary" type="large" disabled>edit</Fab>
      </div>
    );
  }

  css() {
    return css`
      .container {
        background-color: ${lightTheme.colors.background};
        height: 100vh;
      }
    `;
  }
}

registerComponent("my-app", MyApp);
