import { VFC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Blog } from "../types/Blog";
import Image from "next/image";
import { parseDate } from "../utils/parseDate";

type Props = {
  blog: Blog;
};

export const BlogCard: VFC<Props> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} key={blog.id}>
      <Card>
        <Image
          src={blog.thumbnail.url}
          width={"300px"}
          height={"320px"}
          objectFit="cover"
        />
        <CardContent>
          <CardTitle>{blog.title}</CardTitle>
          <Divider />
          <CardDate>{parseDate(blog.createdAt)}</CardDate>
        </CardContent>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  width: 300px;
  height: 450px;
  background-color: #eee9e2;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 10px;
`;

const CardTitle = styled.p`
  color: #856841;
  font-weight: bold;
  line-height: 0;
  margin-bottom: 30px;
`;

const Divider = styled.div`
  border-top: 1px dotted #856841;
`;

const CardDate = styled.p`
  font-size: 0.75rem;
  color: #856841;
`;
