import type { NextPage } from "next";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { Pagination } from "../../../components/Pagination";
import { Blog } from "../../../types/Blog";
import { ResponseHeader } from "../../../types/ResponseHeader";

const PER_PAGE = 5;

type Props = {
  blogs: Blog[];
  totalCount: number;
};

type Res = ResponseHeader & {
  contents: Blog[];
};

const BlogPageId: NextPage<Props> = ({ blogs, totalCount }) => {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} path="blog" />
    </div>
  );
};

export default BlogPageId;

// 動的なページを作成
export const getStaticPaths = async () => {
  const res = await fetch("https://jmtyblog.microcms.io/api/v1/blogs", {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY! },
  });
  const repos: Res = await res.json();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  if (typeof id !== "string") return console.log("error");

  const data: Res = await fetch(
    `https://jmtyblog.microcms.io/api/v1/blogs?offset=${
      (+id - 1) * 5
    }&limit=5`,
    {
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY! },
    }
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};
