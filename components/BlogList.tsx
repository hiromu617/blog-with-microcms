import { VFC } from "react";
import { Blog } from "../types/Blog";
import styled from "styled-components";
import { BlogCard } from "../components/BlogCard";

type Props = {
  blogs: Blog[];
};

export const BlogList: VFC<Props> = ({ blogs }) => {
  return (
    <CardContainer>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <div style={{ width: "300px" }}></div>
      <div style={{ width: "300px" }}></div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 50px;
`;
