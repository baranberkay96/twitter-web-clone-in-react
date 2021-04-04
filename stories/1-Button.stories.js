import React from "react";

import Button from "../components/button";

export default {
  title: "Buttons",
};

export const Primary = () => <Button>Save</Button>;

/*
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
const Template = (args) => <Button {...args} />;
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
* */
