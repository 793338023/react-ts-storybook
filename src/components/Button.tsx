import React from "react";

export interface IProps {
  data?: { name?: string };
}

export class Button extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { data: { name = "" } = {} } = this.props;
    console.log(name);
    return (
      <button style={{ backgroundColor: "#fff", border: "1px solid #ccc" }}>
        {name ? name : this.props.children}
      </button>
    );
  }
}
