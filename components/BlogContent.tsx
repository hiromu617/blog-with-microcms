import { VFC } from "react";
import Image from "next/image";
import { Blog } from "../types/Blog";
import styled from "styled-components";
import { parseDate } from "../utils/parseDate";

type Props = {
  blog: Blog;
};

export const BlogContent: VFC<Props> = ({ blog }) => {
  return (
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
