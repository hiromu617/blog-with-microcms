import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import { CommentSubmitButton } from "../components/CommentSubmitButton";
import { Colors } from "../constants/Colors";

export default {
  component: CommentSubmitButton,
  title: "CommentSubmitButton",
  decorators: [story => <div style={{ padding: "50px", backgroundColor: Colors.CONTAINER_BG_COLOR }}>{story()}</div>],
} as ComponentMeta<typeof CommentSubmitButton>;

const Template: ComponentStory<typeof CommentSubmitButton> = (args) => (
  <CommentSubmitButton {...args} />
);

export const Catalog: Story= () => (
  <div style={{display: "flex", gap: "30px"}}>
    <CommentSubmitButton isSubmitting={false}/>
    <CommentSubmitButton isSubmitting/>
  </div>
)

export const Default = Template.bind({});
Default.args = {
  isSubmitting: false
};

export const Submitting = Template.bind({});
Submitting.args = {
  isSubmitting: true
};
