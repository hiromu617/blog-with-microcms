import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { client } from "../../libs/client";
import type { NextPage } from "next";
import { Blog } from "../../types/Blog";
import { ResponseHeader } from "../../types/ResponseHeader";
import { BlogContent } from '../../components/BlogContent';

type Props = {
  blog: Blog;
};

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <BlogContent blog={blog} />
  );
}; 

export default BlogId;

export const getStaticPaths = async () => {
  const data: ResponseHeader & { contents: Blog[] } = await client.get({
    endpoint: "blogs",
  });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  if(typeof id !== "string") return
  const data: Blog = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
