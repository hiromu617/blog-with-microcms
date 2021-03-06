import type { NextPage, InferGetStaticPropsType } from "next";
import { GetStaticPropsContext } from "next";
import styled from "styled-components";
import { Pagination } from "../../../components/Pagination";
import { BlogTitle } from "../../../components/BlogTitle";
import { BlogList } from "../../../components/BlogList";
import { Blog } from "../../../types/Blog";
import { ResponseHeader } from "../../../types/ResponseHeader";
import { genArrayFromRange } from "../../../utils/genArrayfromRange";

const PER_PAGE = 5;

type Res = ResponseHeader & {
  contents: Blog[];
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogPageId: NextPage<Props> = ({ blogs, totalCount }) => {
  return (
    <Container>
      <BlogTitle />
      <BlogList blogs={blogs} />
      <Pagination totalCount={totalCount} path="blog" />
    </Container>
  );
};

export default BlogPageId;

// 動的なページを作成
export const getStaticPaths = async () => {
  const res = await fetch("https://jmtyblog.microcms.io/api/v1/blogs", {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY! },
  });
  const repos: Res = await res.json();

  const paths = genArrayFromRange(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id as string;

  const data: Res = await fetch(
    `https://jmtyblog.microcms.io/api/v1/blogs?offset=${(+id - 1) * 5}&limit=5`,
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

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: auto;
  padding-bottom: 30px;
  @media (max-width: 600px) {
    width: 95%;
  }
`;
