import { GetStaticPropsContext,  GetStaticPaths, InferGetStaticPropsType } from 'next';
import { client } from "../../libs/client";
import type { NextPage } from "next";
import { Blog } from "../../types/Blog";
import { ResponseHeader } from "../../types/ResponseHeader";
import { BlogContent } from '../../components/BlogContent';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <BlogContent blog={blog} />
  );
}; 

export default BlogId;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ResponseHeader & { contents: Blog[] } = await client.get({
    endpoint: "blogs",
  });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id as string;
  const data: Blog = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data
    },
  };
};
