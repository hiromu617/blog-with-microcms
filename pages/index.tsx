import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { client } from "../libs/client";
import { Blog } from "../types/Blog";
import { ResponseHeader } from "../types/ResponseHeader";

type Props = {
  blogs: Blog[];
};

type Res = ResponseHeader & {
  contents: Blog[];
};

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data: Res = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
