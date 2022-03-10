import Button from "../../components/button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    text: "Hello",
    variant: "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    text: "Hello",
    variant: "secondary"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: "Hello",
  variant:  "tertiary"
}
