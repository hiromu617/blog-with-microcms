import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BlogList } from "../components/BlogList";
import * as BlogCardStories from "./BlogCard.stories";

export default {
  component: BlogList,
  title: "BlogList",
  decorators: [story => <div style={{backgroundColor: "#DCD3C8"}}>{story()}</div>],
} as ComponentMeta<typeof BlogList>;

const Template: ComponentStory<typeof BlogList> = (args) => (
  <BlogList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  blogs: [
    {...BlogCardStories.Default.args?.blog!, id: "1", title: "ブログ1"},
    {...BlogCardStories.Default.args?.blog!, id: "2", title: "ブログ2"},
    {...BlogCardStories.Default.args?.blog!, id: "3", title: "ブログ3"},
    {...BlogCardStories.Default.args?.blog!, id: "4", title: "ブログ4"},
    {...BlogCardStories.Default.args?.blog!, id: "5", title: "ブログ5"},
  ]
};