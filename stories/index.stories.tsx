import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button, IProps } from "../src/components/Button";

class MyComponent extends React.Component<{}, IProps> {
  constructor(props: {}) {
    super(props);

    this.state = {
      data: {}
    };
    setTimeout(() => {
      this.setState({ data: { name: "zhangzhicheng" } });
    }, 5000);
  }
  render() {
    return <Button data={this.state.data} />;
  }
}

storiesOf("Button", module)
  .add("with text", () => {
    return <MyComponent />;
  })
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
