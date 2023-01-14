import Button from "./Button";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;
// Primary Button Templates ----------------------------------------------------------------

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Primary Button",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: "Primary Large",
  size: "large",
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  children: "Primary Medium",
  size: "medium",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: "Primary Small",
  size: "small",
};
// Secondary Button Templates ----------------------------------------------------------------

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  color: "secondary",
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  children: "Secondary Large",
  color: "secondary",
  size: "large",
};
export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  children: "Secondary Medium",
  color: "secondary",
  size: "medium",
};
export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  children: "Secondary Small",
  color: "secondary",
  size: "small",
};

// Text Button Templates ----------------------------------------------------------------
export const Text = Template.bind({});
Text.args = {
  ...Primary.args.task,
  children: "Text Button",
  color: "text",
};

export const TextLarge = Template.bind({});
TextLarge.args = {
  children: "Text Large",
  color: "text",
  size: "large",

};

export const TextMedium = Template.bind({});
TextMedium.args = {
  children: "Text Medium",
  color: "text",
  size: "medium",

};

export const TextSamll = Template.bind({});
TextSamll.args = {
  children: "Text Small",
  color: "text",
  size: "small",

};
