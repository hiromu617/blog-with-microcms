import { VFC } from "react";
import { Blog } from "../types/Blog";
import styled, { css } from "styled-components";
import { BlogCard } from "../components/BlogCard";
import { useAppSelector } from "../stores";

type Props = {
  blogs: Blog[];
};

export const BlogList: VFC<Props> = ({ blogs }) => {
  const currentUiState = useAppSelector((state) => state.uiState.state);
  console.log(currentUiState);

  return (
    <CardContainer state={currentUiState}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <div style={{ width: "300px" }}></div>
      <div style={{ width: "300px" }}></div>
    </CardContainer>
  );
};

const CardContainer = styled.div<{ state: "card" | "list" }>`
  width: 100%;
  padding-top: 50px;
  ${(props) =>
    props.state === "card" &&
    css`
      display: flex;
      gap: 50px;
      justify-content: space-around;
      flex-wrap: wrap;
    `}
`;
