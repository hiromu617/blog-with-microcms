import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { client } from "../libs/client";
import { Blog } from "../types/Blog";
import { ResponseHeader } from "../types/ResponseHeader";
import { Pagination } from "../components/Pagination";
import { BlogList } from "../components/BlogList";
import { BlogTitle } from "../components/BlogTitle";

type Props = {
  blogs: Blog[];
  totalCount: number;
};

type Res = ResponseHeader & {
  contents: Blog[];
};

const Home: NextPage<Props> = ({ blogs, totalCount }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <BlogTitle />
        <BlogList blogs={blogs} />
        <Pagination totalCount={totalCount} path="blog" />
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data: Res = await client.get({ endpoint: "blogs?offset=0&limit=5" });

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
