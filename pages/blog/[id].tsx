import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { client } from "../../libs/client";
import type { NextPage } from "next";
import { Blog } from "../../types/Blog";
import { ResponseHeader } from "../../types/ResponseHeader";

type Props = {
  blog: Blog;
};

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
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
