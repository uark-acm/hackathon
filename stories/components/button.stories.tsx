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
