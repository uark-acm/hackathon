import Button from "../../components/button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />

export const button = Template.bind({});
button.args = {
    text: "Hello"
}
