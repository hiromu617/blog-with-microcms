import { VFC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "../types/Blog";
import { Comment } from "../types/Comment";
import { ResponseHeader } from "../types/ResponseHeader";
import styled from "styled-components";
import { parseDate } from "../utils/parseDate";

type Props = {
  blog: Blog;
};

type Res = ResponseHeader & {
  contents: Comment[]
}

export const BlogContent: VFC<Props> = ({ blog }) => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    fetch(`https://jmtyblog.microcms.io/api/v1/comments?filters=blog[equals]${blog.id}`, {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY!,
      },
    })
      .then((res) => res.json())
      .then((data: Res) => {
        setComments(data.contents)
      });
  }, []);

  return (
    <>
      <TitleContainer>
        <Link href="/">
          <Headding>ブログのタイトル</Headding>
        </Link>
        <Caption>ブログの説明</Caption>
      </TitleContainer>
      <Container>
        <HeaderCotainer>
          <Heading>{blog.title}</Heading>
          <p>{parseDate(blog.publishedAt)}</p>
        </HeaderCotainer>
        <ImageContainer>
          <Image
            src={blog.thumbnail.url}
            width={"1000px"}
            height={"600px"}
            objectFit="cover"
          />
        </ImageContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          style={{ lineHeight: "2.5rem" }}
        />

        <h1>コメント</h1>
        {comments.map((comment) => (
          <div>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 70%;
  margin: auto;
  padding: 50px;
  background-color: #f4f2ee;
  margin-top: 100px;
  margin-bottom: 200px;
  color: #856841;
  position: relative;
  &:before {
    content: "Diary";
    position: absolute;
    right: 25px;
    top: -35px;
    font-size: 3rem;
    color: #f2ac64;
    font-family: cursive;
    font-weight: lighter;
  }
`;

const HeaderCotainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Heading = styled.h1`
  font-weight: 500;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 75px 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 50px;
  margin-left: 100px;
`;

const Headding = styled.h1`
  color: #af9d84;
  font-weight: bold;
  font-size: 2rem;
`;

const Caption = styled.p`
  color: #af9d84;
`;
