import { BlogCard } from "../components/BlogCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: BlogCard,
  title: "BlogCard",
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  blog: {
    id: "a",
    createdAt: "2021-10-08T00:59:00.560Z",
    updatedAt: "2021-10-08T00:59:00.560Z",
    publishedAt: "2021-10-08T00:59:00.560Z",
    revisedAt: "2021-10-08T00:59:00.560Z",
    title: "ブログタイトル",
    body: "a",
    thumbnail: {
      url: "https://images.microcms-assets.io/assets/5acdcfd0ba54425187a67742231e725d/2f00a7a254c2484f96cd218c374be26b/mykola-makhlai-1EOlu6c1D7o-unsplash%20(1).jpg",
      height: 960,
      width: 640,
    },
  },
};
