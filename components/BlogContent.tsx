import { VFC } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Blog } from "../types/Blog";
import { CommentForm } from "./CommentForm";
import { CommentCard } from "./CommentCard";
import { parseDate } from "../utils/parseDate";
import { useComments } from "../hooks/useComments";

type Props = {
  blog: Blog;
};

export const BlogContent: VFC<Props> = ({ blog }) => {
  const { comments, error } = useComments(blog.id);

  if (error) return <p>An Error Occured!</p>;

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
      </Container>
      <CommentContainer>
        <CommentHeading>コメント</CommentHeading>
        {!comments && <p>Loading...</p>}
        {comments &&
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        <CommentForm blogId={blog.id} />
      </CommentContainer>
    </>
  );
};

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  margin: auto;
  padding: 50px;
  box-sizing: border-box;
  background-color: #f4f2ee;
  margin-top: 100px;
  margin-bottom: 100px;
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
  @media (max-width: 600px) {
    width: 95%;
    padding: 10px;
  }
`;

const CommentContainer = styled.div`
  width: 70%;
  max-width: 1000px;
  margin: auto;
  background-color: #f4f2ee;
  margin-top: 0;
  margin-bottom: 200px;
  color: #856841;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const CommentHeading = styled.h1`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 30px 0;
  border-bottom: 1px dotted #856841;
  margin: 0;
  @media (max-width: 600px) {
    padding: 20px;
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
  @media (max-width: 600px) {
    margin: 30px 0;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 50px;
  padding-left: 100px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding-left: 0px;
    text-align: center;
  }
`;

const Headding = styled.h1`
  color: #af9d84;
  font-weight: bold;
  font-size: 2rem;
`;

const Caption = styled.p`
  color: #af9d84;
`;
